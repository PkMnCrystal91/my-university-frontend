import React, { useState } from "react";
import { postBooks } from "../../api/api";

export const BookForm = () => {
  interface bookForm {
    title: string;
    author: string;
    publishedyear: string;
    genre: string;
    stock: number;
  }

  const [formData, setFormData] = useState<bookForm>({
    title: "",
    author: "",
    publishedyear: "",
    genre: "",
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "publishedyear") {
      if (value.length <= 4 && /^\d+$/.test(value)) {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postBooks(formData);
      setFormData({
        title: "",
        author: "",
        publishedyear: "",
        genre: "",
        stock: 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid vh-100 bg-dark main-app d-flex justify-content-center align-items-center">
      <div className="container login-container px-5 row justify-content-center">
        <div className="col-lg-5 d-flex align-items-center">
          <h1 className="text-white display-5">
            <strong>Please enter a new book for My University Library</strong>
          </h1>
        </div>
        <div className="col-md-0 col-lg-2"></div>

        <div className="col-lg-5 bg-light box-2">
          <form onSubmit={handleSubmit} className="row p-2">
            <label className="col-12 mt-2 px-0">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="col-12 mt-2"
              type="text"
              placeholder="Ex: The Lord of Rings"
            />
            <label className="col-12 mt-2 px-0">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: John Ronald Reuel Tolkien"
            />
            <label className="col-12 mt-2 px-0">Published year</label>
            <input
              type="text"
              name="publishedyear"
              value={formData.publishedyear}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: 1991"
              maxLength={4}
            />
            <label className="col-12 mt-2 px-0">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: Fantasy"
            />
            <label className="col-12 mt-2 px-0">In Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="col-12 mt-2"
            />
            <button className="btn btn-success col-10 my-3 mx-auto">
              Submit Book
            </button>
          </form>
        </div>
        <button className="btn btn-secondary col-10 my-3 mx-auto">
          Go Back to Inventory
        </button>
      </div>
    </div>
  );
};
