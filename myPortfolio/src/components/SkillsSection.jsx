"use client";

// import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMysql,
  SiSvelte,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiSpacy,
  SiFigma,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

// Custom HuggingFace icon component (since it's not in react-icons)
const HuggingFaceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <ClipPathLinks />
      </div>
    </section>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y rounded-lg animate-glow border bg-gray-500/5 backdrop-blur-md shadow-lg">
      {/* Row 1: Frontend Frameworks (4 items) */}
      <div className="grid grid-cols-4 divide-x divide-blue-300 rounded-t-lg animate-glow border">
        <LinkBox Icon={SiNextdotjs} href="#" />
        <LinkBox Icon={SiReact} href="#" />
        <LinkBox Icon={SiSvelte} href="#" />
        <LinkBox Icon={SiTailwindcss} href="#" />
      </div>
      
      {/* Row 2: Backend (4 items) */}
      <div className="grid grid-cols-4 divide-x divide-blue-300 animate-glow border">
        <LinkBox Icon={SiNodedotjs} href="#" />
        <LinkBox Icon={SiExpress} href="#" />
        <LinkBox Icon={SiDjango} href="#" />
        <LinkBox Icon={SiFigma} href="#" />
      </div>
      
      {/* Row 3: Database & Tools (4 items) */}
      <div className="grid grid-cols-4 divide-x divide-blue-300 animate-glow border">
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiMysql} href="#" />
        <LinkBox Icon={SiDocker} href="#" />
        <LinkBox Icon={SiPytorch} href="#" />
      </div>
      
      {/* Row 4: ML Frameworks (4 items) */}
      <div className="grid grid-cols-4 divide-x divide-blue-300 animate-glow border">
        <LinkBox Icon={SiTensorflow} href="#" />
        <LinkBox Icon={SiScikitlearn} href="#" />
        <LinkBox Icon={SiSpacy} href="#" />
        <LinkBox Icon={HuggingFaceIcon} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();
    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort(
      (a, b) => a.proximity - b.proximity
    );

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-black-50" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-indigo-500 text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};