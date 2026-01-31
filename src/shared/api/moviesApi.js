import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "./baseApi";

export const moviesApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movies",
    }),
    getWhoasByMovie: builder.query({
      query: ({ movieName, results = 100 }) =>
        `/random?movie=${encodeURIComponent(movieName)}&results=${results}`,
      transformResponse: (response) => {
        const map = new Map();

        response.forEach((item) => {
          const key = `${item.video["360p"]}`;
          if (!map.has(key)) {
            map.set(key, item);
          }
        });

        const result = [];
        for (let value of map.values()) {
          result.push(value);
        }

        return result;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetWhoasByMovieQuery } = moviesApi;
