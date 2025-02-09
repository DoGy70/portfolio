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
    url: "https://www.linkedin.com/in/miroslav-pomanov-222924295/",
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
    rating: 4.5,
    info: "Python is the first language that I started learning. Learning it has laid my foundations on programming. Basic knowledge.",
  },
  {
    id: 2,
    skill: "react",
    icon: <FaReact />,
    rating: 5,
    info: "React is the latest technology that I started learning. It is used in nearly all of my projects.",
  },
  {
    id: 3,
    skill: "html & css",
    icon: <FaCss3Alt />,
    rating: 5,
    info: "One can not create a website without knowing the fundamentals of CSS and HTML. I have grasped the fundamentals.",
  },
];

export const aboutMe =
  "Welcome to my website! My name is Miroslav. I am 21 years old, currently living in Sofia, Bulgaria, studying Computer and Software Engineering at Technical University - Sofia, third year.\nLearning is a key aspect of our everyday life. It involves taking into account every little detail and constantly seeking improvement. That's why I can proudly say that I love to learn and would gladly accept every challenge that helps me become the best version of myself.\nCommunication has always been something I am really keen on. Whenever I work in a team, I always try to find different solutions to strengthen our communication because good communication results in a job well done. Moreover, good communication can contribute to forming new connections.\nPersistence has always played a significant role in my life. Whether it is in university, middle school, or my everyday life, I always strive to finish whatever I undertake. Being persistent has helped me develop the confidence that nothing is impossible as long as you have the time and determination to complete it.";
