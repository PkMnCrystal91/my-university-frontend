import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getBooksCheckoutByUser } from "../../api/api";
import { BooksCheckout } from "../../interfaces/bookscheckout";

import "./StudentPage.css";

export const StudentPage = () => {
  const [books, setBooks] = useState<BooksCheckout[]>([]);

  useEffect(() => {
    getBooksCheckoutByUser(11).then((resp) => {
      setBooks(resp);
    });
  }, []);

  console.log(books);

  return (
    <div className="container-fluid  main-app">
      <Navbar />
      <div className="cards-box  m-auto d-flex flex-wrap gap-3 mt-4">
        {books.map((payload) => (
          <Card key={payload.id} items={payload} />
        ))}
      </div>
    </div>
  );
};
