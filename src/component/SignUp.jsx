import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handlingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handlingSubmit(e) {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC622_B0MSnglI7uGeE5ZIxDTIU83_vQyk",
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
          navigate("/login");
        } else if (json.error.message == "EMAIL_EXISTS") {
          alert("Email already exists");
        } else {
          alert("please try again");
        }
      });
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-primary">Sign Up</h2>
            <form className="py-4">
              <div className="mb-2">
                <label htmlFor="uname">UserName</label>
                <input
                  type="text"
                  value={formValue.email}
                  className="form-control"
                  name="email"
                  onChange={handlingChange}
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </div>
              <input
                type="submit"
                onClick={handlingSubmit}
                className="btn btn-warning w-100"
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
