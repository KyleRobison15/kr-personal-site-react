import flyboxImage from "../assets/project-photos/FlyBox3.png";
import gamehubImage from "../assets/project-photos/Gamehub.avif";
import letsClimbImage from "../assets/project-photos/Lets_Climb.png";

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
      "Java",
      "Javascript",
      "React",
      "MongoDB",
      "Spring",
      "HTML",
      "CSS",
      "Bootstrap",
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
    skills: ["Typescript", "React", "HTML", "CSS", "Chakra UI"],
    image: gamehubImage,
    description:
      "GameHub is a simple, yet elegant web application for browsing video games. It is powered by a third party API from RAWG.io which is the largest video game database and game discovery service available. Since the API is free to use and the backend was already in place, I was able to focus all my energy on honing in my front end development skills with React.",
    projectUrl: "https://game-hub-kyle-robison.vercel.app/",
    gitHubUrl: "https://github.com/KyleRobison15/game-hub",
  },
  {
    name: "lets-climb",
    label: "Let's Climb",
    skills: [
      "Java",
      "Spring",
      "React",
      "Typescript",
      "MySQL",
      "HTML",
      "CSS",
      "Chakra UI",
    ],
    image: letsClimbImage,
    description:
      "Let's Climb is a full stack, dynamic web application built using Java, Spring, MySQL and React. I designed the REST API and database schema myself. Users can view or add information about specific rock climbs, as well as update or delete that information from a database. It is intended to be used as a way of keeping track of climbs the user has done, and climbs the user would like to do in the future.",
    projectUrl: "https://github.com/KyleRobison15/JPACRUDProject",
    gitHubUrl: "https://github.com/KyleRobison15/JPACRUDProject",
  },
];

const useProjects = () => projects;

export default useProjects;
