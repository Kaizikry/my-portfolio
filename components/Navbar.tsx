export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#1d2321]/15 bg-[#f2efe8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-sm font-black tracking-[0.14em] text-[#1d2321]">
          Khai<span className="text-[#ec5b38]">.</span>
        </a>
        <ul className="flex gap-4 text-xs font-bold uppercase tracking-[0.12em] text-[#1d2321] md:gap-7">
          <li>
            <a href="#about" className="transition hover:text-[#ec5b38]">
              Profile
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-[#ec5b38]">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}