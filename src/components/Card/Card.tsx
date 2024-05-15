import React from "react";
import "./Card.css";
import { BooksCheckout } from "../../interfaces/bookscheckout";

export const Card: React.FC<{ items: BooksCheckout }> = (props) => {
  const { book, quantity } = props.items;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Book title: {book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <p className="card-text">Quantity: {quantity}</p>
      </div>
    </div>
  );
};
