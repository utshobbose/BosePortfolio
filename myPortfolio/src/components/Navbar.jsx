// export default function Navbar() {
//     return (
//     <nav className="w-full flex justify-between items-center px-8 py-4 text-sm border-b">
//         {/* Left: Logo/Name */}
//         <div className="font-medium">Utshob Bose</div>

//         {/* Center: Nav Links */}
//         <ul className="flex justify-center space-x-8 list-none p-0 m-0">
//             <li><a href="#" className="hover:underline">About</a></li>
//             <li><a href="#" className="hover:underline">Work</a></li>
//             <li><a href="#" className="hover:underline">Process</a></li>
//             <li><a href="#" className="hover:underline">Drop me a line</a></li>
//         </ul>

//         {/* Right: Theme Toggle Placeholder */}
//         <div className="text-xs flex items-center gap-1">
//         <span>☀️</span>
//         <span>Light</span>
//         </div>
//     </nav>
//     );
// }
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 text-sm border-b">

      {/* Left: Name */}
      <div className="font-medium">Utshob Bose</div>

      {/* Center: Nav Links (finally working) */}
      <div className="flex justify-center flex-1">
        <div className="flex gap-10">
          <a href="#" className="text-black hover:underline">About</a>
          <a href="#" className="text-black hover:underline">Work</a>
          <a href="#" className="text-black hover:underline">Process</a>
          <a href="#" className="text-black hover:underline">Drop me a line</a>
        </div>
      </div>

      {/* Right: Light Mode */}
      <div className="text-xs flex items-center gap-1">
        <span>🌞</span>
        <span>Light</span>
      </div>
    </nav>
  );
}
