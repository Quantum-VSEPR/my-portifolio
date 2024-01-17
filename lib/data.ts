import ACSIS from "@/public/acsis-landing-page.png";
import chatGPTClone from "@/public/gpt-clone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   // {
//   //   title: "Graduated bootcamp",
//   //   location: "Miami, FL",
//   //   description:
//   //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//   //   icon: React.createElement(LuGraduationCap),
//   //   date: "2019",
//   // },
//   // {
//   //   title: "Front-End Developer",
//   //   location: "Orlando, FL",
//   //   description:
//   //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//   //   icon: React.createElement(CgWorkAlt),
//   //   date: "2019 - 2021",
//   // },
//   // {
//   //   title: "Full-Stack Developer",
//   //   location: "Houston, TX",
//   //   description:
//   //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//   //   icon: React.createElement(FaReact),
//   //   date: "2021 - present",
//   // },
// ] as const;

export const projectsData = [
  {
    title: "ACSIS",
    description:
      "I worked as a full-stack developer on this startup project for half years.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "MySQL", "PHP"],
    imageUrl: ACSIS,
    links: "https://acsisethiopi.web.app/",
  },
  {
    title: "ChatGPT Clone",
    description:
      "I cloned ChatGPT during its peak popularity as it was a hot issue, diving into groundbreaking conversational AI technology.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Oauth"],
    imageUrl: chatGPTClone,
    links: "#",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "Material-UI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git and GitHub",
  "Tailwind",
  "Prisma",
  "SQL",
  "MySQL",
  "MongoDB",
  "Redux or RTK",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Webflow",
] as const;
