import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Loginpage } from "./pages";
import { Header } from "./component";
import SignUp from "./component/SignUp";
import PrivatePage from "./pages/PrivatePage";
import Privateroute from "./component/Privateroute";
import PreLoader from "./component/PreLoader";
import Member from "./pages/Member";
import AllMember from "./pages/AllMember";
import EditMember from "./pages/EditMember";

function App() {
  return (
    <>
      <Header />
      <PreLoader />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Privateroute>
              <Home />
            </Privateroute>
          }
        />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="addmember"
          element={
            <Privateroute>
              <Member />
            </Privateroute>
          }
        />
        <Route
          path="allmember"
          element={
            <Privateroute>
              <AllMember />
            </Privateroute>
          }
        />
        <Route path="editmember/:memberId" element={<EditMember />} />
        {/* <Route
          path="private"
          element={
            <Privateroute>
              <PrivatePage />
            </Privateroute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
