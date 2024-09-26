import flyboxImage from "../assets/project-photos/FlyBox.jpg";
import gamehubImage from "../assets/project-photos/Gamehub.avif";
import letsClimbImage from "../assets/project-photos/LetsClimb.jpg";
import draImage from "../assets/project-photos/dra-image.jpeg";

export interface Project {
  name: string;
  label: string;
  skills: string[];
  projectStatus: "DEV" | "PROD";
  image: string;
  description: string;
  projectUrl: string;
  gitHubUrl: string;
}

const projects: Project[] = [
  {
    name: "lets-climb",
    label: "Let's Climb",
    skills: [
      "Java",
      "Spring",
      "React",
      "Typescript",
      "Javascript",
      "MySQL",
      "Kubernetes",
      "HTML",
      "CSS",
      "Chakra UI",
    ],
    projectStatus: "DEV",
    image: letsClimbImage,
    description:
      "Let's Climb is a full stack, dynamic web application built using Java, Spring, MySQL and React. It is deployed (using Jenkins CI/CD) to my self-managed Kubernetes cluster hosted on Digital Ocean, and is fully secured using Spring Security 6 and JSON Web Token authentication. Not only is it a fun application, it displays a high level of understanding of many fundamental skills required by a Full Stack developer. I also designed and documented the REST API and database schema using many of the industry standards I've learned at my day job. I'd highly encourage any prospective employers to review the API Documentation and GitHub repos for this project.",
    projectUrl: "http://167.172.208.26:31276/swagger-ui/index.html",
    gitHubUrl:
      "https://github.com/KyleRobison15/krd-lets-climb-rest/blob/main/README.md",
  },
  {
    name: "drive-right-academy",
    label: "Drive Right Academy",
    skills: ["Typescript", "Javascript", "React", "HTML", "CSS", "Chakra UI"],
    projectStatus: "PROD",
    image: draImage,
    description:
      "For this project, I partnered with Drive Right Academy, a driver's education company in Colorado Springs, to replace their outdated website with a new, simple and modern one. In less than two weeks, I was able to deliver a mobile-friendly, modern and simple website with the goal of improving their 'click-to-call' engagement from prospective students. Additionally, I worked with the company who created Drive Right Academy's old website in order to transfer the driverightacademy.com domain to the new host. The client was thrilled with the result and thanked me for my professionalism throughout the process.",
    projectUrl: "https://drive-right-academy.vercel.app",
    gitHubUrl:
      "https://github.com/KyleRobison15/drive-right-academy/blob/main/README.md",
  },
  {
    name: "portfolio-site",
    label: "kylerobison.com",
    skills: ["Typescript", "Javascript", "React", "HTML", "CSS", "Chakra UI"],
    projectStatus: "PROD",
    image: flyboxImage,
    description:
      "kylerobison.com is my personal portfolio website built using React, TypeScript and ChakraUI. The website was developed using a mobile-first, responsive design with a simple asthetic. My goal was to keep the focus on demonstrating my expertise and skills as a Full-Stack Developer. When you visit my website, you can browse, filter, and search through my collection of personal projects and the various skills I use on a daily basis as a Full-Time Software Engineer.",
    projectUrl: "https://kylerobison.com",
    gitHubUrl:
      "https://github.com/KyleRobison15/kr-personal-site-react/blob/master/README.md",
  },
  // {
  //   name: "flybox",
  //   label: "Flybox",
  //   skills: [
  //     "Java",
  //     "Javascript",
  //     "React",
  //     "MongoDB",
  //     "Spring",
  //     "HTML",
  //     "CSS",
  //     "Bootstrap",
  //   ],
  //   image: flyboxImage,
  //   description:
  //     "Experienced fly fisherman can often tie hundreds of different fly patterns, and remembering the materials and techniques for each one can be difficult. Flybox is a utility app that aims to solve this issue. Users can make an account to create and manage fly tying recipes by adding them to their virtual flybox.",
  //   projectUrl: "https://github.com/KyleRobison15/flybox-react",
  //   gitHubUrl:
  //     "https://github.com/KyleRobison15/flybox-react/blob/master/README.md",
  // },
  {
    name: "game-hub",
    label: "Game Hub",
    skills: ["Typescript", "Javascript", "React", "HTML", "CSS", "Chakra UI"],
    projectStatus: "PROD",
    image: gamehubImage,
    description:
      "GameHub is a simple, yet elegant web application for browsing video games. It is powered by a third party API from RAWG.io which is the largest video game database and game discovery service available. Since the API is free to use and the backend was already in place, I was able to focus all my energy on honing in my front end development skills with React.",
    projectUrl: "https://game-hub-kyle-robison.vercel.app/",
    gitHubUrl: "https://github.com/KyleRobison15/game-hub/blob/main/README.md",
  },
];

const useProjects = () => projects;

export default useProjects;
