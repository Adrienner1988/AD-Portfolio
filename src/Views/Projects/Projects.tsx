import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "../../Components/ProjectModal";
import projects from "../../data/projects";
import { Project } from "../../data/projects";



const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-20">

        <h2 className="mb-12 mt-12 text-center text-4xl font-bold text-white">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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

        <AnimatePresence>
          {activeProject && (
            <ProjectModal
              project={activeProject}
              onClose={() => setActiveProject(null)}
            />
          )}
        </AnimatePresence>
      </motion.section>
  );
};

export default Projects;
