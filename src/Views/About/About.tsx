import { useState } from "react";
import { FaMapMarkerAlt, FaCode, FaCamera } from "react-icons/fa";
import AtGoogle from "../../assets/AtGoogle.jpg";
import Class from "../../assets/Class.jpg";
import RollerSkate from "../../assets/RollerSkate.jpg";
import Skydive from "../../assets/Skydive.jpg";
import AboutModal from "../../Components/AboutModal";
import { motion } from "framer-motion";

interface Developer {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  passionateAbout: string[];
  hobbies: string[];
}

interface ImageData {
  src: string;
  alt: string;
  icon: typeof FaCode;
}

const developer: Developer = {
  firstName: "Adrienne",
  lastName: "Daniels",
  title: "Software Developer",
  location: "Florida",
  passionateAbout: [
    "UX/UI",
    "accessibility",
    "collaboration",
    "relationship building",
  ],
  hobbies: [
    "traveling",
    "roller skating",
    "fashion",
    "makeup",
    "personal nail tech",
  ],
};

const images: ImageData[] = [
  {
    src: AtGoogle,
    alt: "Adrienne outside Google NYC",
    icon: FaCode,
  },
  {
    src: Class,
    alt: "Adrienne at Google NYC in a classroom with other developers",
    icon: FaCamera,
  },
  {
    src: RollerSkate,
    alt: "Adrienne roller skating in a 70s themed outfit",
    icon: FaCamera,
  },
  {
    src: Skydive,
    alt: "Adrienne skydiving over the Florida coast",
    icon: FaMapMarkerAlt,
  },
];

const About = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [modalData, setModalData] = useState<{
    image: string;
    title: string;
    description?: string;
  } | null>(null);

  const openModal = (image: ImageData) => {
    setModalData({
      image: image.src,
      title: image.alt,
      description:
        "This is one of my favorite memories — click around to learn more about what inspires me.",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-20">
      <div className="container mx-auto px-6 py-16">
        {/* Terminal JSON block */}
        <div className="mb-16 mt-16 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="animate-scale-in rounded-lg border border-gray-600 bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between rounded-t-lg bg-gray-700 px-4 py-2">
                <span className="text-sm font-medium text-white">
                  Windows PowerShell
                </span>
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 border border-gray-400"></div>
                  <div className="h-4 w-4 border-2 border-gray-400"></div>
                  <div className="h-4 w-4 text-xs text-gray-400">×</div>
                </div>
              </div>
              <div className="rounded-b-lg bg-black p-6">
                <div className="mb-2 font-mono text-sm text-blue-400">
                  PS C:\Users\Adrienne&gt;
                </div>
                <pre className="overflow-x-auto font-mono text-sm text-green-400">
                  <code className="whitespace-pre-wrap">
                    {`const About = {
  firstName: "${developer.firstName}",
  lastName: "${developer.lastName}", 
  title: "${developer.title}",
  location: "${developer.location}",
  loves: [${developer.passionateAbout.map((p) => `"${p}"`).join(", ")}],
  hobbies: [${developer.hobbies.map((h) => `"${h}"`).join(", ")}]
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-auto transform cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => openModal(image)} // modal opens on click
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent transition-opacity duration-300 ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <image.icon className="h-5 w-5" />
                    <span className="font-medium">{image.alt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
              About Me
            </h2>
            <div className="space-y-6 leading-relaxed text-slate-200">
              <p className="text-lg">
                I love being able to bring designer ideas and wireframes to
                life, and build solutions that solve real problems and help
                people in meaningful ways.
              </p>
              <p>
                I'm especially excited by projects in travel, entertainment, and
                hospitality — industries that thrive on creativity and human
                connection. I enjoy collaborating on fun, engaging teams but
                also love focused time to work independently, share ideas, and
                grow.
              </p>
              <p>
                After working in hospitality for over 10 years, I lost my job in
                2020 and decided to pursue a career that offered more growth and
                stability. I began self-teaching code, and two years later
                enrolled in a coding bootcamp to sharpen my skills and take the
                leap into tech.
              </p>
              <p>
                Outside of work, you'll probably find me at the skating rink,
                traveling, exploring the arts, or deep in a makeup or fashion
                rabbit hole. I also love crafting and have a strong appreciation
                for creativity in all forms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal rendering */}
      {modalData && (
        <AboutModal
          image={modalData.image}
          title={modalData.title}
          onClose={() => setModalData(null)}
        />
      )}
    </motion.section>
  );
};

export default About;
