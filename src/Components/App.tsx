import React from "react";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import LayoutAnimation from "./Layout/LayoutAnimation";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<LayoutAnimation />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
