import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../redux/Loginreducer/logintype";
import Asidepanel from "./Asidepanel";

function Header() {
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state) => (state.login.isLogging = localStorage.getItem("login"))
  );

  console.log(isLogin);

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i className="fas fa-bars"></i>
                </a>
              </li>
              <li className="nav-item">
                <Link classNameName="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {isLogin == "true" ? (
                  <span
                    classNameName="nav-link"
                    onClick={() => dispatch({ type: LOGOUT })}
                  >
                    Logout
                  </span>
                ) : (
                  <Link
                    classNameName="nav-link"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </li>
              {/* <li className="nav-item">
                <Link classNameName="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Asidepanel />

      {/* <Link classNameName="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                    <Link classNameName="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                    <Link classNameName="nav-link" aria-current="page" to="/signup">
                      Signup
                    </Link> */}
    </>
  );
}

export default Header;
