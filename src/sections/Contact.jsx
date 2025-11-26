import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="my-10 w-19/20 mx-auto md:min-h-dvh bg-black rounded-lg text-white"
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="relative z-50 w-2/3 md:1/2 mx-auto py-20 text-center">
          <p className="text-[10px] uppercase gaming-retro">Join Zentry</p>
          <p className="gaming-retro text-4xl sm:text-5xl md:text-8xl uppercase mt-5 font-semibold md:font-bold leading-25">
            let's build a new era of gaming together
          </p>
          <div className="flex items-center justify-center">
            <Button
              title="Contact Us"
              classes="bg-white text-black px-5 md:mt-5"
            />
          </div>
        </div>

        <div
          className="absolute top-[-0.5%] left-[-2%] w-50 "
          style={{
            clipPath: "polygon(10% 0, 90% 0, 79% 100%, 21% 100%)",
          }}
        >
          <img
            src="img/contact-1.webp"
            className="object-cover object-center"
            alt=""
          />
        </div>

        <div
          className="absolute top-1/2 left-[-2%] w-50 "
          style={{
            clipPath: "polygon(17% 0, 100% 0, 78% 100%, 0 59%)",
          }}
        >
          <img
            src="img/contact-2.webp"
            className="object-cover object-center"
            alt=""
          />
        </div>

        <div
          className="absolute top-1/2 right-[-2%] w-50 "
          style={{
            clipPath: "polygon(17% 0, 100% 0, 78% 100%, 0 59%)",
          }}
        >
          <img
            src="img/swordman.webp"
            className="object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
