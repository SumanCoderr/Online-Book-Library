import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((store) => store.book.items.find(b => b.id === parseInt(id))); //fillter book related to that id

  if (!book) return <div className='text-xl font-semibold m-4'>Book not found</div>; // book is not found

  return (
    <div className='flex flex-col gap-2 md:flex-row md:justify-center md:gap-8 md:m-20 '>
      <img className='w-56 h-80 self-center mt-8' src={book.coverImage} alt="" />

      <div className='flex flex-col gap-2 mt-20'>
      <h1 className='w-56 self-center'><b>Title :</b> {book.title}</h1>
      <h3 className='w-56 self-center'><b>Author :</b> {book.author}</h3>
      <p className='w-56 self-center'><b>Description :</b> {book.description}</p>
      <p className='w-56 self-center'> <b>Rating:</b> {book.rating}</p>
      <Link  className='p-2 rounded-3xl bg-cyan-700 self-center border-2 ' to="/browsebook">Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetails;