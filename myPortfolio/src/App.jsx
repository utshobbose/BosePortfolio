import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      <Hero />
    </div>
  );
}

export default App;
