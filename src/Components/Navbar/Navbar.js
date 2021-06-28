import React, { useState, useContext } from "react";
import logo from "../../Images/logo2.png";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const history = useHistory();
  const handleLogIn = () => {
    history.push("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__text">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <Link className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </Link>

          <ul className={click ? "nav-menu  active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/destination"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Destination
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              {loggedInUser.displayName || loggedInUser.name ? (
                <Link to="/profile">
                  <p className="user-name-nav ">{loggedInUser.name}</p>
                  <p className="user-name-nav ">{loggedInUser.displayName}</p>
                </Link>
              ) : (
                <>
                  <button
                    to="/login"
                    className="btn-login"
                    onClick={handleLogIn}
                  >
                    Login
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
