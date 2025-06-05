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
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profileImg.jpg";

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
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.75, 1 - scrollY / 500); // Shrinks to 75%
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 px-6 py-12 pt-20 text-white md:px-16">
      {/* Hero */}
      <div className="mb-12 text-center">
        {/* Profile Picture */}
        <img
          src={profileImg}
          alt="Adrienne Daniels"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
          className="mx-auto mb-6 h-48 w-48 rounded-full object-cover shadow-md"
        />
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Hi, I'm <span className="text-purple-400">Adrienne Daniels</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          A full-stack developer who thrives on building engaging, accessible
          experiences and collaborating with people who love what they do.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link
            to="/portfolio"
            className="rounded-xl bg-purple-700 px-6 py-2 text-white transition hover:bg-purple-800"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-purple-400 px-6 py-2 transition hover:bg-purple-600"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-2 text-2xl font-semibold">About Me</h2>
        <p className="text-white">
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
              className="flex flex-col items-center text-white transition hover:text-purple-400"
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
