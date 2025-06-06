import ProjectCard from "../../Components/ProjectCard"

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  status?: "live" | "in-progress";
}

const projects: Project[] = [
  {
    title: "Travel Tracker",
    description: "Track and share your travel adventures with friends.",
    image: "/images/travel-tracker.jpg",
    github: "https://github.com/yourusername/travel-tracker",
    live: "https://travel-tracker.netlify.app",
    status: "live",
  },
  {
    title: "Skate Schedule",
    description: "Find roller skating events and rinks near you.",
    image: "/images/skate-schedule.jpg",
    github: "https://github.com/yourusername/skate-schedule",
    status: "in-progress",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
