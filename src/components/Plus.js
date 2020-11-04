import React from "react";
import VectorPlus from "../images/vectorPlus.png";

const Plus = ({ counter, setCounter }) => {
  return (
    <button
      className="plus"
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <img src={VectorPlus} alt="minus" />
    </button>
  );
};

export default Plus;
