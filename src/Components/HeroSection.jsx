import React from "react";
import { LalisaPic, LalisaPic2 } from "../assets/assets";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero"  >
      <div className="w-5xl mx-auto max-h-screen grid grid-cols-1 gap-8 md:grid-cols-2 py-8 px-5 mb-8">
        <div className="grid grid-cols-1 space-y-6 py-4  w-full mx-8 ">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 ">
            <span className="text-blue-950 opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="text-yellow-500 ml-1 opacity-0 animate-fade-in-delay-1">
              Lalisa
            </span>
            <span className="text-blue-950 ml-1 opacity-0 animate-fade-in-delay-2">
              Megersa
            </span>
          </h1>
          <p className=" text-blue-950 mb-10 opacity-0 animate-fade-in-delay-3">
            I simplify complex math concepts with clarity and enthusiasm. With a
            background in electrical engineering, I guide students to understand
            and apply mathematics in real-world contexts, making learning both
            practical and engaging.
          </p>
          <div className="text-center">
            <a
              href="projects"
              className="w-40 py-3 px-4 text-blue-950 text-2xl font-semibold border border-amber-500 bg-yellow-500/80 rounded-2xl"
            >
              View My Works
            </a>
          </div>
        </div>
        <div className="ml-8 py-0 sm:w-auto overflow-hidden">
          <img
            src={LalisaPic2}
            alt=""
            className="h-[400px] w-[300px] opacity-0 animate-fade-in-delay-3"
          />
        </div>
      </div>
      <div className="text-center mb-30 sm:mb-8 flot  animate-fade-in-delay-4">
        <div className="flex flex-col gap-3 items-center">
          <span className="text-2xl text-yellow-500/90 font-bold">Scroll</span>
          <ArrowDown size={30} className="text-blue-950" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
