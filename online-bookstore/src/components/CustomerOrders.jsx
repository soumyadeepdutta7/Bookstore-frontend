import React from 'react';

const CustomerOrders = ({ order }) => {
  return (
    <div>
      <h2>Order ID: {order.id}</h2>
      <p>Customer: {order.customerName}</p>
      <p>Books Ordered:</p>
      <ul>
        {order.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerOrders;
