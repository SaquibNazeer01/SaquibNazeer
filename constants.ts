
import { Project, Skill, Experience, SocialLink, Education } from './types';
import { Linkedin, Github, Code, Terminal, Database } from 'lucide-react';
import { LeetCodeIcon, HackerRankIcon, YouTubeIcon } from './components/UI/Icons';

export const DEV_NAME = "Saquib Nazeer";
export const DEV_TITLE = "Full Stack Developer | AI Enthusiast";
export const DEV_BIO = "Building the digital future with scalable web architectures and immersive user experiences. Transforming complex problems into elegant, high-performance solutions.";

export const DATA_VERSION = '2025-12-13-2';

export const ABOUT_BIO = `
I am a passionate Full Stack Developer with a deep-rooted love for Artificial Intelligence and system architecture. My journey began with a curiosity about how software shapes the world, leading me to master modern web technologies and cloud infrastructures.

I specialize in building high-performance applications that are not only functional but also visually stunning. My philosophy is simple: code should be clean, scalable, and impactful. Whether it's optimizing database queries for a fintech dashboard or fine-tuning the animations on a landing page, I approach every task with precision and creativity.

I enjoy owning products end-to-end—from requirements and UI/UX, to backend design, database modeling, and deployment. I’m comfortable working across the stack with React/Next.js and modern TypeScript, designing robust APIs, and integrating third-party services in a secure and maintainable way. I care deeply about fundamentals like accessibility, performance budgets, and resilient error handling, because great experiences are built on reliable engineering.

On teams, I value clear communication, thoughtful trade-offs, and a strong review culture. I write readable code, document decisions, and prefer pragmatic patterns that scale with the project. I’m also mindful of production readiness—logging, monitoring, and iterative improvements based on real user feedback.

Beyond the code, I am an avid learner, constantly exploring new frontiers in AI, machine learning, and decentralized web technologies. I believe the future belongs to those who can build it, and I am here to engineer that future.
`;

