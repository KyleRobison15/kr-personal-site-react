import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSpring,
  SiMongodb,
  SiJson,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiBootstrap,
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiSplunk,
  SiPostman,
  SiSwagger,
  SiApachekafka,
  SiGit,
  SiGithub,
  SiJenkins,
  SiJunit5,
  SiReact,
  SiJest,
  SiTestinglibrary,
  SiJira,
  SiFigma,
  SiVisualstudio,
  SiIntellijidea,
  SiEclipseide,
  SiGradle,
  SiAngular,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { RiTestTubeFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { BsKanban } from "react-icons/bs";

export interface Skill {
  name: string;
  label: string;
  icon: IconType;
  categories: string[];
  yearsExperience: string;
  isProjectSkill: boolean;
  text: string;
}

export const skillsIconMap: { [key: string]: IconType } = {
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  angular: SiAngular,
  mongodb: SiMongodb,
  mysql: GrMysql,
  spring: SiSpring,
  html: SiHtml5,
  css: SiCss3,
  bootstrap: SiBootstrap,
  chakraui: SiChakraui,
};

const skills = [
  {
    name: "java",
    label: "Java",
    icon: FaJava,
    categories: ["Language", "API"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "Java is my 'native' programming language. In 2021 I learned the fundamentals of Object Oriented Programming with Java and have since been using those skills on a near daily basis for backend development at Edward Jones as well as for my own personal projects.",
  },
  {
    name: "react",
    label: "React",
    icon: SiReact,
    categories: ["Library", "Front End"],
    yearsExperience: "2 yrs",
    isProjectSkill: true,
    text: "React is by far one of my favorite technologies to use.  When I joined Edward Jones in December of 2021 there was a large need on my team for a React developer, so I took the initiative to learn it and became the lead front-end engineer on a modernization effort for one of our client account processing systems. I have also used react to create multiple personal projects including this site.",
  },
  {
    name: "spring",
    label: "Spring",
    icon: SiSpring,
    categories: ["Framework", "API"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "I use Spring regularly to build scalable, well-structured Java applications. Mainly Spring Core for dependency injection, Spring Boot for conventional and quick project set-up, Spring Data for easily accessing both SQL and NoSQL databases and simplifying object relational mapping, and finally Spring Security for integrating authentication and authorization. The Spring Framework allows me to build scalable, secure, and well-structured Java applications.",
  },
  {
    name: "rest-api",
    label: "RESTful APIs",
    icon: AiFillApi,
    categories: ["API", "Framework"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "I have over 2 years of experience both designing REST APIs and implementing external REST services. In addition to a handful of REST API's I've created for personal projects, I have also been an integral part of designing and developing two new REST APIs for handling client account activity at Edward Jones. Through these experiences, I have a gained a good grasp of how to use HTTP, JSON and RESTful principles to facilitate effecient and scalable communication between a client and sever.",
  },
  {
    name: "javascript",
    label: "Javascript",
    icon: SiJavascript,
    categories: ["Language", "Front End"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "I learned basic vanilla Javascript as part of my coding bootcamp in 2021. Since then I have greatly expanded my Javascript skills and now use it on a regular basis to develop user interfaces with React.",
  },
  {
    name: "typescript",
    label: "Typescript",
    icon: SiTypescript,
    categories: ["Language", "Front End"],
    yearsExperience: "1.5 yrs",
    isProjectSkill: true,
    text: "Although a bit shorter than my journey with Javascript, I also have a good amount of experience building UI's with Typescript and React. This portfolio site was created using Typescript and I have begun favoring it over regular Javascript since it prevents type-related errors at compile time and provides better readability and IDE support.",
  },
  {
    name: "html",
    label: "HTML",
    icon: SiHtml5,
    categories: ["Language", "Front End"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "I use HTML on a regular basis in conjuction with React for front-end development. I have a strong understanding that HTML elements ultimately make up the document object model used by our browers to render web content.",
  },
  {
    name: "css",
    label: "CSS",
    icon: SiCss3,
    categories: ["Language", "Front End"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "Any beautiful UI requires excellent styling! I have a good understanding of CSS fundamentals such as selectors, properties and values, the box model, CSS flex box, positioning, responsiveness etc. and I use them regularly to style my React applications both at work and for personal projects. While I can use vanilla CSS for styling, I prefer to use component libraries with built in CSS props.",
  },
  {
    name: "mongodb",
    label: "MongoDB",
    icon: SiMongodb,
    categories: ["Database"],
    yearsExperience: "2 yrs",
    isProjectSkill: true,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "mysql",
    label: "MySQL",
    icon: GrMysql,
    categories: ["Database"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "",
  },

  {
    name: "kafka",
    label: "Kafka",
    icon: SiApachekafka,
    categories: ["Streams"],
    yearsExperience: "1 yr",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "gradle",
    label: "Gradle",
    icon: SiGradle,
    categories: ["Dev Tools"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "kubernetes",
    label: "Kubernetes",
    icon: SiKubernetes,
    categories: ["CI/CD", "Containerization"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "docker",
    label: "Docker",
    icon: SiDocker,
    categories: ["CI/CD", "Containerization"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "helm",
    label: "Helm",
    icon: SiHelm,
    categories: ["CI/CD", "Containerization"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "jenkins",
    label: "Jenkins",
    icon: SiJenkins,
    categories: ["CI/CD", "Dev Tools"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "chakraui",
    label: "Chakra UI",
    icon: SiChakraui,
    categories: ["Library", "Front End"],
    yearsExperience: "< 1 yr",
    isProjectSkill: true,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "bootstrap",
    label: "Bootstrap",
    icon: SiBootstrap,
    categories: ["Library", "Front End"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: true,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "figma",
    label: "Figma",
    icon: SiFigma,
    categories: ["Dev Tools", "Front End"],
    yearsExperience: "< 1 yr",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "json",
    label: "JSON",
    icon: SiJson,
    categories: ["API"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "postman",
    label: "Postman",
    icon: SiPostman,
    categories: ["Dev Tools", "API"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "swagger",
    label: "Swagger",
    icon: SiSwagger,
    categories: ["Dev Tools", "API"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "splunk",
    label: "Splunk",
    icon: SiSplunk,
    categories: ["Dev Tools"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "git",
    label: "Git",
    icon: SiGit,
    categories: ["Dev Tools", "Version Control"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "github",
    label: "GitHub",
    icon: SiGithub,
    categories: ["Dev Tools", "Version Control"],
    yearsExperience: "3 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "junit5",
    label: "JUnit 5",
    icon: SiJunit5,
    categories: ["Testing", "Library"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "mockito",
    label: "Mockito",
    icon: RiTestTubeFill,
    categories: ["Testing", "Library"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "jest",
    label: "Jest",
    icon: SiJest,
    categories: ["Testing", "Library"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "react-testing-library",
    label: "React Testing Library",
    icon: SiTestinglibrary,
    categories: ["Testing", "Library"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "agile",
    label: "Agile",
    icon: BsKanban,
    categories: ["Methodology"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "jira",
    label: "Jira",
    icon: SiJira,
    categories: ["Methodology", "Dev Tools"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "This is some sample text for a card to see what it looks like.  I want to describe my experience with each of these technologies so recruiters can clearly see how I use them.",
  },
  {
    name: "intellij",
    label: "IntelliJ",
    icon: SiIntellijidea,
    categories: ["IDE"],
    yearsExperience: "2 yrs",
    isProjectSkill: false,
    text: "I use IntelliJ very often. Mainly for back end development with Java.",
  },
  {
    name: "vscode",
    label: "VS Code",
    icon: SiVisualstudio,
    categories: ["IDE"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "I use Visual Studio Code very often. Mainly for front end development with React.",
  },
  {
    name: "eclipse",
    label: "Eclipse",
    icon: SiEclipseide,
    categories: ["IDE"],
    yearsExperience: "2.5 yrs",
    isProjectSkill: false,
    text: "Eclipse was the first ever true IDE I learned how to use.  I rarely use it nowdays opting in favor of IntelliJ instead.",
  },
];

// Filter skills into only those skills we want to label our projects with
// I am doing this because I won't be labeling projects with basic skills like IDE's, Testing libraries etc.
// I only want to show the most important technologies used for each project so it doesn't get cluttered and overwhelming
export const projectSkills = skills.filter((skill) => skill.isProjectSkill);

// Map our skills to an array with only the skill labels and add "All Skills"
// This is the array that will be used for filtering projects by Skill
export const projectSkillsLabels = [
  "All Skills",
  ...projectSkills.map((skill) => skill.label),
];

// This method takes an array of skill labels and maps them to the corresponding skill names
// This is useful for mapping Skill Labels to Skill Icons since the Skill Icon Map requires the skill name to lookup the Icon
export const mapLabelsToNames = (labels: string[]) => {
  const skillNames: string[] = [];

  labels.forEach((label) => {
    // Find the matching skill object for the given label
    const matchingObj = skills.find((skill) => skill.label === label);

    if (matchingObj) {
      skillNames.push(matchingObj.name);
    }
  });

  return skillNames;
};

export const skillCategories = [
  "All Skills",
  "Language",
  "Front End",
  "Database",
  "API",
  "Framework",
  "Library",
  "CI/CD",
  "Containerization",
  "Dev Tools",
  "Testing",
  "Streams",
  "Methodology",
  "Version Control",
  "IDE",
];

const useSkills = () => skills;

export default useSkills;
