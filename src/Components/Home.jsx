import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className='w-6/12 m-auto py-5 text-center text-red-950 uppercase font-bold md:text-3xl md:py-8'>Welcome to the Book Library</h1>
      <ul className='flex justify-evenly flex-wrap'>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500 '><Link to="/browsebook/fic">Fiction</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/browsebook/non-fic">Non-Fic</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/browsebook/sci-fi">Sci-Fi</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/browsebook/romance">Romance</Link></li>
        <li className='border-2 p-2 px-6 uppercase font-semibold rounded-3xl bg-cyan-700 cursor-pointer mb-5 hover:bg-cyan-500'><Link to="/browsebook/thriller">Thriller</Link></li>
      </ul>
      <h2 className='w-6/12 m-auto py-4 text-center text-red-950 uppercase font-bold md:text-2xl md:py-8'>Popular Books</h2>
      <ul>
        <li><Link to="/book/1">Book 1</Link></li>
        <li><Link to="/book/2">Book 2</Link></li>
      </ul>
    </div>
  );
}

export default Home;