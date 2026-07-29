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
    <section id="about" className="min-h-screen flex items-center bg-white px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="text-gray-600 leading-relaxed text-lg">
            I'm a web developer with experience building responsive, user-friendly
            applications using modern technologies like React, Next.js, and
            Tailwind CSS. I enjoy solving problems and turning ideas into real,
            working products. When I'm not coding, I like exploring new tech,
            reading, and improving my craft.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}