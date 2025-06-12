import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFramer,
  SiVite,
  SiSanity,
  SiDjango,
  SiNetlify,
  SiRender,
  SiReactrouter,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "../../assets/profileImg.jpg";

interface Skill {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const skills: Skill[] = [
  { icon: <FaHtml5 />, label: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS", color: "text-blue-500" },
  { icon: <SiJavascript />, label: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-400" },
  { icon: <TbSql />, label: "SQL", color: "text-gray-400" },
  { icon: <SiPython />, label: "Python", color: "text-green-400" },
  { icon: <SiReact />, label: "React", color: "text-cyan-400" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "text-green-500" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-teal-400" },
  { icon: <SiBootstrap />, label: "Bootstrap", color: "text-purple-500" },
  { icon: <SiFirebase />, label: "Firebase", color: "text-orange-400" },
  { icon: <SiFramer />, label: "Framer Motion", color: "text-pink-400" },
  { icon: <SiVite />, label: "Vite", color: "text-yellow-300" },
  { icon: <SiSanity />, label: "Sanity CMS", color: "text-red-400" },
  { icon: <FaGithub />, label: "GitHub", color: "text-gray-300" },
  { icon: <VscVscodeInsiders />, label: "VS Code", color: "text-blue-400" },
  { icon: <SiDjango />, label: "Django", color: "text-green-600" },
  { icon: <BiLogoPostgresql />, label: "PostgreSQL", color: "text-blue-400" },  
  { icon: <SiNetlify />, label: "Netlify", color: "text-teal-500" },
  { icon: <SiRender />, label: "Render", color: "text-purple-500" },
  { icon: <SiReactrouter />, label: "React Router", color: "text-red-500" },
];

const Home = () => {
  const [scale, setScale] = useState(1);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.75, 1 - scrollY / 500);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-20">

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="relative mb-8 mt-8">
            <img
              src={profileImg}
              alt="Adrienne Daniels"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.3s ease",
              }}
              className="relative mx-auto h-48 w-48 rounded-full border-4 border-white/20 object-cover shadow-2xl"
            />
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Hi, I'm <span className="block md:inline">Adrienne Daniels</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-200 md:text-2xl">
            A full-stack developer who thrives on building engaging, accessible
            experiences and collaborating with people who love what they do.
          </p>

          <div className="animate-scale-in flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/portfolio"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-purple-400 px-8 py-4 font-semibold text-purple-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-purple-400 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl"
        >
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm md:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">
              About Me
            </h2>
            <p className="text-center text-lg leading-relaxed text-slate-200">
              I'm a versatile developer with a knack for turning ideas into
              engaging products. When I'm not coding, I'm exploring new
              destinations or dancing on roller skates. I bring a strong mix of
              problem-solving and user-first thinking, ready to contribute to
              teams building awesome web experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Tech Stack
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`flex max-w-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:max-w-[160px] sm:p-6 md:max-w-[180px] ${hoveredSkill === index
                      ? "shadow-2xl shadow-purple-500/20"
                      : "shadow-lg"
                    }`}
                >
                  <div className="mb-3 flex items-center justify-center">
                    <div
                      className={`text-5xl transition-colors duration-300 ${hoveredSkill === index ? skill.color : "text-white"
                        }`}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  <span className="font-small whitespace-normal break-words text-sm text-slate-200 transition-colors duration-300 group-hover:text-white">
                    {skill.label}
                  </span>
                </div>

                <div
                  className={`pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-black/80 px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 ${hoveredSkill === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {skill.label}
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
  </motion.section>
  );
};

export default Home;
