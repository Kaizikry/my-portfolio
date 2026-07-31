export default function Home() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-[#1d2321] px-5 pb-10 pt-28 md:px-8 md:pb-12"
    >
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-35" />
      <div className="absolute right-[8%] top-28 -z-10 h-44 w-44 border-18 border-[#b7d239] md:right-[15%] md:top-32 md:h-72 md:w-72" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1fr_0.72fr] md:items-end">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#68706b]">
            A web developer who makes websites for fun and profit.
          </p>
          <h1 className="display-type max-w-4xl text-[clamp(4rem,11vw,10.5rem)] leading-[0.8] tracking-[0.01em] text-[#1d2321]">
            Hi I'm
            <span className="block pl-[12%] italic text-[#ec5b38]">Khairul Arfan</span>
          </h1>
        </div>
        <div className="border-l-2 border-[#1d2321] pl-5 pb-1 md:mb-2 md:max-w-sm">
          <p className="text-xl leading-snug text-[#1d2321] md:text-2xl">
            I turn useful ideas into clear, tactile digital experiences.
          </p>
          <a href="#projects" className="mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#1d2321] transition hover:text-[#ec5b38]">
            See my projects <span className="text-xl leading-none" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}