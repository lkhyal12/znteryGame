import React, { useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.to("#imgWrapper img", {
        width: "100vw",
        height: "100vh",
        borderRadius: "16px",
        ease: "none",
        scrollTrigger: {
          trigger: "#imgWrapper",
          start: "top top",
          end: "+=" + window.innerWidth,
          scrub: 0.5,
          pin: true,
          pinSpacer: true,
          pinSpacing: true,
        },
      });
    },
    { scope: sectionRef }
  );
  return (
    <section ref={sectionRef} id="about" className="min-h-dvh  w-screen">
      <p className="uppercase text-[10px] gaming-retro py-10 text-center">
        join zentry
      </p>
      <div className="min-h-dvh w-full flex flex-col items-center gap-5 mb-10">
        <AnimatedTitle
          title="Discover the world's <br />largest shared adventure"
          containerClass={"!text-black text-center mt-5 mb-30"}
        />

        <div
          id="imgWrapper"
          className="rounded-lg overflow-hidden w-screen h-dvh mx-auto flex items-center justify-center"
        >
          <img
            src="img/about.webp"
            alt=""
            className="size-100 object-center object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-116 text-center gaming-retro text-base md:text-lg pb-10">
          <p>The Game of Games begins-your life now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
    </section>
  );
};

export default About;
