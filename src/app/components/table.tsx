"use client";
import { v4 as uuidv4 } from "uuid";
import { useState, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/rootReducer";
import Book from "./book";
import PopUp from "./popup";
// import BookForm from "./bookForm";
import { BookProps } from "../types";
import { addBook, updateBook } from "../store/bookStoreSlice";
import styles from "./components.module.css";

const LazyBookForm = lazy(() => import("./bookForm"));

const tableHeaderData = ["name", "price", "category"];

const tableHeader = () => {
  return tableHeaderData.map((data, idx) => {
    return <td key={`${data}-${idx}`}>{data.toUpperCase()}</td>;
  });
};

const Table = () => {
  const books = useSelector((state: RootState) => state.bookStore.books);
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const togglePopUp = (book: BookProps) => {
    setSelectedBook(book);
    setShowPopUp(true);
  };

  const handleEditBook = (updatedData: BookProps) => {
    dispatch(updateBook(updatedData));
    setShowPopUp(false);
    setSelectedBook(null);
  };

  const onClosePopUp = () => {
    setSelectedBook(null);
    setShowPopUp(false);
  };

  const handleAddBook = (newData: BookProps) => {
    const newBook: BookProps = {
      id: uuidv4(),
      ...newData,
    };
    dispatch(addBook(newBook));
    setShowPopUp(false);
  };

  return (
    <>
      <button className={styles.addButton} onClick={() => setShowPopUp(true)}>
        Add book
      </button>
      <table>
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>
          {books.map((data) => (
            <Book
              key={data.id}
              data={data}
              onEdit={(book) => togglePopUp(book)}
            />
          ))}
        </tbody>
      </table>
      {showPopUp && (
        <PopUp>
          {selectedBook ? (
            <LazyBookForm
              book={selectedBook}
              onSave={(updateData) => handleEditBook(updateData)}
              onClose={onClosePopUp}
            />
          ) : (
            <LazyBookForm
              onSave={(newData) => handleAddBook(newData)}
              onClose={onClosePopUp}
            />
          )}
        </PopUp>
      )}
    </>
  );
};

export default Table;
