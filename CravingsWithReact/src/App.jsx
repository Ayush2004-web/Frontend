import React from "react";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Registration from "./Pages/Register";
import { AiFillAmazonSquare } from "react-icons/ai";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Header />

        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
