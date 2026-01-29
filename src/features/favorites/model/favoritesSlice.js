import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    saveToFavorites: (state, { payload }) => {
      const exists = state.list.some(
        (item) => item.video["360p"] === payload.video["360p"],
      );
      if (!exists) {
        state.list.push(payload);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      state.list = state.list.filter(
        (item) => item.video["360p"] !== payload.video["360p"],
      );
    },
  },
});

export const { saveToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
