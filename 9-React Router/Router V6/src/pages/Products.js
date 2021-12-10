import { Link } from "react-router-dom";

// Please note:
// <Link to="/products/p1" ... could also be written as
// <Link to="p1" ... with React Router v6

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;





