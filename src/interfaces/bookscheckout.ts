export interface Book {
  id: number;
  title: string;
  author: string;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export interface BooksCheckout {
  id: number;
  user_id: number;
  book_id: number;
  quantity: number;
  user: User;
  book: Book;
}

export interface IBookList {
  id: number;
  title: string;
  author: string;
  publishedYear: string;
  genre: string;
  stock: number;
}
