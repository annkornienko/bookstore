import { useState } from "react";
import { BookProps } from "../types";

interface BookFormProps {
  book?: BookProps;
  onSave: (formData: Partial<BookProps>) => void;
  onClose: () => void;
}

const BookForm = ({ book, onSave, onClose }: BookFormProps) => {
  const initialFormData = book || {
    name: "",
    price: 0,
    category: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <form onSubmit={handleSave}>
      <label> Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Price</label>
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  );
};

export default BookForm;
