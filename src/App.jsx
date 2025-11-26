import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
// import { Features } from "tailwindcss";
import Features from "./sections/Features";
import Test from "./sections/Test";
import Story from "./sections/Story";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      {/* <Test /> */}
      {/* <section className="h-dvh w-screen bg-amber-700 mt-65 md:mt-75 pt-60"></section> */}
    </div>
  );
};

export default App;
