import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function Privateroute({ children }) {
  const isLogin = useSelector(
    (state) => (state.login.isLogging = localStorage.getItem("login"))
  );

  return isLogin == "true" ? children : <Navigate to="/login" />;
}

export default Privateroute;
