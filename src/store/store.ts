import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/charactersSlice";
import moviesSlice from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    charactersSlice,
    moviesSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
