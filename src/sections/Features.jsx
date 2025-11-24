import React from "react";
import BentoCard from "../components/BentoCard";
import { Send } from "lucide-react";

const Features = () => {
  return (
    <section
      id="features"
      className="text-white bg-black min-h-screen  py-25 px-[5%] gaming-retro"
    >
      <div>
        <h1 className="text-2xl">Into the Metagame layer</h1>
        <p className="text-gray-400 my-5 md:max-w-100 ">
          Immerse yourself i a rich and ever-expanding universe when a vibrant
          array of products converge into an interconnected overlay experience
          on your world
        </p>
      </div>

      <div className="cardsContainer grid grid-cols-2 auto-rows-[minmax(60vh,_1fr)] gap-5">
        {/* <div className="r"></div> */}
        <BentoCard
          src="/videos/feature-1.mp4"
          title="Radint"
          subTitle="A cross-platform metagame app, Turning your activities across Web2 and Web3 Games into a rewarding adventure."
          classes="col-span-2"
        />
        <BentoCard
          src="/videos/feature-2.mp4"
          title="Zegma"
          subTitle="An anime and gaming-inspierd NFT collection - the IP primed for expansion"
          classes="row-span-2"
        />
        <BentoCard src="/videos/feature-3.mp4" title="nexus" classes="" />
        <BentoCard
          src="/videos/feature-4.mp4"
          title="Azul"
          subTitle="A cross-world AI agent - elevating your gameplay to be more fun and productive"
          classes=""
        />

        <div className="bg-violet-800 rounded-[15px] relative p-5">
          <h1 className="text-4xl md:text-6xl uppercase font-bold w-full md:w-1/2 text-black">
            More coming soon!
          </h1>

          <div className="absolute bottom-5 right-5">
            <Send size={40} color="black" />
          </div>
        </div>

        <BentoCard src="/videos/feature-5.mp4" />
      </div>
    </section>
  );
};

export default Features;
