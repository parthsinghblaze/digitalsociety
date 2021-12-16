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
      <nav class="main-header navbar navbar-expand navbar-white navbar-light navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                <i class="fas fa-bars"></i>
              </a>
            </li>
          </ul>
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i class="fas fa-bars"></i>
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                {isLogin == "true" ? (
                  <span
                    className="nav-link"
                    onClick={() => dispatch({ type: LOGOUT })}
                  >
                    Logout
                  </span>
                ) : (
                  <Link className="nav-link" aria-current="page" to="/login">
                    Login
                  </Link>
                )}
              </li>
              {/* <li class="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Asidepanel />

      {/* <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                    <Link className="nav-link" aria-current="page" to="/login">
                      Login
                    </Link>
                    <Link className="nav-link" aria-current="page" to="/signup">
                      Signup
                    </Link> */}
    </>
  );
}

export default Header;
