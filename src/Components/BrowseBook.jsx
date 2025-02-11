import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { Link, useParams } from 'react-router-dom';

function BrowseBook() {

  const bookItems = useSelector((store) => store.book.items)
  // console.log(bookItems)
  const  {genre} = useParams();

  const[filteredBooks, setfilteredbooks] = useState(bookItems)
  // console.log(genre)
  setfilteredbooks(bookItems.filter(book => book.genre.toLowerCase() == genre.toLowerCase() )) ;
  // console.log(filteredBooks)


  const [searchTerm, setSearchTerm] = useState('');  
  function handleSearch(){
    var filteredSearchedBook =  bookItems.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) )
  }  

  if(genre){
    setfilteredbooks(bookItems.filter(book => book.genre.toLowerCase() == genre.toLowerCase() )) ;
  }
  if(searchTerm){
    setfilteredbooks(filteredSearchedBook)
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      {/* <h1>All Books</h1> */}
      {/* {bookItems.map((book => <Book key = {book.id} bookDetails={book}/>))} */}
      {/* <h2>{genre.toUpperCase()}</h2>
      {filteredBooks.map((book => <Book key = {book.id} bookDetails={book}/>))} */}
      {/* <h2>Searched Book</h2>
      {filteredSearchedBook.map((book => <Book key = {book.id} bookDetails={book}/>))}  */}

      

      {filteredBooks.map(book => <Book  key = {book.id} bookDetails={book} />)}


    </>
  );
}

export default BrowseBook;