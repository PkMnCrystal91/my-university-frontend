import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";

export const Login = () => {
  const { loginUsers, users } = useAuthStore();
  const [refresher, setrefresher] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setrefresher(false);
    }, 600);
  }, [users]);

  console.log(refresher);

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

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      window.location.reload();
    }
  };

  return (
    <div className="container-fluid vh-100 bg-dark main-app d-flex justify-content-center align-items-center">
      {refresher === true ? (
        <div className="text-white"> Loading... </div>
      ) : (
        <div className="container login-container px-5 row justify-content-center">
          <div className="col-lg-5 d-flex align-items-center">
            <h1 className="text-white display-5">
              <strong>Please Login to get into My University Library</strong>
            </h1>
            <h2>{JSON.stringify(users)}</h2>
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
      )}
    </div>
  );
};
