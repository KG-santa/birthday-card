import React, { useEffect, useState } from "react";
import "../styles/SoundButton.scss";

const SoundButton: React.FC<{
  onButtonClick: () => void;
  disabled: boolean;
}> = ({ onButtonClick, disabled }) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    if (audioElement) {
      audioElement.addEventListener("ended", () => {
        // TO=DO: Reset the sound to play it again
        audioElement.currentTime = 0;
      });
    }
  }, [audioElement]);

  const handleClick = () => {
    if (!disabled) {
      onButtonClick();
      audioElement?.play();
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={disabled} className="flush-btn">
        <img src="../assets/imgs/flush-btn.png" alt="flush" />
      </button>
      <audio
        ref={setAudioElement}
        src="../assets/audio/flush.mp3"
        preload="auto"
      ></audio>
    </>
  );
};

export default SoundButton;
