import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = "primary",
  className = "",
}) => {
  const handleClick = () => {
    if (!href) {
      alert("Button Clicked! (React Logic)");
    }
  };

  if (href) {
    return (
      <a href={href} className={`btn btn-${variant} ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button className={`btn btn-${variant} ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
