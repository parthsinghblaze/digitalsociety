import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { USERLOGIN } from "../redux/Loginreducer/logintype";

function Login() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handlingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handlingSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC622_B0MSnglI7uGeE5ZIxDTIU83_vQyk",
      {
        method: "POST",
        body: JSON.stringify({
          ...formValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.idToken) {
          dispatch({ type: USERLOGIN, payload: json.email });
          navigate("/admin");
        } else {
          alert("Email and password are invalid");
        }
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      {/* <div className="container-fluid">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-primary">Login</h2>
              <form className="py-4">
                <div className="mb-2">
                  <label htmlFor="uname">UserName</label>
                  <input
                    type="text"
                    value={formValue.email}
                    className="form-control"
                    name="email"
                    onChange={handlingChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formValue.password}
                    onChange={handlingChange}
                  />
                </div>
                <input
                  type="submit"
                  onClick={handlingSubmit}
                  className="btn btn-primary w-100"
                  value={`${isLoading ? "Loading..." : "Send"}`}
                />
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="hold-transition login-page">
        <div class="login-logo">
          <b>Login</b>LTE
        </div>
        <div className="card w-25">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={formValue.email}
                  className="form-control"
                  name="email"
                  onChange={handlingChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formValue.password}
                  onChange={handlingChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input
                    type="submit"
                    onClick={handlingSubmit}
                    className="btn btn-primary w-100"
                    value="Send"
                  />
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              {/* <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a> */}
            </div>
            <p className="mb-0">
              <Link to="/signup" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </>
  );
}

export default Login;
