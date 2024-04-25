import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="bg-purple text-offWhite p-4">
        <h1>Software Engineer</h1>
        <h2 className="bg-red-500">
          Welcome, I'm <strong className="text-gold">Adrienne Daniels</strong>! thank you
          for stopping by my little corner of the internet to learn more about me and check out what I have been building.
        </h2>

        <h1>&#12296;About Adrienne&#12297;</h1>
        <p>A versatile full-stack Developer with a knack for crafting innovative projects and solving complex challenges. Beyond my coding prowess, I often explore new destinations or perfect my dance moves on roller skates. With a background that spans various roles and industries, I bring a unique blend of analytical precision and customer-centric thinking to every project. I thrive on collaboration and am eager to contribute my skills to front-end or full-stack engineering teams, bringing energy and expertise to drive impactful results in web development.</p>

        <h1>&#12296;Skills&#12297;</h1>
        <div className="inline-grid gap-4 grid-cols-3 grid-rows-3 content-center px-4 py-4">
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><FaHtml5 />HTML</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><FaCss3 />CSS</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiJavascript />JavaScript</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiTypescript />TypeScript</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><TbSql />SQL</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiPython />Python</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiReact />React</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiNodedotjs />Node.js</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiTailwindcss />Tailwind</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiBootstrap />Bootstrap</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><SiFirebase />Firebase</span>
          <span className="border rounded-lg hover:border-dotted px-4 py-4"><DiGithubBadge />GitHub</span>
        </div>
      </div>
    </>
  );
};

export default Home;
