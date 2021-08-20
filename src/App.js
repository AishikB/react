import logo from "./logo.svg";
import "./App.css";
import BooksContextProvider from "./context/BooksContext";
import NavBar from "./component/NavBar";
import BooksList from "./component/BooksList";
import BookForm from "./component/BookForm";

function App() {
  return (
    <div className="App">
      <BooksContextProvider>
        <NavBar />
        <BooksList />
        <BookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
