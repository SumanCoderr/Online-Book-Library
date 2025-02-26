import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex bg-amber-400 justify-around p-2'>
      <img className='w-10 h-10 rounded-3xl ' src="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=" alt="logo" />

      <ul className='flex gap-2 text-sm font-semibold uppercase  my-auto md:text-xl md:gap-5 lg:text-lg'>
        <li className='hover:text-white'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-white'>     
           <Link to="/browsebook">Browse Books</Link>
        </li>
        <li className='hover:text-white'>      
          <Link to="/addbook">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;