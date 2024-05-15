import React from "react";
import "./BookList.css";
import { IBookList } from "../../interfaces/bookscheckout";

export const Booklist: React.FC<{ items: IBookList }> = (props) => {
  const { id, title, stock } = props.items;
  return (
    <ul>
      <li className="book-list">
        <p>ID#: {id}</p>
        <p>Title: {title}</p>
        <p>In Stock: {stock}</p>
      </li>
    </ul>
  );
};
