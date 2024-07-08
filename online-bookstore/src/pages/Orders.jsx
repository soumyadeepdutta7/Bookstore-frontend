import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToReviews = () => {
    navigate('/reviews');
  };

  return (
    <div>
      <h1>Orders Page</h1>
      {/* <button onClick={goToHome}>Go to Home</button> */}
      <br />
      {/* <button onClick={goToReviews}>Go to Reviews</button> */}
    </div>
  );
};

export default Orders;
