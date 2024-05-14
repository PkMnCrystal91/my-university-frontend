import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Login } from "./pages/Login/Login.tsx";
import { Inventory } from "./pages/Inventory/Inventory.tsx";
import { BrowserRouter } from "react-router-dom";
import { BookForm } from "./pages/BookForm/BookForm.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <BookForm />
  </BrowserRouter>
);
