import React, { useEffect } from "react";
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
  return (
    <header className={`header ${className}`}>
      {isTextFirst && title && (
        <h1 className="header-title" data-text={title}>
          {title}
        </h1>
      )}
      <img src={imageUrl} alt="Header Image" className="header-image" />
      {!isTextFirst && title && (
        <h1 className="header-title" data-text={title}>
          {title}
        </h1>
      )}
    </header>
  );
};

export default Header;
