import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utilis/bookSlice';


function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description || !rating || !genre) { //check all the fields are filled or not
      alert('Please fill in all fields');
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      description,
      rating: parseInt(rating),
      category: genre, // Default category or allow selection
    };

    dispatch(addBook(newBook));
    navigate('/browsebook');
  };

  return (
    <>
    <div className='flex justify-center'>
      <h1 className='text-lg mt-5 font-semibold uppercase text-red-900 md:my-8 md:text-3xl'>Add New Book</h1>
      </div>
    <form className='border-2 border-red-950 p-5 rounded-2xl m-5 flex flex-col gap-3 bg-amber-800 md:w-6/12 md:m-auto'   onSubmit={handleSubmit}>
      <input
      className='bg-amber-200 rounded-2xl p-2'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
      className='bg-amber-200 rounded-2xl p-2'
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
      className='bg-amber-200 rounded-2xl p-2'
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <textarea
      className='bg-amber-200 rounded-2xl p-2'
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
      className='bg-amber-200 rounded-2xl p-2'
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button className='bg-cyan-700 w-30 p-2 cursor-pointer rounded-3xl uppercase text-base font-semibold hover:bg-cyan-500' type="submit">Add Book</button>
    </form>
    </>
  );
}

export default AddBook;