import React, { useRef, useEffect } from "react";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();
  const inputRef = useRef(null);

  const handleClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      closeModal();
    }
    document.addEventListener("click", handleClick);
  };

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-box">
        <h3>Enter your details here</h3>
        <input type="email" placeholder="Enter your email..." />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
