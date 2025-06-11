import { useRef, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Project } from "../types";
import { motion } from "framer-motion";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  const [isPortrait, setIsPortrait] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 p-6 text-white shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute right-4 top-4 text-xl text-white hover:text-red-400"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <h4 className="mb-4 text-2xl font-bold text-white">{project.title}</h4>

        <img
          src={project.image}
          alt={project.title}
          onLoad={(e) => {
            const img = e.currentTarget;
            setIsPortrait(img.naturalHeight > img.naturalWidth);
          }}
          className={`"mb-4 max-h-[500px] w-full rounded-xl object-cover transition-opacity duration-300 ${
            isPortrait ? "h-[400px]" : "aspect-video"
          }`}
        />

        <p className="text-slate-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.tech.map((Icon, i) => (
            <Icon key={i} className="text-2xl text-white" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
