import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import { useParams, Link } from "react-router-dom";

function BrowseBook() {
  const bookItems = useSelector((store) => store.book.items);
  const { genre } = useParams(); //get category from url

  const [filteredBooks, setFilteredBooks] = useState(bookItems);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = bookItems;

    if (genre) {
      filtered = filtered.filter(
        (book) => book.genre.toLowerCase() === genre.toLowerCase()
      ); //filltered books on the basis of category
    }

    //search book
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [bookItems, genre, searchTerm]);

  return (
    <>
      <div className="flex justify-center my-5 md:m-10">
        <input
          className="p-3 rounded-3xl bg-amber-200 text-lg md:text-xl md:py-2 md:w-1/4 "
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="flex justify-evenly flex-wrap">
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/browsebook">All Books</Link>
        </li>
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/book/fic">Fiction</Link>
        </li>
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/book/non-fic">Non-Fic</Link>
        </li>
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/book/sci-fi">Sci-Fi</Link>
        </li>
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/book/romance">Romance</Link>
        </li>
        <li className="border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500">
          <Link to="/book/thriller">Thriller</Link>
        </li>
      </ul>

      <div className="flex justify-evenly gap-5  flex-wrap text-center md:gap-5 md:m-2">
        {filteredBooks.map((book) => (
          <Book key={book.id} bookDetails={book} />
        ))}
      </div>
    </>
  );
}

export default BrowseBook;
