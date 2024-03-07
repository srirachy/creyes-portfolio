import {
  stack,
  software,
  product,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  wp,
  dotnet,
  py,
  html,
  css,
  php,
  bootstrap,
  java,
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
  // sandbox,
  sweet,
  willoz,
  threejs,
  // sarah,
  juan,
  dustin,
  donnie,
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
  {
    id: "resume",
    title: "Resume",
    file: process.env.PUBLIC_URL + "/Reyes_Casey_Resume_Digital.pdf",
    filename: "Reyes_Casey_Resume_Digital.pdf"
  }
];

const services = [
  {
    title: "Full-Stack Engineer",
    icon: stack,
  },
  {
    title: "Front-End Developer",
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
    name: "wordpress",
    icon: wp,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },
  {
    name: "python",
    icon: py,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
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
    title: "Software Developer",
    company_name: "BitWise Industries",
    icon: bitwise,
    iconBg: "#756860",
    date: "March 2022 - June 2023",
    description: "Focused on optimizing web application interfaces and performance",
    points: [
      "Enhanced web app UX/UI, improving performance by 40% and customer satisfaction by 25%",
      "Developed 20+ reusable React components, increasing development and efficiency by 30%",
      "Implemented Agile practices, reducing project delivery times by 15%",
      "Integrated APIs into web apps for improved functionality and data management",
      "Leveraged CSS frameworks like Tailwind and Bootstrap for consistent UI development",
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Cadence Design Systems",
    icon: cadence,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Nov 2020",
    description: "Designed, developed, and tested automation scripts for internal and customer use",
    points: [
      "Automated manual workflows, boosting process efficiency by 300% and reducing turnaround times",
      "Led the transition of VBScript codebase to Python, enhancing application maintainability",
      "Worked closely with clients to deliver tailored software solutions",
    ],
  },
  {
    title: "Senior Software Technician",
    company_name: "National Instruments",
    icon: ni,
    iconBg: "#756860",
    date: "June 2016 - Jan 2020",
    description: "Responsible for updating, developing, and testing scripts for internal tasks",
    points: [
      "Redesigned custom software service for a key customer, enhancing service delivery",
      "Automated client tasks, improving productivity",
      "Trained internal team in Python, boosting development capabilities",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "Casey is awesome! Lorem ipsum tho." +
  //     "Casey is awesome! Lorem ipsum tho." +
  //     "Casey is awesome! Lorem ipsum tho." +
  //     "Casey is awesome! Lorem ipsum tho." +
  //     "Casey is awesome!",
  //   name: "Sarah Cullen",
  //   designation: "Senior Instructor & Program Lead",
  //   company: "BitWise Industries",
  //   image: sarah,
  // },
  {
    testimonial:
      "I had the pleasure of working with Casey. He excels at taking on new projects, fearlessly tackling complex concepts. " +
      "He will undoubtedly be a valuable asset to any company he joins.",
    name: "Juan Lucero",
    designation: "React-Native Apprentice Lead",
    company: "BitWise Industries",
    image: juan,
  },
  {
    testimonial:
      "Not only is Casey fun to work with, he also continuously impressed me with his creative problem-solving abilities. " +
      "He is a quick learner, creative thinker, and a fantastic coder in any language.",
    name: "Dustin Hoekstra",
    designation: "Application Engineer Architect",
    company: "Cadence Design Systems",
    image: dustin,
  },
  {
    testimonial:
      "Casey is an amazing person to work with. With his quick learning ability, helpful nature, and eagerness to explore " +
      "new technologies, Casey proves to be an exceptional developer.",
    name: "Donnie Gil",
    designation: "React Apprentice",
    company: "BitWise Industries",
    image: donnie,
  }
];

const projects = [
  {
    name: "Blog Full-Stack Web App",
    description:
      "Write about your life, your interests, or anything that comes to mind.",
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
    source_code_link: "https://github.com/Wosen100/fullstack-react-blog-app",
    deploy_code_link: "",
  },
  {
    name: "Brew Maps",
    description: "Find the closest breweries near you! Or anywhere!",
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
    source_code_link: "https://github.com/javiguerra777/brewery-locator",
    deploy_code_link: "https://srirachy.github.io/brewery_locator/",
  },
  {
    name: "Countdown App",
    description:
      "A simple way to track an upcoming date that you're excited about.",
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
    source_code_link: "https://github.com/srirachy/countdown_app",
    deploy_code_link: "",
  },
  {
    name: "Hi-Lo Guessing Game",
    description:
      "A number guessing game in the form of playing cards with two modes of play!",
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
    source_code_link: "https://github.com/srirachy/highlow_v2",
    deploy_code_link: "https://srirachy.github.io/highlow_v2/",
  },
  {
    name: "Spotify w/ Visualizer",
    description:
      "Ever wish Spotify still had a music visualizer? This project brings that concept back to life!",
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
    source_code_link: "https://github.com/srirachy/capstone_music_player",
    deploy_code_link: "",
  },
  {
    name: "Neon Weather",
    description: "Basically a weather tracker, but with neon lights!",
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
    source_code_link: "https://github.com/srirachy/neonweather",
    deploy_code_link: "https://srirachy.github.io/neonweather/",
  },
  {
    name: "SPACe - Shiny Pokémon Adoption Center",
    description:
      "Adopt your favorite Pokémon in their shiny sprites from Kanto to Galar.",
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
    source_code_link: "https://github.com/srirachy/pokemon_adoption",
    deploy_code_link: "https://srirachy.github.io/pokemon_adoption/",
  },
  // {
  //   name: "Music Event Web App",
  //   description:
  //     "Don't miss live stream performances from these artists. View details of every artist, food truck, and shops to support the local talent.",
  //   tags: [
  //     {
  //       name: "php",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "wordpress",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: sandbox,
  //   source_code_link: "",
  //   deploy_code_link: "",
  // },
  {
    name: "Foundations - Suit Drive",
    description:
      "Have any clothes you don't need anymore? Donate any extra clothing for a good cause here!",
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
    source_code_link: "",
    deploy_code_link: "https://foundation4fusd.org/event/suit-drive/",
  },
  {
    name: "Willoz",
    description:
      "Shop homes. Leave an enquiry for houses you're interested in. Your new home awaits you!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "customapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: willoz,
    source_code_link: "https://github.com/srirachy/willoz-frontend",
    deploy_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
