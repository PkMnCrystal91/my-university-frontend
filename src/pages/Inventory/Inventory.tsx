import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Thead } from "../../components/Thead/Thead";
import { Tbody } from "../../components/Tbody/Tbody";
import { BooksCheckout } from "../../interfaces/bookscheckout";
import { getBooksCheckouts } from "../../api/api";

export const Inventory = () => {
  const [checkOuts, setcheckOuts] = useState<BooksCheckout[]>([]);

  useEffect(() => {
    getBooksCheckouts().then((resp) => {
      setcheckOuts(resp);
    });
  }, []);

  console.log(checkOuts);

  return (
    <div className="container-fluid main-inventory">
      <Navbar />

      <div className="input-box w-50 m-auto mt-5">
        <input
          className="w-100 m-auto px-3"
          type="text"
          placeholder="Search item by name"
          name=""
        />
        <div className="w-100 mt-3 d-flex justify-content-between gap-2 mb-3 m-auto px-3  space-between">
          <button className="btn btn-primary">New user</button>
          <button className="btn btn-primary">New book checkout</button>
          <button className="btn btn-primary">New book</button>
        </div>
      </div>
      <table className="table table-hover bg-primary w-75 m-auto mt-3">
        <Thead />
        {checkOuts.map((payload) => (
          <Tbody key={payload.id} items={payload} />
        ))}
      </table>
    </div>
  );
};
