import React from 'react';

const BookReviews = ({ review }) => {
  return (
    <div>
      <h2>Book: {review.bookTitle}</h2>
      <p>Reviewer: {review.customerName}</p>
      <p>Rating: {review.rating}</p>
      <p>Comment: {review.comment}</p>
    </div>
  );
};

export default BookReviews;
