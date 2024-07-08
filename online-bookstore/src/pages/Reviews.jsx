import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToOrders = () => {
    navigate('/orders');
  };

  return (
    <div>
      <h1>Reviews Page</h1>
      {/* <button onClick={goToHome}>Go to Home</button> */}
      <br />
      {/* <button onClick={goToOrders}>Go to Orders</button> */}
    </div>
  );
};

export default Reviews;
