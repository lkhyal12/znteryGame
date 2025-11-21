import React from "react";

const Button = ({ title, classes, icon }) => {
  return (
    <button
      className={`gaming-retro py-2 rounded-full cursor-pointer ${classes}`}
    >
      {title} {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
