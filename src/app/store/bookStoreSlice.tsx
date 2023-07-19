"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { books } from "../data";
import { BookProps } from "../types";
interface BookStoreState {
  books: BookProps[];
}

const initialState: BookStoreState = {
  books: books,
};

const bookStoreSlice = createSlice({
  name: "bookStore",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookProps>) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === action.payload
      );

      if (bookIndex !== -1) {
        state.books.splice(bookIndex, 1);
      }
    },
    updateBook: (state, action: PayloadAction<BookProps>) => {
      const { id, name, price, category, description } = action.payload;

      const idx = state.books.findIndex((book) => book.id === id);

      if (idx !== -1) {
        state.books[idx] = { id, name, price, category, description };
      }
    },
  },
});

// export const selectBooks = (state: BookStoreState): Book[] => state.books;
export const { addBook, deleteBook, updateBook } = bookStoreSlice.actions;
export default bookStoreSlice.reducer;
