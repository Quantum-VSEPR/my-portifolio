import ACSIS from "@/public/acsis-landing-page.png";
import chatGPTClone from "@/public/gpt-clone.png";
import digitalDazzle from "@/public/digitaldazzle.png";
import AYAInnovation from "@/public/aya-innovation-hero-page.png";

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
      "The African Healthcare System Impact Syndicate (ACSIS) enhances healthcare delivery through innovative digital solutions, improving accessibility and efficiency.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "MySQL", "PHP"],
    imageUrl: ACSIS,
    link: "https://acsisethiopi.web.app/",
  },
  {
    title: "ChatGPT Clone",
    description:
      "I cloned ChatGPT when it was extremely popular, allowing me to use my own version of this cutting-edge conversational AI even when it wasn't accessible in Africa.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Oauth"],
    imageUrl: chatGPTClone,
    link: "https://chat-gpt-clone-dev.vercel.app",
  },
  {
    title: "Digitaldazzle",
    description:
      "Discover DigitalDazel: Your ultimate online shopping destination. Browse diverse products with ease, secure payments, and hassle-free ordering. Shop now!",
    tags: [
      "React",
      "Next.js",
      "Mongodb",
      "Node",
      "Express",
      "Redux",
      "JWT",
      "Paypal",
      "Redux-toolkit",
      "Bootstrap",
      "react-toastify",
    ],
    imageUrl: digitalDazzle,
    link: "https://digitaldazzle.onrender.com",
  },
  {
    title: "AYA Inovation",
    description:
      "AYA Innovation makes mental health and wellness support accessible and affordable for everyone. They break down barriers to ensure all benefit from the latest advancements in mental health care. Their mission is to provide inclusive and comprehensive support.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    imageUrl: AYAInnovation,
    link: "https://aya-innovation.com",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "SCSS",
  "Material-UI",
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

// Testing
