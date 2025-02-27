import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1 className='m-5 text-2xl font-semibold'>Page Not Found</h1>
      <Link className='border-2 bg-cyan-700 rounded-3xl p-2 m-5  ' to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;