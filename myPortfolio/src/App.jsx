import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <Hero />
      {/* Main content goes here */}
    </div>
  );
}

export default App;