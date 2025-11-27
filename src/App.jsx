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
import Loader from "./components/Loader";

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
    </div>
  );
};

export default App;
