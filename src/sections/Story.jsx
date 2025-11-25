import React, { useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap/all";
import Button from "../components/Button";

const Story = () => {
  const imgRef = useRef();

  function handleMouseLeave() {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
    });
  }

  function handleMouseMove(e) {
    if (!imgRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    const rotateY = ((clientX - left) / width - 0.5) * -10;
    const rotateX = ((clientY - top) / height - 0.5) * -10;

    gsap.to(imgRef.current, {
      duration: 0.3,
      transformPerspective: 500,
      rotateX,
      rotateY,
      ease: "power1.inOut",
    });
  }
  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-black text-blue-50 py-20"
    >
      <p className="gaming-retro text-[10px]  uppercase text-center mb-10">
        the multiversal ip world
      </p>
      <div className="relative z-50 w-2/3 md:w-1/2 mx-auto">
        <AnimatedTitle title="The story of a hidden realm" classes="text-xl" />
      </div>
      <div className="storyImgContainer mt-30 relative h-[90vh] md:h-dvh w-full">
        <div
          className="absolute  left-0 top-[-30%] md:left-[20%] size-full md:size-4/5 overflow-hidden "
          style={{ clipPath: "polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)" }}
        >
          <div className="story-img-content">
            <img
              onMouseEnter={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseLeave}
              src="/img/entrance.webp"
              ref={imgRef}
              className="opacity-90 object-center object-cover"
              alt="entrance img"
            />
          </div>
        </div>

        <svg
          className="invisible absolute size-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="w-2/3 mx-auto px-4 md:px-0 md:w-1/2 lg:w-1/3 md:ml-auto md:mr-15">
        <p className="text-sm text-center md:text-[16px] gaming-retro">
          When realms converge, lies Zentry and the boundless pillar. Discover
          its secrets and shape your fate amidst infinite opportunities.
        </p>
        <div className="w-full mx-auto">
          <Button
            title="Discover Prologue"
            classes="bg-white text-black text-sm mt-5 px-5 uppercase py-3 block mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
