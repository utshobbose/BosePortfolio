import { useEffect, useState } from "react";

const colorSets = [
  ["#341539", "#5e1e66", "#8e2dc0"],
  ["#341539", "#9229f3", "#4d34fc"],
  ["#341539", "#ff00cc", "#333399"],
  ["#341539", "#2b5876", "#4e4376"],
];

export default function GradientBackground() {
  const [gradient, setGradient] = useState(colorSets[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;

      if (isHovered) {
        const index = Math.floor((x + y) * (colorSets.length - 1)) % colorSets.length;
        setGradient(colorSets[index]);
        console.log("Current Gradient Colors:", colorSets[index]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  const backgroundStyle = {
    background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})`,
    transition: "background 0.6s ease-in-out",
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={backgroundStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setGradient(colorSets[0]); // reset to base
      }}
    />
  );
}
