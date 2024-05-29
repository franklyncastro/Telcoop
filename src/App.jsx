// import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navegacion from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="containerApp">
        <Routes>
          <Route path="/" element={<Navegacion />} />
        </Routes>

        {location.pathname === "/" ? <Home /> : <Navegacion />}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
