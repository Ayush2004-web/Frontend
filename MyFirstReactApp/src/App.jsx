import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Product from "./Pages/Product";
import Login from "./Pages/LogIn";
import Registration from "./Pages/Registeration";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
