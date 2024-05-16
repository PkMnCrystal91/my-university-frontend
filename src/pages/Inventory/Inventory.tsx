import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Thead } from "../../components/Thead/Thead";
import { Tbody } from "../../components/Tbody/Tbody";
import { BooksCheckout } from "../../interfaces/bookscheckout";
import { getBooksCheckouts } from "../../api/api";
import { SearchForm } from "../../components/SearchForm/SearchForm";

export const Inventory = () => {
  const [checkOuts, setcheckOuts] = useState<BooksCheckout[]>([]);
  const [searchByEmail, setSearchByEmail] = useState("");
  const navigate = useNavigate();

  const onNewSearch = (newSearch) => {
    setSearchByEmail(newSearch);
  };

  useEffect(() => {
    getBooksCheckouts().then((resp) => {
      setcheckOuts(resp);
    });
  }, []);

  return (
    <div className="container-fluid main-inventory">
      <Navbar />

      <div className="input-box w-50 m-auto mt-5">
        <SearchForm onNewSearch={(event) => onNewSearch(event)} />
        <div className="w-100 mt-3 d-flex justify-content-between gap-2 mb-3 m-auto px-3  space-between">
          <button
            onClick={() => navigate("/users")}
            className="btn btn-primary"
          >
            New user
          </button>
          <button
            onClick={() => navigate("/checkouts")}
            className="btn btn-primary"
          >
            New book checkout
          </button>
          <button
            onClick={() => navigate("/books")}
            className="btn btn-primary"
          >
            New book
          </button>
        </div>
      </div>
      <table className="table table-hover bg-primary w-75 m-auto mt-3">
        <Thead />
        {checkOuts
          .filter((data) => {
            const searchValue = searchByEmail["email"] || "";
            return searchValue.toLowerCase() === ""
              ? data
              : data.user.email.toLowerCase().includes(searchValue);
          })
          .map((payload) => (
            <Tbody key={payload.id} items={payload} />
          ))}
      </table>
    </div>
  );
};
