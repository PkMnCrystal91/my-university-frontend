import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Login } from "./pages/Login/Login.tsx";
import { Inventory } from "./pages/Inventory/Inventory.tsx";
import { BrowserRouter } from "react-router-dom";
import { BookForm } from "./pages/BookForm/BookForm.tsx";
import { UserForm } from "./pages/UserForm/UserForm.tsx";
import { StudentPage } from "./pages/StudentPage/StudentPage.tsx";
import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm.tsx";
import { Booklist } from "./components/BookList/BookList.tsx";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CheckoutPage />
  </BrowserRouter>
);
