import React from "react";
import Vector from "../images/vector.png";

const Header = () => {
  return (
    <div className="header">
      <img className="vector" src={Vector} alt="vector-counter" />
      <span className="title">React counter</span>
    </div>
  );
};

export default Header;
