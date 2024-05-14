import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { shallow } from "zustand/shallow";

export const Login = () => {
  const { users } = useAuthStore(
    (state) => ({
      users: state.users,
    }),
    shallow
  );
  const { loginUsers } = useAuthStore();

  interface loginForm {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<loginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUsers(formData.email, formData.password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid main-app d-flex justify-content-center align-items-center">
      <div className="container login-container px-5 row justify-content-center">
        <div className="col-lg-5 d-flex align-items-center">
          <h1 className="text-white display-5">
            <strong>Please Login to get into My University Library</strong>
          </h1>
          <div>{JSON.stringify(users)}</div>
        </div>
        <div className="col-md-0 col-lg-2"></div>
        <div className="col-lg-5 bg-light box-2">
          <form onSubmit={handleSubmit} className="row p-2">
            <label className="col-12 mt-2 px-0">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="col-12 mt-2"
              type="text"
            />
            <label className="col-12 mt-2 px-0">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="col-12 mt-2"
            />
            <button className="btn btn-secondary col-10 my-3 mx-auto">
              Let's login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
