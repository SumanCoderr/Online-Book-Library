import React from 'react';
import { Link } from 'react-router-dom';
import { BookData } from '../utilis/BookData';
import Book from './Book';

function Home() {  

  const popularBooks = BookData.filter(book => book.rating>4.6) 

  return (
    <div>
      <h1 className='w-6/12 m-auto py-5 text-center text-red-950 uppercase font-bold md:text-3xl md:py-8'>Welcome to the Online Library</h1>
      <ul className='flex justify-evenly flex-wrap'>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500 '><Link to="/book/fic">Fiction</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/book/non-fic">Non-Fiction</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/book/sci-fi">Sci-Fiction</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/book/romance">Romance</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/book/thriller">Thriller</Link></li>
      </ul>
      <h2 className='w-6/12 m-auto py-4 text-center text-red-950 uppercase font-bold md:text-2xl md:py-8'>Popular Books</h2>
      <div className='flex justify-evenly gap-10 flex-wrap text-center p-3 md:gap-0'>
        {popularBooks.map(book => <Book bookDetails = {book}/>)}
      </div>
    </div>
  );
}

export default Home;