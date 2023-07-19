"use client";

import { configureStore } from "@reduxjs/toolkit";
import bookStoreReducer from "./bookStoreSlice";

const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
