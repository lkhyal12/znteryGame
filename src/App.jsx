import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />

      <section className="h-dvh w-screen bg-amber-700 mt-65 md:mt-75 pt-60"></section>
    </div>
  );
};

export default App;
