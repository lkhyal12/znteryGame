import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Send } from "lucide-react";
import { useScroll, useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
// import { useRaf } from "react-use";

const navLinks = [
  { href: "#home", name: "Home", id: 0 },
  { href: "#about", name: "About", id: 1 },
  { href: "#features", name: "Features", id: 2 },
  { href: "#story", name: "Story", id: 3 },
  { href: "#layer", name: "Layer", id: 4 },
];

const Navbar = () => {
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const audioRef = useRef();
  const navRef = useRef();
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      navRef.current.classList.remove("floating-bar");
    } else if (currentScrollY > lastScrollY) {
      navRef.current.classList.add("floating-bar");
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      navRef.current.classList.add("floating-bar");
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, currentScrollY]);
  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : "-100%",
      opacity: isNavVisible ? 1 : 0,
      duration: 0.5,
    });
  }, [isNavVisible]);
  useEffect(() => {
    if (canPlayAudio) audioRef.current.play();
    else audioRef.current.pause();
  }, [canPlayAudio]);
  return (
    <div ref={navRef} className="fixed top-5 left-0 w-screen h-[9vh] z-100 ">
      <nav className=" w-[95%] mx-auto h-full rounded-lg flex items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <img src="img/logo.png" alt="" />

          <Button
            title="Products"
            classes="bg-white px-6 py-1 text-sm hidden md:flex"
            icon={<Send size={12} color="black" />}
          />
        </div>

        <div className="flex items-center gap-5">
          <div className="navLinks hidden  md:flex flex-center gap-5 font-wetpaint text-sm mr-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-blue-50 relative text-sm cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className="barsContainer cursor-pointer mr-5 flex items-end gap-0.5"
            onClick={() => setCanPlayAudio((p) => !p)}
          >
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${canPlayAudio ? "active" : ""}`}
                style={{ animationDelay: `${bar * 0.15}s` }}
              />
            ))}
          </div>

          <audio
            ref={audioRef}
            className="hidden"
            src="/audio/loop.mp3"
            loop
          ></audio>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
