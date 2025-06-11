import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Project } from "../types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  const [isPortrait, setIsPortrait] = useState(false);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-red-400"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="mb-4 text-2xl font-bold text-white">{project.title}</h2>

        <img
          src={project.image}
          alt={project.title}
          onLoad={(e) => {
            const img = e.currentTarget;
            setIsPortrait(img.naturalHeight > img.naturalWidth);
          }}
          className={`mb-6 w-full rounded-lg object-cover ${
            isPortrait ? "h-[400px]" : "aspect-video"
          }`}
        />

        <p className="text-slate-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.tech.map((Icon, i) => (
            <Icon key={i} className="text-2xl text-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
