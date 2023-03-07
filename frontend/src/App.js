import React from "react";
import { useState } from "react";
import "./App.css";
import RandomNumbers from "./components/RandomNumbers";
import Modal from "./components/Modal";

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <div className="container">
        <h1>
          Let's have some fun!
        </h1>
        <h3>Click the button to generate 2 random numbers.</h3>
        <RandomNumbers />
        <button className="btn" onClick={() => setModalActive(true)}>
          Numbers List
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
