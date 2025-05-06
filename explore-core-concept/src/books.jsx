import Book from "./book";
export default function Books({ books }) {
  return (
    <>
      <h2>All Books: {books.length}</h2>
      {books.map((book, i) => (
        <Book key={i} book={book}></Book>
      ))}
    </>
  );
}
