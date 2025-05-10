export default function Navbar() {
return (
<nav className="border-4 border-black bg-white px-6 py-4 flex justify-between items-center font-comic">
    <div className="text-xl font-bold">🧩 WEBSITE LOGO</div>
    <ul className="flex gap-6 items-center">
    <li><a href="#" className="hover:underline">About</a></li>
    <li><a href="#" className="hover:underline">Blog</a></li>
    <li className="relative group">
        <button className="hover:underline">Products ▾</button>
        <ul className="absolute hidden group-hover:block top-full left-0 bg-white border-2 border-black mt-1">
        <li className="px-4 py-1 hover:bg-gray-100">Category 1</li>
        <li className="px-4 py-1 hover:bg-gray-100">Category 2</li>
        <li className="px-4 py-1 hover:bg-gray-100">Category 3</li>
        </ul>
    </li>
    <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
</nav>
);
}
