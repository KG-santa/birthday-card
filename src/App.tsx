import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import BoxBanner from "./components/BoxBanner";
import WishBlock from "./components/WishBlock";
import Toilet from "./components/Toilet";
import AddWishBlock from "./components/AddWishBlock";
import Schizo from "./components/Schizo";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header title="Дорогая Даша!" imageUrl="../assets/imgs/bee.svg" />
      <BoxBanner />
      <WishBlock />
      <Toilet />
      <AddWishBlock />
      <Schizo />
      <Header
        title="Конец Поздравления"
        imageUrl="../assets/imgs/bee.svg"
        isTextFirst
        className="header-footer"
      />
    </div>
  );
};

export default App;
