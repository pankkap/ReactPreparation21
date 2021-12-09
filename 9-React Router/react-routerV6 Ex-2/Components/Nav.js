import { Link } from "react-router-dom";
const Nav = () => {
    const mystyles = {
        textDecoration:'none',
        color:'white'
    }
  return (
    <div>
      <nav>
        <h2>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            LOGO
          </Link>
        </h2>
        <ul className="nav-items">
          <li>
            <Link style={mystyles} to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link style={mystyles} to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
