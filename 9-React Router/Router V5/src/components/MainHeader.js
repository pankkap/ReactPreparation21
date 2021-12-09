import { NavLink } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink active ClassName="active" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink active ClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
