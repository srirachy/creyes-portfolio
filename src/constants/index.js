import {
  stack,
  software,
  product,
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
  figma,
  php,
  wp,
  bootstrap,
  dotnet,
  java,
  py,
  swift,
  angular,
  bitwise,
  cadence,
  ni,
  blog,
  brew,
  countdown,
  hilo,
  musicplayer,
  neon,
  pkmn,
  sandbox,
  sweet,
  // visualizer,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Engineer",
    icon: stack,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Product Engineer",
    icon: product,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "wordpress",
    icon: wp,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: py,
  },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "angular",
    icon: angular,
  }
];

const experiences = [
  {
    title: "React Developer Apprentice",
    company_name: "BitWise Industries",
    icon: bitwise,
    iconBg: "#756860",
    date: "March 2022 - Present",
    points: [
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Cadence",
    icon: cadence,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Nov 2020",
    points: [
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
    ],
  },
  {
    title: "Senior Software Technician",
    company_name: "National Instruments",
    icon: ni,
    iconBg: "#756860",
    date: "June 2016 - Jan 2020",
    points: [
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
      "Lorem ipsum.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Casey is awesome! Lorem ipsum tho.",
    name: "Sarah Cullen",
    designation: "Senior Instructor & Program Lead",
    company: "BitWise Industries",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Casey is awesome! Lorem ipsum tho.",
    name: "Juan Lucero",
    designation: "React-Native Apprentice Lead",
    company: "BitWise Industries",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Casey is awesome! Lorem ipsum tho.",
    name: "Dustin Hoekstra",
    designation: "Application Engineer Architect",
    company: "Cadence Design Systems",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Full-Stack Web App",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "crudapi",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/",
  },
  {
    name: "Brew Maps",
    description:
    "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "brewery api",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: brew,
    source_code_link: "https://github.com/",
  },
  {
    name: "Countdown App",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: countdown,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hi-Lo Guessing Game",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: hilo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Clone w/ Visualizer",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: musicplayer,
    source_code_link: "https://github.com/",
  },
  {
    name: "Neon Weather",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "weather api",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: neon,
    source_code_link: "https://github.com/",
  },
  {
    name: "SPACe - Shiny Pokemon Adoption Center",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pokemon api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pkmn,
    source_code_link: "https://github.com/",
  },
  {
    name: "Music Event Web Application",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sandbox,
    source_code_link: "https://github.com/",
  },
  {
    name: "Foundations - Suit Drive",
    description:
      "This project is awesome! Lorem ipsum tho.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sweet,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
