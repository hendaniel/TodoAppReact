import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="nav-item" to="/todo">
              Nuevas
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/doing">
              Realizando
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/done">
              Hechas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