export const EDUCATION: Education[] = [
  {
    degree: "Bachelors in Computer Science and Engineering",
    institution: "M.Kumarasamy College of Engineering  |  Anna University",
    year: "2013 - 2027",
    description: "Currently Persuing my under-graduate degree in Computer Science and Engineering. Focused on Algorithms, Data Structures, Software Engineering, App Development, Operating Systems and Database Management Systems."
  },
  {
    degree: "Blockchain Certification",
    institution: "IIT Kharagpur",
    year: "2024",
    description: "Specialized training in blockchain technology, covering cryptographic principles, consensus mechanisms, smart contracts, and real-world applications."
  },
  {
    degree: "Responsible and Safe AI Systems - ELITE Certification",
    institution: "IIIT Hyderabad",
    year: "2025",
    description: "Specialized training in developing safe, transparent, fair, and accountable AI systems aligned with ethical and regulatory standards."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saquib-nazeer-2b3043326?trk=contact-info', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/SaquibNazeer01', icon: Github },
  { name: 'YouTube', url: 'https://www.youtube.com/@Bhat_Saakib019', icon: YouTubeIcon },
  { name: 'LeetCode', url: 'https://leetcode.com/bhat_saakib019', icon: LeetCodeIcon },
  { name: 'HackerRank', url: 'https://hackerrank.com/DOMAINASTRILL', icon: HackerRankIcon },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Web Development Internship',
    company: 'ElySpace',
    period: 'July 2025',
    description: 'Professional experience in designing and developing responsive web applications, with a focus on performance, usability, and modern development practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'MySQL']
  },
  {
    id: '2',
    role: 'PHP and MySQL Internship',
    company: 'ApexPlanet Software Ltd.',
    period: 'September 2025',
    description: 'Worked on end-to-end web application features, integrating PHP logic with MySQL databases while ensuring scalability, security, and best coding practices.',
    skills: ['PHP', 'MySQL', 'SQL', 'DBMS', 'HTML', 'CSS', 'Javascript']
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'JavaScript (ES6+)', level: 85, category: 'Languages' },
  { name: 'TypeScript', level: 65, category: 'Languages' },
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Languages' },
  { name: 'C#', level: 90, category: 'Languages' },
  { name: 'C', level: 95, category: 'Languages' },

  // Web Development
  { name: 'React / Next.js', level: 75, category: 'Web Development' },
  { name: 'Node.js', level: 80, category: 'Web Development' },
  { name: 'Tailwind CSS', level: 90, category: 'Web Development' },
  { name: 'HTML5', level: 90, category: 'Web Development' },


  // Database
  { name: 'PostgreSQL', level: 70, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'MySQL', level: 90, category: 'Database' },

  // DevOps & Tools
  { name: 'Docker', level: 75, category: 'DevOps & Tools' },
  { name: 'Jupyter Notebook', level: 90, category: 'DevOps & Tools' },
  { name: 'Git / GitHub', level: 95, category: 'DevOps & Tools' },
  { name: 'VS Code', level: 95, category: 'DevOps & Tools' },
  { name: 'Eclipse', level: 85, category: 'DevOps & Tools' },
  { name: 'WEKA', level: 75, category: 'DevOps & Tools' },
  
  // AI
  { name: 'TensorFlow', level: 75, category: 'AI & ML' },
  { name: 'Gemini API', level: 90, category: 'AI & ML' },
  { name: 'SERP API', level: 90, category: 'AI & ML' },
  { name: 'Groq API', level: 90, category: 'AI & ML' },
  { name: 'OpenAI API', level: 88, category: 'AI & ML' }
];

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'EconoMind - AI Powered Expenses Tracker & Personal Shopping Assistant',
    description: 'COMING SOON: An XAI-powered assistant that tracks expenses, learns your spending patterns, and helps you shop smarter. It compares product prices and reviews across multiple platforms to recommend the best value, while also explaining “why” with clear, transparent insights. Under active development — teaser video below.',
    technologies: ['React', 'Node', 'Python', 'CSS', 'AI Integration', 'TensorFlow'],
    imageUrl: '/images/economind.jpg',
    videoUrl: '/videos/xai-expenses-teaser.mp4',
    link: '#',
    featured: true,
    comingSoon: true,
    category: 'AI'
  },
  {
    id: '1',
    title: 'Face Recognition Attendance system',
    description: 'Developed a facial recognition-based attendance system that accurately records student attendance using their facial features.',
    technologies: ['Python', 'OpenCV', 'SQLite'],
    imageUrl: '/images/Attendance.JPG',
    link: 'https://youtu.be/zxWtZIFV2-U?si=a2Fitm5zYI5f07B5',
    featured: true,
    category: 'AI'
  },
  {
    id: '2',
    title: 'Smart Screen Controller',
    description: 'Smart Classroom Controller – Control slides and zoom using hand gestures and voice commands for seamless, touch-free teaching.',
    technologies: ['Python', 'MediaPipe', 'SpeechRecognition'],
    imageUrl: '/images/smart-controller.jpeg',
    link: 'https://youtu.be/0fmJsbo6oIk?si=pGdZCy7MdWNg9LZR',
    featured: true,
    category: 'AI'
  },
  {
    id: '3',
    title: 'EliteStyle',
    description: 'A fully functional eCommerce platform built with PHP, featuring dynamic product and category management, secure cart and checkout functionality, and a professionally redesigned frontend for a modern shopping experience. The system supports real-time product listings, category filtering, and seamless integration between the frontend UI and backend logic.',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
    imageUrl: '/images/elitestyle.png',
    link: 'https://youtu.be/G4PxR9NKixY?si=OOmlCXY34jJmIVzw',
    category: 'Web App'
  },
  {
    id: '4',
    title: 'Visitor Management System',
    description: 'Designed and implemented an automated visitor check-in/check-out system, improving facility security and reducing manual work by 60%.',
    technologies: ['Java', 'JavaFX', 'SQLite'],
    imageUrl: '/images/visitor-management.jpg',
    link: '#',
    category: 'Software'
  },

  {
    id: '5',
    title: 'AI-Powered Market Prediction Tool',
    description: 'Developing an AI-powered tool to predict market trends using machine learning algorithms. The tool will provide actionable insights through data visualization.',
    technologies: ['Python', 'TensorFlow', 'Yahoo Finance API'],
    imageUrl: '/images/market-prediction.jpg',
    link: '#',
     comingSoon: true,
    category: 'Tool'
  },
  {
    id: '6',
    title: 'SwiftInsureX',
    description: 'Built a web-based system for managing insurance policies, claims, and customer interactions with in-built AI ChatBot Assistance. Integrates WhatsApp reminders for payments and renewals.',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'DBMS'],
    imageUrl: '/images/insurance.png',
    link: 'https://swiftinsurex.wuaze.com/',
    category: 'Software'
  },
  {
    id: '8',
    title: 'EconoShop - Sustainable E-Commerce Platform',
    description: 'A modern Sustainable E-Commerce Platform promoting eco-friendly shopping and ethical trade. Features include green product listings, carbon footprint tracking, AI-based eco recommendations, and reward points for sustainable choices — merging convenience with environmental responsibility. ',
    technologies: ['React', 'Node', 'CSS', 'AI Integration'],
    imageUrl: '/images/ecoshop.png',
    link: 'https://youtu.be/jN5SsDSDm7c?si=b6yGlqfGVMVbEhFZ',
    featured: true,
    category: 'Web App'
  },
    {
    id: '9',
    title: 'DeepTraceX',
    description: 'Built a web-application that lets you check whether your image is AI generated or not.',
    technologies: ['TypeScript', 'React', 'CSS'],
    imageUrl: '/images/DeepTraceX.jpeg',
    link: 'https://youtu.be/69ofbnRJJQI?si=XrOIwaVkXxXUxW1z',
    category: 'Web App'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are NEXUS-019, the AI portfolio assistant for Saquib Nazeer.
Your goal is to impress visitors with Saquib's skills in Full Stack Development, AI integration, and futuristic UI design.
Keep responses concise, professional, yet slightly "tech-savvy" or "cyberpunk" in tone.
If asked about contact info, direct them to the contact form at the bottom.
Highlight that this website itself is a demonstration of Saquib's engineering skills.
Do not make up false projects not listed in the context.
`;

