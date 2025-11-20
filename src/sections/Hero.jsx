import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef();
  const totalVideos = 4;
  const nextVideoIndex = (currentIndex % totalVideos) + 1;
  console.log({ currentIndex });

  function handleClick() {
    setCurrentIndex(nextVideoIndex);
  }

  useGSAP(
    () => {
      if (isLoading) return;
      gsap.to("#next-video", {
        width: "100dvw",
        height: "100dvh",
        opacity: 1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power1.inOut",
        onComplete: () =>
          gsap.set("#next-video", {
            clearProps: "all",
          }),
      });

      gsap.from("#current-video video", {
        scale: 0,
        transformOrigin: "center center",
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef, dependencies: [currentIndex] }
  );

  useEffect(() => {
    setIsLoading(false);
  }, [currentIndex]);
  return (
    <section ref={containerRef} className="relative w-screen h-dvh bg-blue-50">
      <div id="video-container" className="relative w-full h-full ">
        <div
          id="current-video"
          className="absolute z-20 top-1/2 left-[50%] -translate-x-1/2  -translate-y-1/2 scale-50 size-60 opacity-0 transition-all duration-700 hover:opacity-100 hover:scale-100 cursor-pointer origin-center overflow-hidden"
        >
          <video
            className=" size-full object-center object-cover rounded-lg scale-150 "
            src={`videos/hero-${nextVideoIndex}.mp4`}
            autoPlay
            loop
            muted
            onClick={handleClick}
          ></video>
        </div>

        <div
          id="next-video"
          className="size-100  absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        >
          <video
            className="size-full object-center object-cover rounded-lg"
            src={`videos/hero-${currentIndex}.mp4`}
            autoPlay
            loop
            muted
          ></video>
        </div>

        <video
          src={`videos/hero-${currentIndex}.mp4`}
          className="absolute inset-0 h-dvh w-dvw object-center object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
};

export default Hero;
