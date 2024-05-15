import React, { useState } from "react";
import { postBooksCheckouts } from "../../api/api";

export const CheckoutForm = () => {
  interface checkForm {
    user_id: number;
    book_id: number;
    quantity: number;
  }

  const [formData, setFormData] = useState<checkForm>({
    user_id: 0,
    book_id: 0,
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postBooksCheckouts(formData);
      setFormData({
        user_id: 0,
        book_id: 0,
        quantity: 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row p-2 bg-light">
      <label className="col-12 mt-2 px-0">Please enter User ID</label>
      <input
        name="user_id"
        value={formData.user_id}
        onChange={handleChange}
        className="col-12 mt-2"
        type="number"
      />
      <label className="col-12 mt-2 px-0">Please enter Book ID</label>
      <input
        type="number"
        name="book_id"
        value={formData.book_id}
        onChange={handleChange}
        className="col-12 mt-2"
        placeholder="Ex: John Ronald Reuel Tolkien"
      />
      <label className="col-12 mt-2 px-0">Enter quantity</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="col-12 mt-2"
        placeholder="Ex: 1991"
      />

      <button className="btn btn-success col-10 my-3 mx-auto">
        Submit Book Checkout
      </button>
    </form>
  );
};
