import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress"| "completed";
  tech: IconType[];
}
export interface ProjectData {
  projects: Project[];
}