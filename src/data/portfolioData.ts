import { Shield, Terminal, Globe, Code2, Lightbulb, Users } from "lucide-react";

export const personalInfo = {
  name: "Ashish Kumar Sah",
  title: "Computer Engineer",
  subtitle: "Cybersecurity Enthusiast & Web Developer",
  summary: "Final year Computer Engineering student with a passion for cybersecurity and web development. Eager to apply my skills in building secure, responsive web applications while exploring vulnerabilities and ethical hacking. Looking for opportunities to kickstart my career as a fresher in the tech industry.",
  email: "ashsah.cs.eng@gmail.com",
  github: "https://github.com/TheAshish07",
  linkedin: "https://www.linkedin.com/in/ashish-sah-413b82265/",
  resumeLink: "/resume.pdf",
};

export const skills = [
  {
    id: 1,
    name: "Cybersecurity",
    icon: Shield,
    description: "Understanding security fundamentals, ethical hacking, vulnerability assessment, and secure coding practices.",
  },
  {
    id: 2,
    name: "Linux",
    icon: Terminal,
    description: "Proficient in Linux command line, shell scripting, system administration, and server management.",
  },
  {
    id: 3,
    name: "Web Development",
    icon: Globe,
    description: "Building responsive, accessible websites using HTML, CSS, JavaScript, React, and modern frameworks.",
  },
  {
    id: 4,
    name: "Python",
    icon: Code2,
    description: "Developing scripts, automation tools, and applications using Python for various use cases.",
  },
  {
    id: 5,
    name: "Problem Solving",
    icon: Lightbulb,
    description: "Strong analytical skills with experience in data structures, algorithms, and logical thinking.",
  },
  {
    id: 6,
    name: "Team Management",
    icon: Users,
    description: "Effective collaboration, leadership, communication, and coordinating team efforts to achieve goals.",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "RK University, Rajkot, Gujarat, India",
    duration: "2021 - 2025",
    description: "Specializing in software development, cybersecurity, and web technologies. CGPA: 8.33/10",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Jan Jyoti High School, Chandrapur, Rautahat, Nepal",
    duration: "2018 - 2020",
    description: "Science stream with focus on Mathematics, Physics, and Computer Science. GPA: 3.45/4.0",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/alexjohnson/ecommerce",
    liveLink: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/alexjohnson/taskmanager",
    liveLink: "https://taskmanager-demo.vercel.app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application displaying real-time weather data with interactive charts and location-based forecasts.",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    githubLink: "https://github.com/alexjohnson/weather-dashboard",
    liveLink: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio showcasing projects, skills, and professional experience with smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/alexjohnson/portfolio",
    liveLink: "https://alexjohnson.dev",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    organization: "Meta (Coursera)",
    year: "2024",
    credentialLink: "https://coursera.org/verify/certificate123",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2023",
    credentialLink: "https://aws.amazon.com/verify/cert456",
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    year: "2023",
    credentialLink: "https://freecodecamp.org/certification/alexjohnson",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    organization: "IBM",
    year: "2023",
    credentialLink: null,
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
