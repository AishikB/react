import { createContext, useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { bookReducer } from "../reducers/bookReducer";
export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { id: 1, name: "My Life", author: "Aishik" },
    { id: 2, name: "Crash course on JS", author: "Dev" },
    { id: 3, name: "Node start", author: "ASada" },
  ]);

  // const addBook = (book, author) => {
  //   setBook((prevState) => {
  //     return [...prevState, { id: uuid(), name: book, author }];
  //   });
  // };

  // const removeBook = (id) => {
  //   setBook((prevState) => {
  //     return prevState.filter((book) => book.id != id);
  //   });
  // };
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
