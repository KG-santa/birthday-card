import React, { useEffect } from "react";
import "../styles/Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on component unmount or when modal closes
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src="/assets/imgs/modal-head.svg"
          alt="modal-head"
          className="modal-head"
        />
        <h1>
          То что ты увидишь дальше, оно ИНТЕРАКТИВНОВОЕ! И много чего клацаеца!
        </h1>
        <p> Что-то даже по несколько раз 👀</p>

        <button onClick={onClose} className="modal-btn">
          <p>💅🏻 ПОНЯВ 💅🏻</p>
        </button>
        <img
          src="/assets/imgs/modal-kitty.png"
          alt="modal-kitty"
          className="modal-kitty"
        />
      </div>
    </div>
  );
};

export default Modal;
