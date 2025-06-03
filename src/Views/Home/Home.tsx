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
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Link } from "react-router-dom";

const skills = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <TbSql />, label: "SQL" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <FaGithub />, label: "GitHub" },
];

const Home = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen px-6 py-12 md:px-16">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Hi, I'm <span className="text-purple-700">Adrienne Daniels</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          A full-stack developer who thrives on building engaging, accessible
          experiences and collaborating with people who love what they do.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/portfolio"
            className="bg-purple-700 text-white hover:bg-purple-800 rounded-xl px-6 py-2 transition"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="border-purple-700 hover:bg-purple-100 rounded-xl border px-6 py-2 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-2 text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">
          I’m a versatile developer with a knack for turning ideas into engaging
          products. When I’m not coding, I’m exploring new destinations or
          dancing on roller skates. I bring a strong mix of problem-solving and
          user-first thinking, ready to contribute to teams building awesome web
          experiences.
        </p>
      </div>

      {/* Skills */}
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-3 justify-items-center gap-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-gray-600 hover:text-purple-700 flex flex-col items-center transition"
            >
              <div className="mb-1 text-3xl">{skill.icon}</div>
              <span className="text-sm">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
