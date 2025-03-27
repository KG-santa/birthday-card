import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import BoxBanner from "./components/BoxBanner";
import WishBlock from "./components/WishBlock";
import Toilet from "./components/Toilet";
import AddWishBlock from "./components/AddWishBlock";
import Schizo from "./components/Schizo";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open the modal

  useEffect(() => {
    const container = document.querySelector(".container");
    if (isModalOpen) {
      container?.classList.add("blur");
    } else {
      container?.classList.remove("blur");
    }
    return () => {
      container?.classList.remove("blur");
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="container">
        <Header title="Дорогая Даша!" imageUrl="./assets/imgs/bee.svg" />
        <BoxBanner />
        <WishBlock />
        <Toilet />
        <AddWishBlock />
        <Schizo />
        <Header
          title="Конец Поздравления"
          imageUrl="./assets/imgs/bee.svg"
          isTextFirst
          className="header-footer"
        />
      </div>
    </>
  );
};

export default App;
