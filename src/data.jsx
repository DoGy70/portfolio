import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaReact, FaPython, FaCss3Alt } from "react-icons/fa";

export const navButtons = [
  { id: 1, section: "about", url: "#about" },
  { id: 2, section: "skills", url: "#skills" },
  { id: 3, section: "projects", url: "#projects" },
  { id: 4, section: "certificates", url: "#certificates" },
  { id: 5, section: "socials", url: "#links" },
];

export const socialLinks = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/KappaLords/",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    name: "instagram",
    url: "https://www.instagram.com/p._miroslav/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    name: "linkedin",
    url: "https://www.linkedin.com/",
    icon: <BsLinkedin />,
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/DoGy70",
    icon: <BsGithub />,
  },
];

export const skillsRating = [
  {
    id: 1,
    skill: "python",
    icon: <FaPython />,
    rating: 3,
    info: "Python is the first language that I started learning. Learning it has laid my foundations on programming. Basic knowledge.",
  },
  {
    id: 2,
    skill: "react",
    icon: <FaReact />,
    rating: 4.5,
    info: "React is the latest technology that I started learning. It is used in nearly all of my projects.",
  },
  {
    id: 3,
    skill: "html & css",
    icon: <FaCss3Alt />,
    rating: 4.5,
    info: "One can not create a website without knowing the fundamentals of CSS and HTML. I have grasped the fundamentals.",
  },
];
