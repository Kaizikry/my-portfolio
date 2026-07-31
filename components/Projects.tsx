import FadeInSection from "./FadeInSection";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeInSection>
          <div className="mb-14 flex items-end justify-between border-b-2 border-[#1d2321] pb-5 md:mb-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#68706b]">02 / Projects</p>
              <h2 className="display-type mt-3 text-5xl leading-none md:text-7xl">Selected Work.</h2>
            </div>
          </div>
        </FadeInSection>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInSection key={project.slug} delay={index * 0.15}>
              <article className="group h-full border-t-2 border-[#1d2321] pt-3">
                <div className={`relative aspect-4/3 overflow-hidden ${index === 1 ? "bg-[#4785ad]" : index === 2 ? "bg-[#b7d239]" : "bg-[#ec5b38]"}`}>
                  <div className="absolute inset-4 border border-[#1d2321]" />
                  <div className="display-type absolute bottom-[-0.17em] left-3 text-[7.5rem] leading-none text-[#f2efe8] opacity-90">0{index + 1}</div>
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-[#1d2321] text-sm font-bold text-[#f2efe8]">↗</div>
                </div>
                <div className="pt-5">
                  <p className="text-xs font-bold tracking-[0.14em] text-[#68706b]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="display-type mt-1 text-3xl leading-none text-[#1d2321]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#68706b]">{project.description}</p>
                  {project.tags && <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1d2321]">{project.tags.join(" / ")}</p>}
                  <a href={project.link} className="mt-6 inline-block border-b-2 border-[#1d2321] pb-1 text-xs font-black uppercase tracking-[0.12em] text-[#1d2321] transition group-hover:border-[#ec5b38] group-hover:text-[#ec5b38]">View Project</a>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}