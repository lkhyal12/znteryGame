import React from "react";

const Button = ({ title, classes, icon }) => {
  return (
    <button
      className={`gaming-retro py-2 rounded-full cursor-pointer flex items-center gap-2  ${classes}`}
    >
      {title} {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
