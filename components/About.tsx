import FadeInSection from "./FadeInSection";

const skills: string[] = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-[#1d2321] bg-[#1d2321] px-5 py-24 text-[#f2efe8] md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.55fr_1fr] md:gap-24">
        <FadeInSection>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b7d239]">01 / Profile</p>
          <h2 className="display-type mt-5 text-5xl leading-[0.9] md:text-7xl">A little<br />context.</h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="max-w-2xl text-xl leading-relaxed text-[#f2efe8] md:text-3xl md:leading-relaxed">
            I&apos;m a web developer with experience building responsive, user-friendly
            applications using modern technologies like React, Next.js, and
            Tailwind CSS. I enjoy making the useful parts of a product feel
            considered, direct, and satisfying to use.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3} className="md:col-start-2">
          <div className="grid border-l border-t border-[#f2efe8]/30 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border-b border-r border-[#f2efe8]/30 px-4 py-5 text-sm font-bold uppercase tracking-[0.1em]"
              >
                {skill}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}