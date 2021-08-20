import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookDetails from "./BookDetails";

const BooksList = (props) => {
  const { books } = useContext(BooksContext);
  return books.length > 0 ? (
    <div>
      {books.map((book, index) => (
        <BookDetails key={index} book={book} />
      ))}
    </div>
  ) : (
    <p>You do not have any books to read</p>
  );
};

export default BooksList;
