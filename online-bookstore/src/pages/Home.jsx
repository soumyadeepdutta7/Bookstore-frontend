import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/orders');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Bookstore</h1>
      <button className="home-button" onClick={handleClick}>Go to Orders</button>
    </div>
  );
};

export default Home;
