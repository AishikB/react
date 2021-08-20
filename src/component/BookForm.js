import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";

const BookForm = () => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BooksContext);

  const changeBookController = (event) => {
    setBook(event.target.value);
  };

  const changeAuthorController = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //addBook(book, author);
    dispatch({
      type: "ADD_BOOK",
      book: {
        name: book,
        author: author,
      },
    });
    setAuthor("");
    setBook("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Enter Book Name:</label>
      <input type="text" onChange={changeBookController} value={book} />
      <label>Enter Author Name:</label>
      <input type="text" onChange={changeAuthorController} value={author} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
