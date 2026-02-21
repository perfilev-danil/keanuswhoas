import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../../../shared/api/moviesApi";
import favoriteReducer from "../../../features/favorites/model/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
