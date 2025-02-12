import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to the Book Library</h1>
      <ul>
        <li><Link to="/browsebook/fic">Fiction</Link></li>
        <li><Link to="/browsebook/non-fic">Non-Fic</Link></li>
        <li><Link to="/browsebook/sci-fi">Sci-Fi</Link></li>
        <li><Link to="/browsebook/romance">Romance</Link></li>
        <li><Link to="/browsebook/thriller">Thriller</Link></li>
      </ul>
      <h2>Popular Books</h2>
      <ul>
        <li><Link to="/book/1">Book 1</Link></li>
        <li><Link to="/book/2">Book 2</Link></li>
      </ul>
    </div>
  );
}

export default Home;