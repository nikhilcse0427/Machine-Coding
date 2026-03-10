import "./styles.css";
import Modal from "./components/Modal.jsx";
import { useState, useRef } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>POP-UP Modal</h1>
      <button onClick={openModal}>OPEN MODAL</button>
      <div className="container">
        {isOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}
