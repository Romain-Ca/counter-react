import React, { useState } from "react";
import "./App.css";

// Import des components
import Header from "./components/Header";
import Plus from "./components/Plus";
import Minus from "./components/Minus";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <div className="buttons">
        {counter === 0 ? null : (
          <Minus counter={counter} setCounter={setCounter} />
        )}
        <p className="counter">{counter}</p>
        {counter === 10 ? null : (
          <Plus counter={counter} setCounter={setCounter} />
        )}
      </div>
      <div className="reset">
        <Reset counter={counter} setCounter={setCounter} />
      </div>
      <Footer />
    </>
  );
}

export default App;
