import React from "react";

const Reset = ({ counter, setCounter }) => {
  return (
    <button
      className="reset-button"
      onClick={() => {
        setCounter((counter = 0));
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
