import { Code2, Database, Globe, Shield, Lightbulb } from "lucide-react";

export const personalInfo = {
  name: "Ashish Kumar Sah",
  title: "Computer Engineer",
  subtitle: "Web Developer & Problem Solver",
  summary: "Passionate Computer Engineering graduate with a strong foundation in software development, web technologies, and problem-solving. Eager to contribute to innovative projects and grow as a full-stack developer.",
  email: "ashish.sah@email.com",
  github: "https://github.com/ashishkumarsah",
  linkedin: "https://linkedin.com/in/ashishkumarsah",
  resumeLink: "/resume.pdf",
};

export const skills = [
  {
    id: 1,
    name: "Web Development",
    icon: Globe,
    description: "Building responsive, accessible websites using HTML, CSS, JavaScript, and modern frameworks.",
  },
  {
    id: 2,
    name: "React.js",
    icon: Code2,
    description: "Creating dynamic user interfaces with React, hooks, state management, and component architecture.",
  },
  {
    id: 3,
    name: "Backend & Database",
    icon: Database,
    description: "Working with Node.js, Express, MongoDB, and SQL databases for full-stack applications.",
  },
  {
    id: 4,
    name: "Cybersecurity",
    icon: Shield,
    description: "Understanding security fundamentals, secure coding practices, and vulnerability assessment.",
  },
  {
    id: 5,
    name: "Problem Solving",
    icon: Lightbulb,
    description: "Strong analytical skills with experience in data structures, algorithms, and competitive programming.",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Technology",
    duration: "2020 - 2024",
    description: "Specialized in software development and computer networks. Completed capstone project on real-time collaboration tools. GPA: 3.8/4.0",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Springfield Science Academy",
    duration: "2018 - 2020",
    description: "Science stream with focus on Mathematics, Physics, and Computer Science. Scored 95% in board examinations.",
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
