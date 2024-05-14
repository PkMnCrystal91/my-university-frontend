import React from "react";
import { BooksCheckout } from "../../interfaces/bookscheckout";

export const Tbody: React.FC<{ items: BooksCheckout }> = (props) => {
  const { book, user, id } = props.items;

  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{book.title}</td>
        <td>
          <button className="btn btn-danger">Returned</button>
        </td>
      </tr>
    </tbody>
  );
};
