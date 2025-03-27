import React from "react";
import "../styles/Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>General Information</h2>
        <p>
          То что ты увидишь дальше, оно ИНТЕРАКТИВНОВОЕ! И много чего клацаеца!
          Что-то даже по несколько раз 👀
        </p>
        <button onClick={onClose}>Поняв!</button>
      </div>
    </div>
  );
};

export default Modal;
