import React from "react";
import VectorMinus from "../images/vectorMinus.png";

const Minus = ({ counter, setCounter }) => {
  return (
    <button
      className="minus"
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      <img src={VectorMinus} alt="minus" />
    </button>
  );
};

export default Minus;
