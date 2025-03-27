import React, { useEffect, useState } from "react";
import "../styles/Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [animationState, setAnimationState] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setAnimationState(true); // Trigger opening animation
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on component unmount
    };
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setAnimationState(false); // Remove from DOM after closing animation
    }
  };

  if (!animationState) return null;

  return (
    <div className="modal-overlay">
      <div
        className={`modal-content ${isOpen ? "fade-in" : "fade-out"}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <div
          className={`modal-text ${isOpen ? "slide-in-top" : "slide-out-top"}`}
        >
          <img
            src="./assets/imgs/modal-head.svg"
            alt="modal-head"
            className="modal-head"
          />
          <h1>
            То что ты увидишь дальше, оно ИНТЕРАКТИВНОВОЕ! И много чего
            клацаеца!
          </h1>
          <p> Что-то даже по несколько раз 👀</p>

          <button onClick={onClose} className="modal-btn">
            <p>💅🏻 ПОНЯВ 💅🏻</p>
          </button>
        </div>
        <img
          src="./assets/imgs/modal-kitty.png"
          alt="modal-kitty"
          className={`modal-kitty ${
            isOpen ? "slide-in-bottom" : "slide-out-bottom"
          }`}
        />
      </div>
    </div>
  );
};

export default Modal;
