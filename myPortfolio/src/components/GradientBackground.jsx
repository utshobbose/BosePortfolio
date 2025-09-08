// import { useEffect, useState } from "react";

// export default function GradientBackground() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const backgroundStyle = {
//     backgroundColor: "#0f0f12",
//     backgroundImage: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(128, 0, 255, 0.3), transparent 80%)`,
//     transition: "background-position 0.1s ease",
//   };

//   return (
//     <div
//       className="fixed inset-0 -z-10"
//       style={backgroundStyle}
//     />
//   );
// }
// src/components/GradientBackground.jsx
import { useEffect } from "react";

/**
 * Fixed, full-viewport background with a purple haze that follows the cursor.
 * IMPORTANT: we compute x/y as a percentage of the VIEWPORT, not any parent.
 */
export default function GradientBackground() {
  useEffect(() => {
    const el = document.getElementById("spotlight");
    if (!el) return;

    let raf = 0;

    const update = (clientX, clientY) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        el.style.setProperty("--spot-x", `${x}%`);
        el.style.setProperty("--spot-y", `${y}%`);
      });
    };

    const onMouse = (e) => update(e.clientX, e.clientY);
    const onTouch = (e) => {
      const t = e.touches?.[0];
      if (t) update(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    // center it initially
    update(window.innerWidth / 2, window.innerHeight / 2);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="spotlight"
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
