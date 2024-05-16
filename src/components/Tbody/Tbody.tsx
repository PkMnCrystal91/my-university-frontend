import React, { useEffect } from "react";

import { BooksCheckout } from "../../interfaces/bookscheckout";
import { deleteBooksCheckout } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const Tbody: React.FC<{ items: BooksCheckout }> = (props) => {
  const { book, user, id } = props.items;

  const navigate = useNavigate();

  const onHandleDelete = () => {
    deleteBooksCheckout(id);
    navigate("/inventory");
  };

  useEffect(() => {}, [props.items]);

  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{book.title}</td>
        <td>
          <button onClick={onHandleDelete} className="btn btn-danger">
            Returned
          </button>
        </td>
      </tr>
    </tbody>
  );
};
