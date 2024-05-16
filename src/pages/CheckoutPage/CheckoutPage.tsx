import { useState, useEffect } from "react";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { Booklist } from "../../components/BookList/BookList";
import { getBooks } from "../../api/api";
import { IBookList } from "../../interfaces/bookscheckout";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastService } from "../../helpers/toastService";
import "react-toastify/dist/ReactToastify.css";

import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const [books, setBooks] = useState<IBookList[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      const maxPage =
        typeof totalPages === "number" && isFinite(totalPages)
          ? totalPages
          : currentPage + 1;
      return Math.min(nextPage, maxPage);
    });
  };
  const navigate = useNavigate();

  useEffect(() => {
    getBooks(currentPage).then((resp) => {
      setBooks(resp.data);
      setTotalPages(resp.data);
    });
  }, [currentPage]);

  console.log(currentPage);

  return (
    <div className="container-fluid vh-100 bg-dark main-app  d-flex justify-content-center align-items-center">
      <div className="container login-container px-5 row justify-content-center">
        <h2 className="text-white text-center mb-2">Books Checkout</h2>

        <div className="col-lg-5 d-flex gap-3 align-items-center">
          <CheckoutForm />
        </div>
        <div className="col-md-0 col-lg-2"></div>
        <div className="col-lg-5 bg-light box-2 d-flex flex-wrap">
          {books.map((payload) => (
            <Booklist key={payload.id} items={payload} />
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-4 mt-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="btn btn-secondary"
          >
            Back
          </button>
          <div>
            <h5 className="text-white text-center">Books Pagination</h5>
            <button onClick={() => navigate("/")} className="btn btn-success">
              Go back to inventory
            </button>
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage > totalPages}
            className="btn btn-secondary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
