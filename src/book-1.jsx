const author = "Rohinton Mistry";
const Book = () => {
  const title = "A Fine Balance";
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="A Fine Balance" />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};

export default Book;
