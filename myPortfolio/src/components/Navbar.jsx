import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Toggle class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 text-sm border-gray-300 dark:border-gray-700">
      
      {/* Left: Name */}
      <div>
        <img src="/BoseinBlack.png" alt="Logo" className="w-12 h-auto max-w-[4rem] object-contain" />
      </div>

      {/* Center: Nav Links */}
      <div className="navbar-links flex justify-center gap-10">
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Projects</a>
        <a href="#">Drop me a line</a>
      </div>

      {/* Right: Toggle Mode */}
      <button
        className="text-xs flex items-center gap-1"
        onClick={() => setIsDark(!isDark)}
      >
        <span>{isDark ? "🌙" : "🌞"}</span>
        <span>{isDark ? "Dark" : "Light"}</span>
      </button>
    </nav>
  );
}
