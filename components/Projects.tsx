import FadeInSection from "./FadeInSection";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-6 py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Projects
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={project.slug} delay={index * 0.15}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover bg-gray-200"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.link}
                    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}