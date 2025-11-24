import React, { useRef, useState } from "react";

const BentoCard = ({ title, subTitle, src, classes }) => {
  const [newTransform, setNewTransform] = useState("");

  const cardRef = useRef();
  function handleMouseEnter() {
    setNewTransform("");
  }
  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rectCords = cardRef.current.getBoundingClientRect();
    const { left, top, width, height } = rectCords;

    const cardX = e.clientX - left;
    const cardY = e.clientY - top;

    const cardWidthRatio = cardX / width;
    const cardHeightRatio = cardY / height;

    const tiltY = (cardWidthRatio - 0.5) * 10;
    const tiltX = (cardHeightRatio - 0.5) * 10;

    setNewTransform(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`
    );
  }

  function handleMouseLeave() {
    setNewTransform("");
  }
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`relative  border border-gray-400 p-5 rounded-[10px]  overflow-hidden  ${classes}`}
      style={{ transform: newTransform }}
    >
      <div className="relative z-50">
        {title && (
          <h1 className="text-5xl uppercase mb-5 font-bold">{title}</h1>
        )}
        {subTitle && <p className="text-gray-300">{subTitle}</p>}
      </div>

      <video
        src={src}
        className="absolute
         left-0 top-0 size-full object-center object-cover"
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
};

export default BentoCard;
