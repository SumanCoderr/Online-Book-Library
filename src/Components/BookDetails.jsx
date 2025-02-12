import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((store) => store.book.items.find(b => b.id === parseInt(id)));

  if (!book) return <div>Book not found</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browsebook">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;