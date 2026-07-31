export interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A short description of what this project does and the tech used.",
    link: "#",
    image: "/project1.png",
    tags: ["Next.js", "Tailwind"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A short description of what this project does and the tech used.",
    link: "#",
    image: "/project2.png",
    tags: ["React", "Node.js"],
  },
  //Just add a new object here whenever you want to add a project
  {
    slug: "project-three",
    title: "Project Three",
    description: "A short description of what this project does and the tech used.",
    link: "#",
    image: "/project3.png",
    tags: ["TypeScript"],
  },
];