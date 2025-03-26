import React, { useState } from "react";
import "../styles/BoxBanner.scss";

const BoxBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-banner">
      <div className="bf-xl-wrapper">
        <img src="./assets/imgs/bf-xl.svg" alt="bf-xl" className="bf-xl " />
      </div>
      <div className="bf-sm-wrapper">
        <img src="./assets/imgs/bf-sm.svg" alt="bf-sm" className="bf-sm " />
      </div>
      <div className="gradient-box"></div>
      <div className="box-wrapper">
        <img
          src="./assets/imgs/box-top.svg"
          alt="Box Top"
          className={`box-top ${isOpen ? "open" : ""}`}
        />
        <img
          src="./assets/imgs/fu.svg"
          alt="Fu"
          className={`fu ${isOpen ? "slide-up" : ""}`} // Apply slide-up on button press
        />
        <button onClick={() => setIsOpen(!isOpen)} className="box-btn"></button>
        <img
          src="./assets/imgs/box-front.svg"
          alt="Box front"
          className="box-front"
        />
        <img
          src="./assets/imgs/box-bot.svg"
          alt="Box Bot"
          className="box-bot"
        />
        <img
          src="./assets/imgs/box-shadow.png"
          alt="Box shadow"
          className="box-shadow"
        />
      </div>
    </div>
  );
};

export default BoxBanner;
