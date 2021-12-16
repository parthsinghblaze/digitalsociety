import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../redux/Loginreducer/logintype";

function Home() {
  const all = useSelector((state) => console.log(state));
  console.log(all);
  let dispatch = useDispatch();
  const loginDetails = useSelector(
    (state) =>
      (state.login.loginDetails = localStorage.getItem("userLoginDetails"))
  );

  const isLogin = useSelector(
    (state) => (state.login.isLogging = localStorage.getItem("login"))
  );

  console.log(loginDetails);
  return (
    <>
      <div class="content-wrapper p-3">
        <h1>Home Page</h1>
        <h3> isLogin {loginDetails ? "Yes" : "No"} </h3>
        {loginDetails && <h1>Welcome : {loginDetails}</h1>}
        <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
      </div>
    </>
  );
}

export default Home;
