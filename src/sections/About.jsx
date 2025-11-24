import React, { useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
const About = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        "#imgContainer",
        { width: 400, height: 300 }, // initial size
        {
          width: "100vw",
          height: "100vh",
          ease: "none",
          scrollTrigger: {
            trigger: "#clip",
            scrub: 0.8, // smoother and slower
            start: "top top",
            end: "+=1200", // long animation distance
            pin: true,
            pinSpacer: true,
            pinSpacing: true,
            anticipatePin: true,
            // pin wrapper only
          },
        }
      );
    },
    { scope: aboutRef }
  );
  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-dvh pb-[62vh] md:pb-[40vh]  relative"
    >
      <div className="flex flex-col items-center gap-10 pb-10">
        <p className="text-sm gaming-retro mt-20">Welcome To Zentry</p>

        <AnimatedTitle
          title="Discover the world's <br />largest shared adventure"
          containerClass={"!text-black text-center mt-5 mb-30"}
        />
        <div id="clip" className="w-screen">
          <div id="imgContainer" className=" sm:size-100 mx-auto">
            <img
              src="img/about.webp"
              alt="aboutImg"
              className="size-full rounded-3xl object-center object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[50%] text-center gaming-retro text-lg max-w-96 md:max-w-116 z-[-1] ">
          <p className="mb-4">
            The Game of Games begins-your life now an epic MMORPG
          </p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
    </section>
  );
};

export default About;
