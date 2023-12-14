import flyboxImage from "../assets/project-photos/Flybox.jpg";
import gamehubImage from "../assets/project-photos/Gamehub.avif";

export interface Project {
  name: string;
  label: string;
  skills: string[];
  image: string;
  description: string;
  projectUrl: string;
  gitHubUrl: string;
}

const projects: Project[] = [
  {
    name: "flybox",
    label: "Flybox",
    skills: [
      "java",
      "javascript",
      "react",
      "mongodb",
      "spring",
      "html",
      "css",
      "bootstrap",
    ],
    image: flyboxImage,
    description:
      "Experienced fly fisherman can often tie hundreds of different fly patterns, and remembering the materials and techniques for each one can be difficult. Flybox is a utility app that aims to solve this issue. Users can make an account to create and manage fly tying recipes by adding them to their virtual flybox.",
    projectUrl: "https://github.com/KyleRobison15/flybox-react",
    gitHubUrl: "https://github.com/KyleRobison15/flybox-react",
  },
  {
    name: "game-hub",
    label: "Game Hub",
    skills: ["typescript", "react", "html", "css", "chakraui"],
    image: gamehubImage,
    description:
      "GameHub is a simple, yet elegant web application for browsing video games. It is powered by a third party API from RAWG.io which is the largest video game database and game discovery service available. Since the API is free to use and the backend was already in place, I was able to focus all my energy on honing in my front end development skills with React.",
    projectUrl: "https://game-hub-kyle-robison.vercel.app/",
    gitHubUrl: "https://github.com/KyleRobison15/game-hub",
  },
];

const useProjects = () => projects;

export default useProjects;
