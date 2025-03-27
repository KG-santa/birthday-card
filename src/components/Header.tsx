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
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is active
  const [lastAnimation, setLastAnimation] = useState(""); // Track the last animation

  const handleImageClick = () => {
    if (isAnimating) return; // Ignore click if animation is active

    const animations = ["zooming", "spinX", "rotateHalfBack"]; // Animation classes
    let randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];

    // Ensure the new animation is different from the last one
    while (randomAnimation === lastAnimation) {
      randomAnimation =
        animations[Math.floor(Math.random() * animations.length)];
    }

    setLastAnimation(randomAnimation); // Update the last animation
    setCurrentAnimation(randomAnimation); // Set the current animation
    setIsAnimating(true); // Mark animation as active

    setTimeout(() => {
      setCurrentAnimation(""); // Remove animation class after animation ends
      setIsAnimating(false); // Mark animation as inactive
    }, 1000); // Match the animation duration
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
        className={`header-image ${currentAnimation}`}
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
