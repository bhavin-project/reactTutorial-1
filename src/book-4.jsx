import React from "react"; // Make sure to import React
import img1 from "./images/book1.jpg";

const firstBook = {
  author: "Chetan Bhagat",
  title: "Interesting Facts For Curious Minds",
  img: img1,
};

const secondBook = {
  author: "Arundhati Roy",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  console.log({ img, title, author }); // Log props for debugging
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children} {/* Render any children passed to the Book component */}
    </article>
  );
};

export default BookList; // Export the BookList component for use in other files
