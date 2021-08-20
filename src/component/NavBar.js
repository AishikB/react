import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const NavBar = (props) => {
  const { books } = useContext(BooksContext);
  return (
    <nav>
      <h1>Welcome</h1>
      <p>You have {books.length} books to read.</p>
    </nav>
  );
};

export default NavBar;
