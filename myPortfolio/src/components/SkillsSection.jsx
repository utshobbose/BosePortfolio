// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiKotlin,
  SiTailwindcss,
  SiExpress,
  SiVuedotjs,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
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
    <div className="divide-y divide-indigo-500 rounded-lg animate-glow border bg-gray-500/5 backdrop-blur-md shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-indigo-500 rounded-lg animate-glow border-[]">
        <LinkBox Icon={SiNextdotjs} href="#" />
        <LinkBox Icon={SiReact} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-indigo-500 animate-glow border">
        <LinkBox Icon={SiNodedotjs} href="#" />
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiDocker} href="#" />
        <LinkBox Icon={SiKotlin} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-indigo-500 animate-glow border">
        <LinkBox Icon={SiTailwindcss} href="#" />
        <LinkBox Icon={SiExpress} href="#" />
        <LinkBox Icon={SiVuedotjs} href="#" />
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
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-gray-50" />
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
