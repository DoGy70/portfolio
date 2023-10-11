import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
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
];

export const skillsRating = [
  {
    id: 1,
    skill: "python",
    icon: <FaPython />,
    rating: 2,
    info: "Python is the first language that I started learning. Learning it has laid my fundamentals on programming. I have created one Tic-Tac-Toe console with it. Basic knowledge.",
  },
  {
    id: 2,
    skill: "react",
    icon: <FaReact />,
    rating: 3.5,
    info: "React is the latest technology that I started learning. It is used in nearly all of my projects. There is a lot of room for improvement. ",
  },
  {
    id: 3,
    skill: "html & css",
    icon: <FaCss3Alt />,
    rating: 3.5,
    info: "One can not create a website without knowing the fundamentals of CSS and HTML. Grasped the fundamentals but still have a lot of room for improvement.",
  },
];
