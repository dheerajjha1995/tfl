import React from "react";
import Header from "./Header";

const Navbar = ({ text }) => {
  return (
    <>
      <Header />
      <div className="orders">
        <div className="orders__body">
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
