import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { shallow } from "zustand/shallow";
import { Inventory } from "../pages/Inventory/Inventory";
import { BookForm } from "../pages/BookForm/BookForm";
import { UserForm } from "../pages/UserForm/UserForm";
import { Login } from "../pages/Login/Login";

export const AppRouter = () => {
  const { users } = useAuthStore(
    (state) => ({
      users: state.users,
    }),
    shallow
  );

  const data = users.find((user) => user.role === "admin" || "student");
  let role: string;
  if (data) {
    role = data[0]?.role;
  }

  console.log(role);

  return (
    <>
      <Routes>
        {role === "admin" ? (
          <>
            <Route path="/" element={<Inventory />} />
            <Route path="/books" element={<BookForm />} />
            <Route path="/users" element={<UserForm />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
