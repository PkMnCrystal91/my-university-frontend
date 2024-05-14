import axios from "axios";

/* USERS ENDPOINTS */
export const postUsers = (data) => {
  const url = "http://localhost:8000/api/users";
  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getUsers = () => {
  const url = "http://localhost:8000/api/users";
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

/* BOOKS ENDPOINTS */
export const postBooks = (data) => {
  const url = "http://localhost:8000/api/books";
  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getBooks = () => {
  const url = "http://localhost:8000/api/books";
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

/* BOOKS CHECKOUT  */

export const getBooksCheckouts = () => {
  const url = "http://localhost:8000/api/reservations";
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getBooksCheckoutByUser = (id) => {
  const url = `http://localhost:8000/api/reservations/${id}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const postBooksCheckouts = (data) => {
  const url = "http://localhost:8000/api/reservations";
  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteBooksCheckout = (id) => {
  const url = `http://localhost:8000/api/reservations/${id}`;
  return axios
    .delete(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
