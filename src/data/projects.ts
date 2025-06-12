import {
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPython,
} from "react-icons/si";

import { IconType } from "react-icons";
import RecipeRainbow1 from "../assets/RecipeRainbow1.png";
import US from "../assets/US.jpg";
import HS from "../assets/HS.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress";
  tech: IconType[];
}

const projects: Project[] = [
  {
    title: "Urban Stitch",
    description:
      "E-commerce platform designed for a proposed fashion and lifestyle brand.",
    image: US,
    github: "https://github.com/Adrienner1988/urban-stitch",
    status: "in-progress",
    tech: [FaReact, SiTypescript, SiTailwindcss, SiFramer],
  },
  {
    title: "Recipe Rainbow",
    description:
      "Discover and share delicious recipes with a vibrant community.",
    image: RecipeRainbow1,
    github: "https://github.com/Adrienner1988/Recipe-Blog",
    live: "https://reciperainbow.netlify.app/",
    status: "live",
    tech: [FaReact, SiTypescript, SiTailwindcss, SiFramer],
  },
  {
    title: "HomeShield",
    description:
      "Building tools to make home maintenance a little less of a headache!",
    image: HS,
    github: "https://github.com/Adrienner1988/Homeshield",
    live: "https://homeshield.netlify.app/",
    status: "live",
    tech: [FaReact, SiTypescript, FaCss3Alt, SiPython],
  },
];

export default projects;
