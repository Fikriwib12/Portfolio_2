import digihouse from "../assets/digihouse.webp";
import webihouse from "../assets/webihouse.webp";
import navaLanding from "../assets/navaLanding.webp";
import navaBooking from "../assets/navaBooking.webp";
import thi from "../assets/thi.webp";
import mdi from "../assets/mdi.webp";
import mkd from "../assets/MKD.png";
import balianFloor from "../assets/balianFlor.png";
import barakuda from "../assets/barakuda.png";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiPhpLine,
  RiWordpressFill,
  RiGitMergeFill,
} from "@remixicon/react";
import { RiCodeSSlashLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Fikri Wibowo",
  role: "Web Developer",
  subheading:
    "Experienced web developer with 1 year of expertise, adept at creating dynamic front-end and back-end solutions using modern tools.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Barakuda Marine",
    description: ".",
    techStack: ["Wordpress", "Elementor"],
    imgSrc: barakuda,
    link: "https://barakudamarine.id/",
  },
  {
    id: 2,
    title: "Balian Flooring",
    description: ".",
    techStack: ["Wordpress", "Elementor"],
    imgSrc: balianFloor,
    link: "https://balianflooring.id/",
  },
  {
    id: 3,
    title: "MegaKapuas Dinamik",
    description: ".",
    techStack: ["Wordpress", "Elementor"],
    imgSrc: mkd,
    link: "https://megakapuas.com/",
  },
  {
    id: 4,
    title: "Nava Booking Web",
    description: "Website for booking apartment facilities in mobile view.",
    techStack: ["Wix", "Wix Velo"],
    imgSrc: navaBooking,
    link: "https://app.navaapp.id/",
  },
  {
    id: 5,
    title: "Nava Landing Page",
    description: "Landing page for apartment facility booking advertisement.",
    techStack: ["Wix", "Wix Velo"],
    imgSrc: navaLanding,
    link: "https://www.navaapp.id/",
  },
  {
    id: 6,
    title: "Digihouse Warehouse Management System",
    description:
      "DigiHouse is a comprehensive web application designed for a warehouse rental system. It features a sleek landing page and an intuitive admin dashboard.  ensuring a responsive and dynamic user experience. DigiHouse streamlines the management of warehouse rentals, providing users and administrators with efficient tools to handle operations seamlessly.",
    techStack: ["React", "Tailwind Css", "axios", "Golang", "Mysql"],
    imgSrc: digihouse,
    link: "https://digihouse-jaya.netlify.app/",
  },
  {
    id: 7,
    title: "Webihouse Real Estate Advertisment Platform",
    description:
      "WebiHouse is a real estate platform for buying, selling, and renting houses, built with ReactJS and MockAPI. Developed as part of the Kampus Merdeka independent study program with Alterra, it offers a modern, user-friendly interface.",
    techStack: ["React", "MockApi", "Tailwind Css"],
    imgSrc: webihouse,
    link: "https://webihouse-2.vercel.app/",
  },
  {
    id: 8,
    title: "Taharica Instruments",
    description:
      "Taharica Instruments is an e-commerce website for selling instrument products. I developed a custom WordPress theme from scratch using HTML, CSS, JS, and PHP during my internship as a front-end developer at PT Taharica Group.",
    techStack: ["Html", "Css", "Js", "Php", "Wordpress"],
    imgSrc: thi,
    link: "https://taharicainstruments.com/",
  },
  {
    id: 9,
    title: "Metal Detector Indonesia",
    description:
      "Metal Detector Indonesia is an e-commerce website for selling metal detector products. I built a custom WordPress theme from scratch using HTML, CSS, JS, and PHP during my internship as a front-end developer at PT Taharica Group.",
    techStack: ["Html", "Css", "Js", "Php", "Wordpress"],
    imgSrc: mdi,
    link: "https://www.metaldetectorindonesia.com/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Php",
    icon: <RiPhpLine className="text-purple-400" />,
  },
  {
    name: "Wordpress",
    icon: <RiWordpressFill className="text-indigo-400" />,
  },
  {
    name: "Laravel",
    icon: <RiGitMergeFill className="text-red-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Jan 2025 - Present",
    role: "Website Developer",
    company: "PT MegaKapuas Dinamik",
    description:
      "I developedand managing Wordpress websites, creating custom landing pages and product catalogs, and Build custom dashboards using Next.js for lead data storage and marketing analytics",
    techStack: ["Javascript", "Php", "Wordpress", "Mysql"],
  },
  {
    yearRange: "Nov 2024 - Jan 2025",
    role: "Wix Developer",
    company: "PT Snillo",
    description:
      "I developed a landing page and booking website for apartment facilty reservation using Wix , and •	Enhaced user experience throught responsive and intuitive design",
    techStack: ["Javascript", "Php", "Wordpress", "Mysql"],
  },
  {
    yearRange: "July 2024 - Nov 2024",
    role: "Frontend Developer Intern",
    company: "PT Taharica Group.",
    description:
      " I developed custom WordPress themes from scratch using HTML, CSS, JS, PHP, and WordPress. I also contributed to enhancing website SEO, ensuring improved search engine visibility and performance. This role allowed me to strengthen my skills in web development and deliver optimized, user-friendly websites.",
    techStack: ["Javascript", "Php", "Wordpress", "Mysql"],
  },
  {
    yearRange: "Agust 2023 - Dec 2023",
    role: "Frontend Developer Mentee",
    company: "Alterra Academy",
    description:
      "I participated in a 6-month independent study program at Kampus Merdeka as a Front-End Developer specializing in ReactJS. During the training, I learned the fundamentals of front-end development, including HTML, CSS, JS, and ReactJS. As part of the capstone project, I developed an admin dashboard for a warehouse rental website, applying my skills to create a dynamic and functional web application.",
    techStack: ["HTML", "CSS", "Tailwind Css", "ReactJs"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Systems",
    institution: "Universitas Bina Sarana Informatika",
    duration: "2021 - Present",
    description:
      "I am a final-year student pursuing a Bachelor's degree in Information Systems. Throughout my studies, I have gained knowledge in programming fundamentals, data structures, data analysis, and machine learning.",
  },
  {
    id: 2,
    degree: "Certified Frontend React Developer",
    institution: "Alterra Academy",
    duration: "2023",
    description:
      "I completed a 6-month independent study program at Kampus Merdeka, specializing in ReactJS as a Front-End Developer. During the program, I built a strong foundation in front-end development and created an admin dashboard for a warehouse rental website as a capstone project.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
