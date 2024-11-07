import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Book1 from "./book-1.jsx"; // for 1
import Book2 from "./book-2.jsx"; // for 2
import Book3 from "./book-3.jsx"; // for 3
import Book4 from "./book-4.jsx"; // for 3
const Greetings1 = () => {
  return (
    <>
      <h1>Hello from 1st component</h1>;
      <Person />
      <Message />
    </>
  );
};

const Person = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Hiren Shahoo
  </h4>
);
const Message = () => {
  return <p>this is my message</p>;
};

// createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(<Book4 />);
// createRoot(document.getElementById("root")).render(<Greetings1 />);
