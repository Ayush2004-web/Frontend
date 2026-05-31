import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <div id="AB">My First React App </div>
      <br />
     <p className="bg-primary">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, est!
     </p>
      <br />
      <hr />
      <button type="submit" id="A" className="d-flex justify-content-center align-middle">Submit</button>
      <Footer/>
    </>
  );
}

export default App;
