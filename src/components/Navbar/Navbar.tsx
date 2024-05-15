import { useAuthStore } from "../../store/authStore";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  const { users } = useAuthStore(
    (state) => ({
      users: state.users,
    }),
    shallow
  );

  const data = users
    ? users.find((user) => user.role === "admin" || "student")
    : "";
  const { cleanStore } = useAuthStore();
  const navigate = useNavigate();

  const handleCleanStore = () => {
    cleanStore();
    localStorage.removeItem("auth-storage");
    navigate("/");
  };

  return (
    <div className="container main-bar bg-light d-flex justify-content-end px-5">
      <div className="nav-options d-flex align-items-center justify-content-between w-25">
        <p>{data[0].email}</p>
        <div className="line"></div>

        <button onClick={handleCleanStore} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};
