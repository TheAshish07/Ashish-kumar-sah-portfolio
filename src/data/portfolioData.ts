import { Shield, Terminal, Globe, Code2, Lightbulb, Users, Smartphone, Database } from "lucide-react";

export const personalInfo = {
  name: "Ashish Kumar Sah",
  title: "Computer Engineer",
  subtitle: "Full Stack Developer & Cybersecurity Enthusiast",
  summary:
    "Motivated Computer Engineering student and aspiring Software Developer with a strong foundation in Full Stack Development and Cybersecurity. Experienced in building scalable CRUD applications using React.js, Node.js, and PostgreSQL. Proven track record in identifying system vulnerabilities through a 7-month cybersecurity internship. Seeking to leverage technical expertise in Cloud Computing and VAPT to contribute to a dynamic engineering team.",
  email: "ashsah.cs.eng@gmail.com",
  phone: "+91 95258 25041",
  location: "Rajkot, Gujarat, India",
  website: "https://sahashish.com.np",
  github: "https://github.com/TheAshish07",
  linkedin: "https://www.linkedin.com/in/ashish-sah-413b82265/",
  resumeLink: "/resume.pdf",
};

export const skills = [
  {
    id: 1,
    name: "Full Stack Development",
    icon: Globe,
    description:
      "Building scalable CRUD applications with React.js, Node.js, Express.js, MongoDB, and REST APIs.",
  },
  {
    id: 2,
    name: "Cybersecurity & VAPT",
    icon: Shield,
    description:
      "Hands-on with OWASP Top 10, Vulnerability Assessment & Penetration Testing, Ethical Hacking, and Web App Security.",
  },
  {
    id: 3,
    name: "Languages",
    icon: Code2,
    description:
      "Proficient in JavaScript (ES6+), Java, Python, Dart, and SQL (PostgreSQL, MySQL).",
  },
  {
    id: 4,
    name: "Mobile & Cloud",
    icon: Smartphone,
    description:
      "Cross-platform mobile development with Flutter & Dart, and basic Cloud Computing concepts.",
  },
  {
    id: 5,
    name: "Linux & Tools",
    icon: Terminal,
    description:
      "Comfortable with Kali Linux, Linux CLI, Git, GitHub, and VS Code for daily development workflows.",
  },
  {
    id: 6,
    name: "Databases",
    icon: Database,
    description:
      "Designing schemas and optimizing queries in PostgreSQL, MySQL, and MongoDB for real-world apps.",
  },
  {
    id: 7,
    name: "Problem Solving",
    icon: Lightbulb,
    description:
      "Strong analytical thinking with experience in data structures, algorithms, and debugging complex systems.",
  },
  {
    id: 8,
    name: "Team Leadership",
    icon: Users,
    description:
      "Team leadership, strategic planning, and clear technical communication across cross-functional teams.",
  },
];

export const experience = [
  {
    id: 1,
    role: "Cybersecurity & Ethical Hacking Intern",
    company: "SkillPhantom Technologies",
    location: "Remote",
    duration: "Nov 2025 – May 2026",
    points: [
      "Gained hands-on experience in Linux security and web application security, focusing on the OWASP Top 10 vulnerabilities.",
      "Conducted Vulnerability Assessment and Penetration Testing (VAPT) through mentor-led training and practical projects.",
      "Documented security flaws and suggested remediation steps to improve overall system integrity.",
      "Developed defensive strategies and enhanced understanding of network security in a professional environment.",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "RK University, Rajkot, Gujarat",
    duration: "2022 - 2026",
    description: "Pursuing B.E. in Computer Engineering with focus on Full Stack Development and Cybersecurity. CGPA: 8.41/10.0",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Jan Jyoti High School, Chandrapur, Rautahat, Nepal",
    duration: "2019 - 2021",
    description: "Completed higher secondary education in the Science stream. GPA: 3.45/4.0",
  },
];

export const projects = [
  {
    id: 1,
    title: "LMS (Learning Management System)",
    description:
      "Engineered a comprehensive MERN-stack platform for course management and student tracking. Implemented a flexible NoSQL schema in MongoDB and an intuitive instructor dashboard for uploading materials and monitoring student performance.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/TheAshish07?tab=repositories",
    liveLink: null,
  },
  {
    id: 2,
    title: "Web-based Vulnerability Scanner",
    description:
      "Developed a tool to automate detection of security issues like SQL Injection and XSS using a Python backend. Utilized Batch scripting for automated environment configuration and efficient scanning execution.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "Batch Scripting"],
    githubLink: "https://github.com/TheAshish07/Web-based-Vulnerability-Scanner.git",
    liveLink: null,
  },
  {
    id: 3,
    title: "Hostel Management System",
    description:
      "Built a full-stack CRUD application to automate room allocations and records for over 500 residents. Improved user engagement by 25% through a responsive UI and optimized PostgreSQL database queries.",
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/TheAshish07/Hostel-Management-System.git",
    liveLink: null,
  },
  {
    id: 4,
    title: "SOC Monitoring - Incident Response System",
    description:
      "Developed a basic system to monitor security events, detect incidents, and log alerts to support incident response workflows.",
    technologies: ["Security", "Monitoring", "Incident Response"],
    githubLink: "https://github.com/TheAshish07/SOC-Monitoring---Incident-Response-System.git",
    liveLink: null,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Practical Cyber Security for Cyber Security Practitioners (Score: 95%)",
    organization: "NPTEL",
    year: "2025",
    credentialLink:
      "https://www.linkedin.com/posts/ashish-sah-413b82265_cybersecurity-activity-7398633283707805697-Bsuq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 2,
    title: "Ethical Hacking Program",
    organization: "Cyber Protectors",
    year: "2025",
    credentialLink:
      "https://www.linkedin.com/posts/ashish-sah-413b82265_ethical-hacking-certificate-activity-7406693557803294720-cw2F/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 3,
    title: "Workshop on Bug Bounty and Cyber Crime Investigation",
    organization: "Indian Cyber Club Technologies",
    year: "2024",
    credentialLink:
      "https://www.linkedin.com/posts/ashish-sah-413b82265_cybersecurity-bugbounty-ethicalhacking-activity-7292162247429091328-UaMw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 4,
    title: "Participation in Smart Minds Marathon",
    organization: "Smart India Hackathon 2024",
    year: "2024",
    credentialLink:
      "https://www.linkedin.com/posts/ashish-sah-413b82265_hackathon-sih2024-smartindiahackathon2024-activity-7243155322196905984-KW1b/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEiq88BoGTLWHpgQTzpQyxF3IlJXkkbpl4",
  },
  {
    id: 5,
    title: "Diploma in Computer Application (DCA)",
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
