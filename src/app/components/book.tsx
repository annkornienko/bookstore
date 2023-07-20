"use client";

import { useDispatch } from "react-redux";
import { deleteBook } from "../store/bookStoreSlice";
import { AppDispatch } from "../store/rootReducer";
import { BookProps } from "../types";

import styles from "./components.module.css";

interface BookComponentProps {
  data: BookProps;
  onEdit: (data: BookProps) => void;
}

const Book: React.FC<BookComponentProps> = ({ data, onEdit }) => {
  const { id, name, price, category } = data;
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    id && dispatch(deleteBook(id));
  };

  return (
    <tr>
      <td>
        <button onClick={() => onEdit(data)} className={styles.name}>
          {name}
        </button>
      </td>
      <td className={styles.price}>{price}</td>
      <td className={styles.category}>{category}</td>
      <td>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Book;
