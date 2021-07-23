import React, { useState, useEffect } from "react";
import GenreCard from "./components/GenreCard";
import BookCard from "./components/BookCard";
import myGoodBooks from "./myGoodBooks";
import "./App.css";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (selectedGenre) {
      let booksArr = myGoodBooks
        .filter((genre) => genre.genre === selectedGenre)
        .map((genre) => {
          return genre.books;
        })[0];

      setBookList(booksArr);
    }
  }, [selectedGenre]);

  return (
    <div className="App">
      <header>
        <h1>📔GoodBooks</h1>
        <p>Here are my recommned books for the following genre, Enjoy!😄</p>
      </header>
      <hr />
      {myGoodBooks.map((genre, i) => (
        <GenreCard
          key={i}
          genre={genre.genre}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      ))}
      <hr />
      Genre Selected: {selectedGenre}
      {bookList &&
        bookList.map((book, i) => (
          <BookCard
            key={i}
            book={book.name}
            stars={book.stars}
            link={book.link}
          />
        ))}
    </div>
  );
};

export default App;
