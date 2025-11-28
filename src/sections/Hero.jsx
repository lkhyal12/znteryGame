import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { Send } from "lucide-react";
import { ScrollTrigger } from "gsap/all";
import Loader from "../components/Loader";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef();
  const totalVideos = 4;
  const nextVideoIndex = (currentIndex % totalVideos) + 1;

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

  useGSAP(
    () => {
      // if (isLoading) return;

      // ScrollTrigger.refresh();
      gsap.to("#video-container", {
        // clipPath: "polygon(19% 0%, 100% 0%, 73% 100%, 0% 100%)",
        clipPath: "polygon(16% 0, 90% 0, 96% 76%, 77% 94%, 18% 89%, 3% 50%)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-container",
          scrub: true,
          start: "2% top",
          end: "80% 20%",
        },
      });
    },
    { scope: containerRef }
  );
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) setIsLoading(false);
  }, [loadedVideos]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-screen h-dvh bg-blue-50"
    >
      {isLoading && (
        <div className="absolute top-0 left-0 z-50 bg-white w-screen h-dvh">
          <Loader />
        </div>
      )}
      <div id="home" className="relative w-full h-full z-10">
        <div
          id="current-video"
          className="absolute z-40 top-1/2 left-[50%] -translate-x-1/2  -translate-y-1/2 scale-50 size-60 opacity-0 transition-all duration-700 hover:opacity-100 hover:scale-100 cursor-pointer origin-center overflow-hidden rounded-lg"
        >
          <video
            className=" size-full object-center object-cover scale-150 "
            src={`videos/hero-${nextVideoIndex}.mp4`}
            autoPlay
            loop
            muted
            onClick={handleClick}
            onLoadedData={() => setLoadedVideos((p) => p + 1)}
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
            onLoadedData={() => setLoadedVideos((p) => p + 1)}
          ></video>
        </div>

        <video
          src={`videos/hero-${currentIndex}.mp4`}
          className="absolute inset-0 h-dvh w-dvw object-center object-cover"
          autoPlay
          muted
          loop
          onLoadedData={() => setLoadedVideos((p) => p + 1)}
        ></video>

        <div className="relative z-30 py-30 px-10 ">
          <h1 className="text-white  font-audiowide font-extrabold text-6xl md:text-8xl uppercase">
            Redefine
          </h1>

          <p className="md:max-w-50 text-blue-50 my-5 gaming-retro">
            Enter the metagame layer Unleash the play economy
          </p>
          <Button
            title="Watch Trailer"
            classes="text-black  text-sm bg-yellow-200 px-6 flex items-center"
            icon={<Send size={12} color="black" />}
          />
        </div>

        <h1 className="text-white  font-audiowide font-extrabold text-6xl md:text-8xl uppercase absolute bottom-[8%] right-[8%] z-50">
          games
        </h1>
      </div>
      <h1 className="text-black  font-audiowide font-extrabold text-6xl md:text-8xl uppercase absolute bottom-[8%]  right-[8%]">
        games
      </h1>
    </section>
  );
};

export default Hero;
