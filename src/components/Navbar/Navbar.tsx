import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="container main-bar bg-light d-flex justify-content-end px-5">
      <div className="nav-options d-flex align-items-center justify-content-between w-25">
        <p>email@email.com</p>
        <div className="line"></div>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};
