import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  eurisko,
  tripguide,
  threejs,
  codi,
  wizzo,
  qabas,
  portfolio,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Eurisko mobility",
    icon: eurisko,
    iconBg: "#4E00F2",
    date: "May 2021 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN stack trainee",
    company_name: "Codi tech",
    icon: codi,
    iconBg: "#fff",
    date: "Aug 2020 - May 2021",
    points: [
      "Collaborated with other junior developers to achive a 9 months full-stack curriculum"
    ],
  },
];

const projects = [
  {
    name: "Al-Qabas Masterclass",
    description:
      `section in Al-qabas journal, Web-based e-learning platform where users can enroll in online courses.
      
      `,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: qabas,
  },
  {
    name: "Wizzo Games",
    description:
      "Web application and streaming platform for gamers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: wizzo,
  },
  {
    name: "This Portfolio",
    description: "Built with animation transition and 3d models solely to flex on my firends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/itzRoy/portfolio",
  },
];

export { services, technologies, experiences, projects };
