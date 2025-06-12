import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  // FaNodeJs,
  FaCss3Alt,
  // FaHtml5,
  // FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  // SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiPython,
  // SiFlask,
} from "react-icons/si";
import { IconType } from "react-icons";

import ProjectModal from "../../Components/ProjectModal";
import RecipeRainbow1 from "../../assets/RecipeRainbow1.png";
import US from "../../assets/US.jpg";
import HS from "../../assets/HS.png";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress";
  tech: IconType[];
}

const projects: Project[] = [
  {
    title: "Urban Stitch",
    description:
      "E-commerce platform designed for a proposed fashion and lifestyle brand.",
    image: US,
    github: "https://github.com/Adrienner1988/urban-stitch",
    status: "in-progress",
    tech: [FaReact, SiTypescript, SiTailwindcss, SiFramer],
  },
  {
    title: "Recipe Rainbow",
    description:
      "Discover and share delicious recipes with a vibrant community.",
    image: RecipeRainbow1,
    github: "https://github.com/Adrienner1988/Recipe-Blog",
    live: "https://reciperainbow.netlify.app/",
    status: "live",
    tech: [FaReact, SiTypescript, SiTailwindcss, SiFramer],
  },
  {
    title: "HomeShield",
    description:
      "Building tools to make home maintenance a little less of a headache!",
    image: HS,
    github: "https://github.com/Adrienner1988/Homeshield",
    live: "https://homeshield.netlify.app/",
    status: "live",
    tech: [FaReact, SiTypescript, FaCss3Alt, SiPython],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-12 mt-12 text-center text-4xl font-bold text-white">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-3 pt-2 text-xl text-purple-400">
                  {project.tech.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white transition hover:text-purple-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white transition hover:text-pink-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-slate-400">
                      <FaExternalLinkAlt /> In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
