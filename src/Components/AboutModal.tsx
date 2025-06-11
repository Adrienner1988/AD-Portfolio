import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  image: string;
  title: string;
  onClose: () => void;
}

const AboutModal = ({ image, title, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-lg rounded-2xl bg-slate-900 p-6 text-white shadow-lg"
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
            <FaTimes />
          </button>

          <h3 className="mb-4 text-2xl font-bold">{title}</h3>

          <img
            src={image}
            alt={title}
            className="mb-4 max-h-[500px] w-full rounded-xl object-cover"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutModal;
