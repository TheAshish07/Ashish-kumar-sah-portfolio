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
    duration: "2022 - 2026 (Ongoing)",
    description: "Currently pursuing B.Tech in Computer Engineering with focus on cybersecurity and web development. CGPA: 8.33/10",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Jan Jyoti High School, Chandrapur, Rautahat, Nepal",
    duration: "2019 - 2021",
    description: "Completed higher secondary education with focus on Science stream. GPA: 3.45/4.0",
  },
];

export const projects = [
  {
    id: 1,
    title: "SOC Monitoring - Incident Response System",
    description: "Developed a basic system to monitor security events, detect incidents, and log alerts to support incident response workflows.",
    technologies: ["Security", "Monitoring", "Incident Response"],
    githubLink: "https://github.com/TheAshish07/SOC-Monitoring---Incident-Response-System.git",
    liveLink: null,
  },
  {
    id: 2,
    title: "Hostel Management System",
    description: "Designed and implemented a Hostel Management System to automate hostel operations such as student management and room assignments.",
    technologies: ["Java", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/TheAshish07/Hostel-Management-System.git",
    liveLink: null,
  },
  {
    id: 3,
    title: "Study Abroad Website",
    description: "Designed and implemented a Study Abroad platform to help students explore overseas universities and connect with institutions.",
    technologies: ["PHP", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/TheAshish07/RAD-project.git",
    liveLink: null,
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
