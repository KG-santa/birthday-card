import React, { useRef, useState } from "react";
import "../styles/Schizo.scss";

const Schizo: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleToggleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && videoRef.current) {
      // If flipping to the video side, start playing the video
      videoRef.current.play();
    } else if (isFlipped && videoRef.current) {
      // If flipping back to the image side, reset the video
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnd = () => {
    setIsFlipped(false); // Reset to the image side when the video ends
  };

  return (
    <div
      className="shizo-wrapper"
      onDoubleClick={handleToggleFlip} // Double-click to reset
    >
      <div className={`schizo-container ${isFlipped ? "flipped" : ""}`}>
        <div className="front" onClick={handleToggleFlip}>
          <img
            src="../assets/imgs/shizo-def.png"
            alt="Default"
            className="shizo-img"
          />
        </div>
        <div className="back">
          <video
            ref={videoRef}
            onClick={handleVideoClick} // Single-click to play/pause
            onEnded={handleVideoEnd} // Reset on video end
            playsInline
            preload="auto"
            src="../assets/video/shizoe.mp4"
            className="shizo-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Schizo;
