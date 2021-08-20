import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { v4 as uuid } from "uuid";
const BookDetails = (props) => {
  const { book } = props;
  const { dispatch } = useContext(BooksContext);
  const handleRemoveBook = () => {
    dispatch({ type: "REMOVE_BOOK", id: book.id });
  };
  return (
    <li key={uuid()} onClick={handleRemoveBook}>
      {book.name} by {book.author}
    </li>
  );
};

export default BookDetails;
