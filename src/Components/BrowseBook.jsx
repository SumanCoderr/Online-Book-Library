import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { useParams, Link } from 'react-router-dom';

function BrowseBook() {

  const bookItems = useSelector((store) => store.book.items);
  const { genre } = useParams();

  const [filteredBooks, setFilteredBooks] = useState(bookItems);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = bookItems;

    if (genre) {
      filtered = filtered.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }

    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [bookItems, genre, searchTerm]);

  return (
    <>
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <ul>
        <li><Link to="/browsebook/fic">Fiction</Link></li>
        <li><Link to="/browsebook/non-fic">Non-Fic</Link></li>
        <li><Link to="/browsebook/sci-fi">Sci-Fi</Link></li>
        <li><Link to="/browsebook/romance">Romance</Link></li>
        <li><Link to="/browsebook/thriller">Thriller</Link></li>
        <li><Link to="/browsebook">All Books</Link></li>
      </ul>


      {filteredBooks.map(book => <Book key={book.id} bookDetails={book} />)}
    </>
  );
}

export default BrowseBook;
