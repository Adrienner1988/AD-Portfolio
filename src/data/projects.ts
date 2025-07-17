import { 
  FaReact, 
  FaCss3Alt, 
  FaHtml5, 
  FaGithub } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiJavascript,
  SiGooglefonts,
  SiGoogleforms,
  SiVite,
  SiNetlify,
  SiFlask,
  SiJinja,
  SiRender,
  SiDjango,
  SiReactrouter,
  SiFirebase,
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import RecipeRainbow1 from "../assets/RecipeRainbow1.png";
import US from "../assets/US.jpg";
import HS from "../assets/HS.png";
import TinderScreenshot from "../assets/TinderScreenshot.png";
import Weather from "../assets/Weather.png";
import ToDo from "../assets/ToDo.png";
import KnowCap from "../assets/KnowCap.png";
import Pokemon from "../assets/Pokemon.jpg";


export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress" | "completed";
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
    tech: [
      FaReact,
      SiVite,
      SiTypescript,
      SiTailwindcss,
      SiFramer,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
    ],
  },
  {
    title: "Recipe Rainbow",
    description:
      "Discover and share delicious recipes with a vibrant community.",
    image: RecipeRainbow1,
    github: "https://github.com/Adrienner1988/Recipe-Blog",
    live: "https://reciperainbow.netlify.app/",
    status: "live",
    tech: [
      FaReact,
      SiVite,
      SiTypescript,
      SiTailwindcss,
      SiFramer,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
      SiRender,
      SiFirebase,
      SiDjango,
      SiPython,
      SiReactrouter,
    ],
  },
  {
    title: "HomeShield",
    description:
      "Building tools to make home maintenance a little less of a headache!",
    image: HS,
    github: "https://github.com/Adrienner1988/Homeshield",
    live: "https://homeshield.netlify.app/",
    status: "live",
    tech: [
      FaReact,
      SiTypescript,
      FaHtml5,
      FaCss3Alt,
      SiPython,
      VscVscodeInsiders,
      SiGooglefonts,
      SiGoogleforms,
      FaGithub,
      SiNetlify,
      SiReactrouter,
    ],
  },
  {
    title: "Know Cap",
    description:
      "Building tools to make home maintenance a little less of a headache!",
    image: KnowCap,
    github: "https://github.com/Adrienner1988/KnowCap",
    live: "https://homeshield.netlify.app/",
    status: "live",
    tech: [
      FaReact,
      SiVite,
      SiTypescript,
      FaHtml5,
      FaCss3Alt,
      SiPython,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
      SiReactrouter,
    ],
  },
  {
    title: "Tinder Clone",
    description:
      "A clone of the dating app Tinder that allows users to swipe through profiles and match with potential partners.",
    image: TinderScreenshot,
    github: "https://github.com/Adrienner1988/tinder-clone",
    live: "https://ad-tinder-clone.netlify.app/",
    status: "live",
    tech: [
      FaReact,
      SiTypescript,
      FaHtml5,
      FaCss3Alt,
      SiPython,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
    ],
  },
  {
    title: "Whats's the Weather?",
    description:
      "A weather app that provides real-time weather information for any location worldwide.",
    image: Weather,
    github:
      "https://github.com/Adrienner1988/thieves_133_week7_weekend_homework",
    live: "https://ad-weather-api.netlify.app/",
    status: "live",
    tech: [
      SiJavascript,
      FaHtml5,
      FaCss3Alt,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
    ],
  },
  {
    title: "Todo List Tracker",
    description:
      "A simple and intuitive todo list application to help you stay organized and productive.",
    image: ToDo,
    github: "https://github.com/Adrienner1988/To-Do-App",
    live: "https://dolisttracker.netlify.app/",
    status: "live",
    tech: [
      FaReact,
      SiVite,
      SiTypescript,
      FaHtml5,
      FaCss3Alt,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
      SiNetlify,
    ],
  },
  {
    title: "Pokemon Game",
    description:
      "A fun and interactive Pokemon game where players can catch, train, and battle with their favorite Pokemon.",
    image: Pokemon,
    github: "https://github.com/Adrienner1988/thieves_133_week5_Flask_homework",
    live: "",
    status: "completed",
    tech: [
      FaHtml5,
      FaCss3Alt,
      SiPython,
      SiJinja,
      SiFlask,
      BiLogoPostgresql,
      VscVscodeInsiders,
      SiGooglefonts,
      FaGithub,
    ],
  },
];

export default projects;
