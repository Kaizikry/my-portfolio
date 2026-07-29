export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">MyPortfolio</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}