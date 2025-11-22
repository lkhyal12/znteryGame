import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const AnimatedTitle = ({ title }) => {
  const textContainerRef = useRef();
  useGSAP(
    () => {
      gsap.from(".animated-word", {
        stagger: 0.3,
        x: "100px",
        y: "100px",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
          end: "end bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        }, // <-- THIS MAKES IT RE
      });
    },
    { scope: textContainerRef.current }
  );
  return (
    <div ref={textContainerRef} className="text-center">
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-center justify-center mb-5 flex-wrap"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word text-4xl sm:text-5xl md:text-7xl uppercase gaming-retro font-bold"
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
