import { FaGithub, FaExternalLinkAlt, FaWrench } from "react-icons/fa";
import { motion } from "framer-motion";
import { Project } from "../types";

interface Props {
  project: Project;
  onOpen: () => void;
}

const ProjectCard = ({ project, onOpen }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/20"
      onClick={onOpen}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((Icon, i) => (
            <Icon key={i} className="text-xl text-white opacity-80" />
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
              <FaWrench /> In Progress
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
