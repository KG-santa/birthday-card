import React, { useState } from "react";
import "../styles/Toilet.scss";
import SoundButton from "./SoundButton";

const Toilet: React.FC = () => {
  const [pressCount, setPressCount] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (pressCount === 0) {
      // First press: start animation
      setPressCount(1);
      setIsButtonDisabled(true); // Disable button during animation
    } else if (pressCount === 1) {
      // Second press: reverse animation
      setPressCount(2);
      setIsReversing(true);
      setIsButtonDisabled(true); // Disable button during reverse animation
    } else if (pressCount > 1) {
      // After reverse finishes, we want to start animate again
      setPressCount(1);
      setIsReversing(false);
      setIsButtonDisabled(true); // Disable button during animation
    }
  };

  // Handler to reset to "animate" after reverse animation finishes
  const handleAnimationEnd = () => {
    if (isReversing) {
      setPressCount(1); // Start "animate" after reverse finishes
      setIsReversing(false); // Reset reversing state
    }
    setIsButtonDisabled(false); // Re-enable button after animation finishes
  };

  return (
    <div className="toilet-container">
      <div className="toilet">
        <img src="./assets/imgs/toilet.svg" alt="Toilet Image" />

        <img
          src="./assets/imgs/water.svg"
          alt="Water"
          className={`water-animation ${
            pressCount === 0
              ? "hidden"
              : pressCount === 1
              ? "animate"
              : "reverse"
          }`}
          onAnimationEnd={handleAnimationEnd} // Trigger after animation ends
        />

        <img
          src="./assets/imgs/poo.svg"
          alt="Poo"
          className={`poo-animation ${
            pressCount === 0
              ? "hidden"
              : pressCount === 1
              ? "animate"
              : "reverse"
          }`}
          onAnimationEnd={handleAnimationEnd} // Trigger after animation ends
        />

        <SoundButton
          onButtonClick={handleButtonClick}
          disabled={isButtonDisabled} // Pass the state to SoundButton
        />
      </div>
    </div>
  );
};

export default Toilet;
