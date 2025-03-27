import React, { useState } from "react";
import "../styles/Header.scss";

interface HeaderProps {
  title: string;
  imageUrl: string;
  isTextFirst?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  imageUrl,
  isTextFirst = false,
  className,
}) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is active

  const handleImageClick = () => {
    if (isAnimating) return; // Ignore click if animation is active

    const repeatCount = 3; // Number of times the animation should repeat
    let count = 0;

    setIsAnimating(true); // Mark animation as active

    const intervalId = setInterval(() => {
      setIsZooming(true);

      setTimeout(() => {
        setIsZooming(false);
      }, 900); // Slightly less than the animation duration (1s)

      count++;
      if (count >= repeatCount) {
        clearInterval(intervalId); // Stop the interval after the desired count
        setIsAnimating(false); // Mark animation as inactive
      }
    }, 1000); // Matches the animation duration
  };

  return (
    <header className={`header ${className}`}>
      {isTextFirst && title && (
        <h1 className="header-title" data-text={title}>
          {title}
        </h1>
      )}
      <img
        src={imageUrl}
        alt="Header Image"
        className={`header-image ${isZooming ? "zooming" : ""}`}
        onClick={handleImageClick}
      />
      {!isTextFirst && title && (
        <h1 className="header-title" data-text={title}>
          {title}
        </h1>
      )}
    </header>
  );
};

export default Header;
