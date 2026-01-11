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
    title: "Web Application Security Scanner",
    description: "Developed backend API with Python/Flask and frontend dashboard with HTML/CSS/JS. Implemented security scanning algorithms for XSS, SQLi, CSRF detection with real-time vulnerability assessment.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "BeautifulSoup4"],
    githubLink: "https://github.com/TheAshish07/Web-based-Vulnerability-Scanner.git",
    liveLink: null,
  },
  {
    id: 2,
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
    title: "Ethical Hacking Program",
    organization: "Cyber Protectors",
    year: "2025",
    credentialLink: "https://www.linkedin.com/posts/ashish-sah-413b82265_ethical-hacking-certificate-activity-7406693557803294720-cw2F/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 2,
    title: "Practical Cyber Security for Cyber Security Practitioners (95%)",
    organization: "NPTEL",
    year: "2025",
    credentialLink: "https://www.linkedin.com/posts/ashish-sah-413b82265_cybersecurity-activity-7398633283707805697-Bsuq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 3,
    title: "Participation in Smart Minds Marathon",
    organization: "Smart India Hackathon 2024",
    year: "2024",
    credentialLink: "https://www.linkedin.com/posts/ashish-sah-413b82265_hackathon-sih2024-smartindiahackathon2024-activity-7243155322196905984-KW1b/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 4,
    title: "Workshop on Bug Bounty and Cyber Crime Investigation",
    organization: "Indian Cyber Club Technologies",
    year: "2024",
    credentialLink: "https://www.linkedin.com/posts/ashish-sah-413b82265_cybersecurity-bugbounty-ethicalhacking-activity-7292162247429091328-UaMw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 5,
    title: "Diploma in Computer Application",
    organization: "ITech Univ",
    year: "2020",
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
