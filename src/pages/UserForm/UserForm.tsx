import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastService } from "../../helpers/toastService";
import "react-toastify/dist/ReactToastify.css";

import { postUsers } from "../../api/api";

export const UserForm = () => {
  interface userForm {
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    password: string;
  }

  const [formData, setFormData] = useState<userForm>({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const lowerCaseValue =
      name === "email" || name === "role" ? value.toLowerCase() : value;
    setFormData((prevData) => ({ ...prevData, [name]: lowerCaseValue }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postUsers(formData);
      toastService("User created!!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        password: "",
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
            <strong>Please enter a new user for My University Library</strong>
          </h1>
        </div>
        <div className="col-md-0 col-lg-2"></div>

        <div className="col-lg-5 bg-light box-2">
          <form onSubmit={handleSubmit} className="row p-2">
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <label className="col-12 mt-2 px-0">Firstname</label>
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="col-12 mt-2"
              type="text"
              placeholder="Ex: Samantha"
              required
            />
            <label className="col-12 mt-2 px-0">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: Freeman"
              required
            />
            <label className="col-12 mt-2 px-0">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: email@email.com"
              required
            />
            <label className="col-12 mt-2 px-0">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: student/admin"
              required
            />
            <label className="col-12 mt-2 px-0">Password</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="col-12 mt-2"
              placeholder="Ex: 123456gt"
              required
            />
            <button className="btn btn-success col-10 my-3 mx-auto">
              Submit Book
            </button>
          </form>
        </div>
        <button
          onClick={() => navigate("/")}
          className="btn btn-secondary col-10 my-3 mx-auto"
        >
          Go Back to Inventory
        </button>
      </div>
    </div>
  );
};
