import { FaGithub, FaExternalLinkAlt, FaWrench } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress";
}

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/20">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white transition hover:text-purple-300"
          >
            <FaGithub /> Code
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white transition hover:text-pink-300"
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
    </div>
  );
};

export default ProjectCard;
