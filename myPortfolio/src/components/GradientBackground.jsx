import { useEffect, useState } from "react";

export default function GradientBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundStyle = {
    backgroundColor: "#0f0f12",
    backgroundImage: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(128, 0, 255, 0.3), transparent 80%)`,
    transition: "background-position 0.1s ease",
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={backgroundStyle}
    />
  );
}
