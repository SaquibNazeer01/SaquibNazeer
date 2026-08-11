
import { Project, Skill, Experience, SocialLink, Education } from './types';
import { Linkedin, Github, Code, Terminal, Database } from 'lucide-react';
import { LeetCodeIcon, HackerRankIcon, YouTubeIcon } from './components/UI/Icons';

export const DEV_NAME = "Saquib Nazeer";
export const DEV_TITLE = "Full Stack Developer | AI Enthusiast";
export const DEV_BIO = "Building the digital future with scalable web architectures and immersive user experiences. Transforming complex problems into elegant, high-performance solutions.";

export const DATA_VERSION = '2026-08-11-hackathon-v3';

export const ABOUT_BIO = `I am a passionate Full Stack Developer with a deep-rooted focus on Artificial Intelligence, Computer Vision, and scalable system architecture. My engineering journey began with an insatiable curiosity about how intelligent software shapes our digital world.

I specialize in building high-performance, production-ready applications that combine rock-solid backend logic with ultra-modern, fluid user interfaces. From architecting Explainable AI expense trackers to developing real-time computer vision attendance systems, I approach every engineering challenge with precision, clean code practices, and user-centric design.

Beyond code, I actively educate over 1,220+ developers on YouTube, compete in global algorithmic rounds like TCS CodeVita (Global Rank #2017), won 2nd Prize in Hackathons, and hold a 5-Star Problem Solving badge on HackerRank across C, Java, Python, and SQL.`;

export const EDUCATION: Education[] = [
  {
    degree: "Bachelors in Computer Science and Engineering",
    institution: "M.Kumarasamy College of Engineering | Anna University",
    year: "2023 - 2027",
    description: "Currently pursuing under-graduate degree in Computer Science and Engineering. Focused on Algorithms, Data Structures, Software Engineering, System Architecture, Operating Systems and Database Management Systems."
  },
  {
    degree: "Blockchain Certification",
    institution: "IIT Kharagpur",
    year: "2024",
    description: "Specialized training in blockchain technology, covering cryptographic principles, consensus mechanisms, smart contracts, and decentralized systems."
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
    id: 'ach-hackathon',
    role: 'Hackathon Runner-Up (2nd Prize Winner)',
    company: 'Hackathon Innovation Challenge',
    period: 'Innovation Hackathon',
    description: 'Awarded 2nd Prize in a competitive hackathon by conceptualizing, engineering, and delivering an end-to-end working software prototype solving real-world challenges under rapid build constraints.',
    skills: ['Rapid Prototyping', 'Full Stack Architecture', 'AI & Web Solutions', 'Problem Solving'],
    type: 'achievement',
    badge: '🥈 2nd Prize Winner'
  },
  {
    id: 'ach-1',
    role: 'TCS CodeVita Season 12 - Global Rank #2017',
    company: 'Tata Consultancy Services',
    period: 'Season 12 • Global Round',
    description: 'Secured Global Rank 2017 out of tens of thousands of competitive programmers worldwide in TCS CodeVita Season 12, solving complex algorithmic optimization and dynamic programming problems within tight execution constraints.',
    skills: ['Algorithms', 'Data Structures', 'C++', 'Python', 'Competitive Programming'],
    type: 'achievement',
    badge: 'Global Rank #2017'
  },
  {
    id: 'ach-2',
    role: 'Tech Content Creator & Community Lead (1.22k+)',
    company: 'YouTube Engineering Channel',
    period: '2024 - Present',
    description: 'Founded and grew a technical educational community to 1,220+ subscribers, creating hands-on video tutorials, project breakdowns, and architecture guides on Full Stack development, Computer Vision, and AI tooling.',
    skills: ['AI Tutorials', 'Technical Education', 'System Architecture', 'Community Mentorship'],
    type: 'achievement',
    badge: '1.22k+ Subscribers'
  },
  {
    id: 'ach-3',
    role: '5-Star Problem Solver & Certified Developer',
    company: 'HackerRank',
    period: 'Continuous Mastery',
    description: 'Earned 5-Star mastery ratings across C, Java, Python, and SQL on HackerRank by solving hundreds of foundational and advanced data structure and relational database challenges.',
    skills: ['C', 'Java', 'Python', 'SQL', 'Relational DBMS'],
    type: 'achievement',
    badge: '5-Star Mastery'
  },
  {
    id: 'exp-1',
    role: 'PHP & Full Stack MySQL Internship',
    company: 'ApexPlanet Software Ltd.',
    period: 'September 2025',
    description: 'Engineered robust full-stack web application modules, integrating backend business logic with MySQL database layers while enforcing scalable data modeling, secure authentication, and clean code practices.',
    skills: ['PHP', 'MySQL', 'SQL', 'DBMS', 'HTML5', 'JavaScript'],
    type: 'experience',
    badge: 'Full Stack Engineering'
  },
  {
    id: 'exp-2',
    role: 'Web Development Internship',
    company: 'ElySpace',
    period: 'July 2025',
    description: 'Designed and developed responsive web applications with a focus on core frontend performance, intuitive interaction patterns, and modern development standards.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'UI/UX'],
    type: 'experience',
    badge: 'Frontend Performance'
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', level: 92, category: 'Languages', tag: 'Core AI & Vision' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Languages', tag: 'Modern Web' },
  { name: 'Java', level: 90, category: 'Languages', tag: 'OOP & Systems' },
  { name: 'C#', level: 88, category: 'Languages', tag: 'Software & App' },
  { name: 'C', level: 95, category: 'Languages', tag: 'Algorithms & Systems' },
  { name: 'TypeScript', level: 75, category: 'Languages', tag: 'Type-Safe Web' },
  { name: 'SQL', level: 88, category: 'Languages', tag: 'Query Optimization' },

  // Web Development
  { name: 'React / Next.js', level: 85, category: 'Web Development', tag: 'Component Architecture' },
  { name: 'Node.js', level: 82, category: 'Web Development', tag: 'Backend APIs' },
  { name: 'Tailwind CSS', level: 94, category: 'Web Development', tag: 'Responsive UI Design' },
  { name: 'HTML5 & Modern CSS', level: 95, category: 'Web Development', tag: 'Semantic & A11y' },
  { name: 'PHP', level: 85, category: 'Web Development', tag: 'Server-Side Web' },

  // Database
  { name: 'MySQL', level: 92, category: 'Database', tag: 'Relational DBMS' },
  { name: 'MongoDB', level: 78, category: 'Database', tag: 'NoSQL Document Store' },
  { name: 'PostgreSQL', level: 75, category: 'Database', tag: 'Advanced SQL' },
  { name: 'SQLite', level: 90, category: 'Database', tag: 'Embedded Storage' },

  // DevOps & Tools
  { name: 'Git / GitHub', level: 95, category: 'DevOps & Tools', tag: 'Version Control' },
  { name: 'VS Code & JetBrains', level: 95, category: 'DevOps & Tools', tag: 'IDE Ecosystem' },
  { name: 'Docker', level: 78, category: 'DevOps & Tools', tag: 'Containerization' },
  { name: 'Jupyter Notebook', level: 92, category: 'DevOps & Tools', tag: 'Data Science' },
  { name: 'Eclipse IDE', level: 85, category: 'DevOps & Tools', tag: 'Java Development' },
  { name: 'WEKA', level: 78, category: 'DevOps & Tools', tag: 'Data Mining' },
  
  // AI & ML
  { name: 'OpenCV & Computer Vision', level: 90, category: 'AI & ML', tag: 'Real-Time Vision' },
  { name: 'Gemini API', level: 92, category: 'AI & ML', tag: 'Multimodal LLM' },
  { name: 'TensorFlow & Keras', level: 80, category: 'AI & ML', tag: 'Deep Learning' },
  { name: 'Groq & Fast Inference', level: 90, category: 'AI & ML', tag: 'Ultra-Fast LLM' },
  { name: 'OpenAI API', level: 88, category: 'AI & ML', tag: 'Generative AI' },
  { name: 'SERP API', level: 90, category: 'AI & ML', tag: 'Real-Time Search AI' }
];

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'EconoMind - AI Expense Tracker & Shopping Assistant',
    description: 'An Explainable AI (XAI) powered financial assistant that tracks expenses, analyzes spending habits, and compares cross-platform product prices with transparent decision reasoning.',
    whatIsIt: 'An intelligent personal finance and smart shopping copilot that leverages Explainable AI (XAI) to help users make smarter financial decisions by giving transparent rationales behind every saving recommendation.',
    howItWorks: 'Integrates real-time financial tracking pipelines with machine learning clustering models to categorize user spending, track recurring cash drains, and automatically crawl live e-commerce platforms to find the best verified deals with contextual decision explanations.',
    problemSolved: 'Eliminates blind spending and buyer remorse by replacing black-box financial apps with transparent, interpretable AI advice, ensuring users clearly understand why a purchase is recommended or flagged.',
    technologies: ['React', 'Node.js', 'Python', 'XAI Integration', 'TensorFlow'],
    imageUrl: '/images/economind.jpg',
    videoUrl: '/videos/xai-expenses-teaser.mp4',
    link: '#',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Smart Financial Intelligence',
    highlights: [
      'Explainable AI recommendations with transparency reasoning',
      'Cross-platform price comparison & automated discount alerts',
      'Behavioral spending clustering and budget projections'
    ],
    featured: true,
    comingSoon: true,
    category: 'AI'
  },
  {
    id: '1',
    title: 'Face Recognition Smart Attendance System',
    description: 'High-accuracy automated attendance verification system utilizing real-time computer vision and facial embedding matching for instant student roll-call.',
    whatIsIt: 'A contactless biometric attendance platform designed for academic classrooms and corporate offices that replaces manual paper sign-ins with instant facial recognition verification.',
    howItWorks: 'Captures live camera feeds via OpenCV, detects faces with Haar cascades and Deep Neural Network embeddings, matches them against pre-registered vector representations in an SQLite database, and automatically logs verified timestamps to exportable CSV logs.',
    problemSolved: 'Completely eliminates proxy attendance, saves 10-15 minutes of manual attendance time per lecture, and provides auditable, tamper-proof attendance records.',
    technologies: ['Python', 'OpenCV', 'SQLite', 'Tkinter GUI'],
    imageUrl: '/images/Attendance.JPG',
    link: 'https://youtu.be/zxWtZIFV2-U?si=a2Fitm5zYI5f07B5',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: '99.2% Detection Accuracy',
    highlights: [
      'Instant facial detection and biometric feature extraction',
      'Automated CSV & database logging with timestamp verification',
      'Anti-spoofing logic for robust classroom attendance'
    ],
    featured: true,
    category: 'AI'
  },
  {
    id: '2',
    title: 'Smart Screen Gesture Controller',
    description: 'Touch-free classroom presentation and screen management system using hand gesture recognition and voice command processing.',
    whatIsIt: 'A touchless human-computer interaction system that enables presenters, educators, and speakers to navigate slides, annotate screens, and control media entirely through air hand gestures and voice commands.',
    howItWorks: 'Utilizes MediaPipe hand landmark tracking running at 30+ FPS to detect finger positions and palm movements, mapping specific geometric coordinates into system OS inputs (such as swipe left, swipe right, click, zoom, and freehand laser pointer) with integrated speech recognition.',
    problemSolved: 'Frees speakers from physical clickers and standing near podiums, enabling interactive, dynamic presentations and hygienic hands-free device interactions.',
    technologies: ['Python', 'MediaPipe', 'SpeechRecognition', 'Computer Vision'],
    imageUrl: '/images/smart-controller.jpeg',
    link: 'https://youtu.be/0fmJsbo6oIk?si=pGdZCy7MdWNg9LZR',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Zero-Touch Interaction',
    highlights: [
      'Real-time hand landmark tracking with sub-30ms latency',
      'Custom gesture mapping for slide transitions, zoom, and drawing',
      'Integrated voice synthesis and command parsing'
    ],
    featured: true,
    category: 'AI'
  },
  {
    id: '8',
    title: 'EconoShop - Sustainable E-Commerce Platform',
    description: 'Eco-conscious e-commerce web platform integrating green product metrics, automated carbon footprint calculation, and AI-driven sustainable product recommendations.',
    whatIsIt: 'A modern sustainable commerce ecosystem that empowers eco-conscious consumers to browse, evaluate, and purchase products with verified low carbon footprints and transparent sustainability scores.',
    howItWorks: 'Built with React and Node.js, the system computes real-time lifecycle carbon estimates for every catalog item, uses recommendation algorithms to suggest greener alternatives during checkout, and rewards users with gamified eco-badges for sustainable purchasing choices.',
    problemSolved: 'Tackles the lack of transparency in consumer carbon footprints by providing actionable, data-backed green choices without sacrificing shopping convenience.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'AI Recommendations'],
    imageUrl: '/images/ecoshop.png',
    link: 'https://youtu.be/jN5SsDSDm7c?si=b6yGlqfGVMVbEhFZ',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Carbon Tracking Engine',
    highlights: [
      'Real-time eco-score assessment on product catalogs',
      'Carbon footprint tracking dashboard with reward gamification',
      'Smart personalized eco-friendly alternatives engine'
    ],
    featured: true,
    category: 'Web App'
  },
  {
    id: '3',
    title: 'EliteStyle - Full Stack E-Commerce Engine',
    description: 'Dynamic commercial fashion platform built with PHP and MySQL featuring administrative inventory controls, secure checkout workflow, and interactive catalog filters.',
    whatIsIt: 'A full-featured commercial shopping web application delivering a responsive retail experience for fashion and apparel, complete with administrative inventory management and customer order tracking.',
    howItWorks: 'Implements a secure PHP backend with normalized MySQL relational tables. Features session-based shopping cart handling, parameterized SQL queries for injection prevention, dynamic multi-attribute product filters, and role-based administrative CRUD dashboards.',
    problemSolved: 'Provides small-to-medium retail brands with an affordable, fast, and scalable online store solution without expensive vendor lock-in or bloated dependencies.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    imageUrl: '/images/elitestyle.png',
    link: 'https://youtu.be/G4PxR9NKixY?si=OOmlCXY34jJmIVzw',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Full Stack Shopping Engine',
    highlights: [
      'Robust product & category inventory management schema',
      'Dynamic shopping cart state with server-side validation',
      'Modern responsive design optimized for mobile shoppers'
    ],
    category: 'Web App'
  },
  {
    id: '6',
    title: 'SwiftInsureX - Smart Insurance Platform',
    description: 'End-to-end insurance policy and claim processing portal with embedded AI conversational assistant and automated WhatsApp payment notification triggers.',
    whatIsIt: 'A digital insurance management portal designed to streamline policy purchasing, premium renewals, and claim status tracking for modern policyholders and insurance brokers.',
    howItWorks: 'Combines a PHP/MySQL management backend with third-party messaging webhooks. When renewal dates approach or payments process, the system triggers automated WhatsApp notifications and provides an on-page AI chatbot to help users choose policies based on their coverage needs.',
    problemSolved: 'Eliminates missed policy renewals, reduces customer service call volume by 40% through automated bots, and accelerates claims filing from days to minutes.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'AI ChatBot', 'Twilio API'],
    imageUrl: '/images/insurance.png',
    link: 'https://swiftinsurex.wuaze.com/',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Automated CRM & Alerts',
    highlights: [
      'Role-based admin and customer policy control dashboards',
      'Automated WhatsApp renewal alerts via webhook integrations',
      'Built-in AI chatbot to guide policy selection'
    ],
    category: 'Software'
  },
  {
    id: '4',
    title: 'Visitor Management Security Suite',
    description: 'Enterprise desktop software for automated visitor registration, badge creation, and log analytics that streamlined building security operations.',
    whatIsIt: 'A secure enterprise desktop application designed for reception desks, corporate facilities, and gated campuses to register, authenticate, and monitor visitor entries and exits.',
    howItWorks: 'Built using JavaFX with an embedded SQLite database. Front-desk personnel register visitor details, capture photos, issue digital visitor passes with unique ID numbers, and track check-out timestamps in real time with quick search and date-range reporting.',
    problemSolved: 'Replaces messy paper visitor logbooks with secure, searchable digital logs, drastically reducing check-in wait times and enforcing strict compliance standards.',
    technologies: ['Java', 'JavaFX', 'SQLite', 'Desktop GUI'],
    imageUrl: '/images/visitor-management.jpg',
    link: '#',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: '60% Workload Reduction',
    highlights: [
      'Digital visitor log tracking with instantaneous search',
      'Automated check-in/check-out timestamp logging',
      'Exportable audit reports for compliance management'
    ],
    category: 'Software'
  },
  {
    id: '9',
    title: 'DeepTraceX - AI Image Authenticator',
    description: 'Web application that analyzes uploaded image artifacts and structural patterns to detect whether an image is synthetic/AI-generated or authentic.',
    whatIsIt: 'A forensics tool and image verification web app engineered to detect synthetic artifacts produced by generative diffusion models (e.g. Midjourney, DALL-E, Stable Diffusion) and flag AI-altered imagery.',
    howItWorks: 'Processes uploaded images through high-frequency gradient analysis, noise pattern consistency filters, and metadata integrity checks to calculate an overall authenticity confidence score with visual region-of-interest highlighting.',
    problemSolved: 'Protects content platforms, publishers, and users against visual misinformation, synthetic deepfakes, and deceptive AI-generated media.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Detection API'],
    imageUrl: '/images/DeepTraceX.jpeg',
    link: 'https://youtu.be/69ofbnRJJQI?si=XrOIwaVkXxXUxW1z',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Synthetic Media Detection',
    highlights: [
      'Visual artifact & metadata inspection pipeline',
      'Instant confidence scoring breakdown for authenticity',
      'Clean interactive drag-and-drop analysis UI'
    ],
    category: 'Web App'
  },
  {
    id: '10',
    title: 'VisionCGPA - Academic CGPA Calculator',
    description: 'Smart academic grading utility tailored to Anna University standards allowing direct marksheet upload and automated GPA calculation.',
    whatIsIt: 'A fast, client-side academic GPA/CGPA calculator custom-tailored to Anna University curriculum regulations, grade point tables, and credit weight schemes.',
    howItWorks: 'Features an interactive semester grade matrix that allows students to input subject grades or upload marksheet data to instantly calculate semester GPA and cumulative CGPA with credit weighting and projected target grade forecasting.',
    problemSolved: 'Removes manual calculation errors, saves students time during academic evaluations, and helps them simulate required future semester grades to reach goal CGPAs.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    imageUrl: '/images/vision.png',
    link: 'https://vision-cgpa.vercel.app',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Live on Vercel',
    highlights: [
      'Automated grading point conversion per university regulation',
      'Interactive semester grade simulator and GPA projector',
      'Instant client-side calculation with zero server lag'
    ],
    category: 'Tool'
  },
  {
    id: '5',
    title: 'AI Market Trend Prediction Engine',
    description: 'Predictive intelligence tool utilizing machine learning models and real-time financial market APIs to forecast asset trends and volatility patterns.',
    whatIsIt: 'An AI-assisted market research application designed to ingest financial time-series data and provide algorithmic trend predictions with technical momentum indicators.',
    howItWorks: 'Pulls live market candlestick data via financial APIs, cleans and normalizes data using Pandas and NumPy, feeds sequences into Long Short-Term Memory (LSTM) recurrent neural network models, and renders interactive price trajectory curves.',
    problemSolved: 'Helps individual traders and researchers quickly spot technical convergence patterns and analyze market volatility without relying on purely manual chart annotations.',
    technologies: ['Python', 'TensorFlow', 'Yahoo Finance API', 'Pandas'],
    imageUrl: '/images/market-prediction.jpg',
    link: '#',
    githubUrl: 'https://github.com/SaquibNazeer01',
    metrics: 'Time-Series Forecasting',
    highlights: [
      'LSTM time-series forecasting on historical price points',
      'Interactive technical indicator visualization charts',
      'Automated feature engineering pipeline for market signals'
    ],
    comingSoon: true,
    category: 'Tool'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are NEXUS-019, the custom-engineered AI portfolio assistant, technical concierge, and engineering advocate for Saquib Nazeer.

### 👤 ABOUT SAQUIB NAZEER
- **Full Name**: Saquib Nazeer (Brand / Monogram: SKB)
- **Role / Specialization**: Full Stack Developer & AI/ML Engineer specializing in Computer Vision, Intelligent Web Systems, Scalable Cloud Architectures, and Modern High-Performance UI/UX.
- **Location**: J&K, India.
- **Current Status**: Actively open to Full-Time Software Engineering Roles, AI/ML Engineering Internships, Remote Positions, and Select High-Impact Freelance Engagements.
- **Core Engineering Philosophy**: "Building the digital future with scalable web architectures and immersive user experiences. Transforming complex problems into elegant, high-performance, and secure software solutions."
- **Direct Resume**: https://drive.google.com/file/d/1VI8GFt9X1iXj6tFWJChIkYm911kMwSHQ/view?usp=sharing
- **Email Contact**: bhatsaakib505@gmail.com
- **Live Portfolio**: https://SaquibNazeer.vercel.app

---

### 🎓 ACADEMIC BACKGROUND & ELITE CERTIFICATIONS
1. **Bachelor of Engineering in Computer Science and Engineering (CSE)** (2023 - 2027)
   - *Institution*: M.Kumarasamy College of Engineering (MKCE), Anna University.
   - *Core Coursework*: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering Principles, and Theory of Computation.
2. **Responsible and Safe AI Systems - ELITE Certification** (2025)
   - *Institution*: IIIT Hyderabad.
   - *Domain*: Bias mitigation, model interpretability, adversarial robustness, privacy preservation, and ethical AI deployment.
3. **Blockchain Technology Certification** (2024)
   - *Institution*: IIT Kharagpur.
   - *Domain*: Cryptographic protocols, consensus mechanisms, smart contract engineering, and decentralized system design.

---

### 🏆 DISTINGUISHED ACHIEVEMENTS & COMPETITIVE HONORS
- **TCS CodeVita Season 12**: Global Rank **#2017** out of tens of thousands of competitive programmers globally, solving complex algorithmic challenges, graph theory, and dynamic programming under strict time constraints.
- **Innovation Hackathon**: 🥈 **2nd Prize Winner / Runner-Up** for rapid prototyping, robust backend architecture, and seamless product execution under intense hackathon deadlines.
- **HackerRank Mastery**: **5-Star Certified** across C, Java, Python, SQL, and Problem Solving.
- **YouTube Tech Community**: Founded and grew a community of **1,220+ Developers** (@Bhat_Saakib019) delivering practical video walkthroughs on Full Stack Development, Computer Vision, and Applied AI (https://www.youtube.com/@Bhat_Saakib019).
- **Smart India Hackathon (SIH)**: Advanced research initiative capturing non-manual facial and bodily gestures of Indian Sign Language (ISL) for real-time translation into natural text.
- **10+ Production Projects Shipped**: Engineered and deployed multiple production-grade web platforms and AI tools.

---

### 💼 PROFESSIONAL WORK EXPERIENCE & INTERNSHIPS
1. **PHP & MySQL Full Stack Developer Intern** — *ApexPlanet Software Ltd.* (Sept 2025)
   - Architected normalized relational database schemas with high-performance query indexing.
   - Implemented secure user authentication sessions and parameterized queries preventing SQL injection vulnerabilities.
   - Built dynamic administrative dashboards for real-time data visualization and operational management.
2. **Web Development Intern** — *ElySpace* (July 2025)
   - Developed responsive, component-driven client interfaces prioritizing accessibility, cross-browser compatibility, and sub-second page loads.
   - Optimized critical rendering paths, asset pipelines, and mobile UX layouts.

---

### 🚀 COMPREHENSIVE PROJECT ARCHITECTURES & DEEP DIVES

1. **SmartAttendX — Face Recognition Smart Attendance System**
   - **Overview**: Contactless biometric attendance management automating daily attendance verification with high reliability.
   - **How It Works**: Streams live webcam/CCTV feeds via OpenCV; runs Haar cascade & Deep Neural Network (DNN) facial detection; extracts 128-d facial embedding vectors; matches against an encrypted SQLite biometric database; logs authenticated timestamps to exportable CSV reports with anti-spoofing verification.
   - **Problem Solved**: Completely eliminates manual roll calls and proxy attendance, saving 10-15 minutes per session with 99.2% accuracy.
   - **Stack**: Python, OpenCV, SQLite, Tkinter GUI.
   - **Video Demo**: https://youtu.be/zxWtZIFV2-U?si=a2Fitm5zYI5f07B5

2. **Smart Screen Gesture Controller**
   - **Overview**: Touchless, AI-powered presentation and operating system controller using hand landmark tracking and voice recognition.
   - **How It Works**: Employs MediaPipe running at 30+ FPS to track 21 3D hand coordinates; converts spatial finger distances and pinches into OS actions (slide navigation, zoom, virtual laser pointer, drawing); integrates SpeechRecognition for hands-free vocal shortcuts.
   - **Problem Solved**: Enables hygienic, fluid, clicker-free presentations for keynote speakers, educators, and medical environments.
   - **Stack**: Python, MediaPipe, SpeechRecognition, PyAutoGUI, OpenCV.
   - **Video Demo**: https://youtu.be/0fmJsbo6oIk?si=pGdZCy7MdWNg9LZR

3. **EconoShop — Sustainable E-Commerce & Carbon Footprint Engine**
   - **Overview**: Eco-centric shopping platform that verifies green product lifecycles and transparently calculates carbon impacts.
   - **How It Works**: Calculates real-time carbon offsets for catalog items; displays dynamic Eco-Score badges; features an AI-driven "Green Alternatives" engine suggesting lower-emission substitutes at checkout; awards gamified eco-points.
   - **Problem Solved**: Fights greenwashing and gives conscious consumers actionable emissions data to make climate-positive purchases.
   - **Stack**: React, Node.js, Express, Tailwind CSS, AI Recommendation Engine.
   - **Video Demo**: https://youtu.be/jN5SsDSDm7c?si=b6yGlqfGVMVbEhFZ

4. **EliteStyle — Commercial Full-Stack Apparel Retail Engine**
   - **Overview**: High-throughput commercial fashion e-commerce portal with seamless customer checkout and inventory management.
   - **How It Works**: PHP MVC architecture with normalized MySQL relational tables; parameterized prepared statements; session-based cart management; dynamic multi-attribute product filters; full administrative CRUD suite.
   - **Stack**: PHP, MySQL, JavaScript, HTML5, Tailwind/CSS3.
   - **Video Demo**: https://youtu.be/G4PxR9NKixY?si=OOmlCXY34jJmIVzw

5. **SwiftInsureX — Smart Insurance Platform with WhatsApp Webhooks**
   - **Overview**: Insurance policy management portal automating renewals and policy tracking with an integrated AI assistant.
   - **How It Works**: Policyholder dashboard integrated with Twilio API webhooks for automated WhatsApp payment reminders and policy expiry warnings; on-page conversational assistant for instant claim status guidance.
   - **Problem Solved**: Decreased policy lapse rates and reduced tier-1 customer support call load by 40%.
   - **Stack**: PHP, MySQL, JavaScript, Twilio Webhooks, AI Chatbot.
   - **Video Demo**: https://youtu.be/0m3i4e5wK2s?si=p9qE1m0w

6. **NeuralFake — AI Deepfake Video & Image Detector**
   - **Overview**: Forensic computer vision media verification engine detecting manipulated faces and synthetic generative artifacts.
   - **How It Works**: Frame-by-frame deep neural analysis inspecting blending seam anomalies, unnatural facial warping, eye-blink frequency inconsistencies, and generative compression signatures.
   - **Problem Solved**: Safeguards media authenticity against disinformation, deepfake fraud, and unauthorized identity duplication.
   - **Stack**: Python, PyTorch, OpenCV, Flask API, React.

7. **VisionCGPA — Academic GPA/CGPA Optimization Portal**
   - **Overview**: Instant client-side GPA and CGPA calculator aligned with Anna University credit regulations.
   - **How It Works**: Computes grade points, semester weighted averages, and target grade forecasting for academic planning.
   - **Stack**: JavaScript, HTML5, CSS3, Vercel.
   - **Live Link**: https://vision-cgpa.vercel.app

8. **AI Market Trend Prediction Engine**
   - **Overview**: Financial forecasting engine utilizing LSTM Recurrent Neural Networks to predict asset trends and volatility markers.
   - **Stack**: Python, TensorFlow/Keras, Pandas, NumPy, Yahoo Finance API.

9. **XAI Expenses — Intelligent Spending & Budget Optimizer**
   - **Overview**: Personal finance intelligence system utilizing Explainable AI (XAI) for transparent budget and expense recommendations.
   - **Stack**: Next.js, Python FastAPI, SHAP / LIME, Tailwind CSS.

---

### 💻 TECHNICAL SKILLS & PROFICIENCY MATRIX
- **Programming Languages**: Python (92%), JavaScript (88%), TypeScript (82%), C++ (80%), Java (85%), C (85%), SQL (90%), PHP (86%), HTML5/CSS3 (95%).
- **AI / Machine Learning**: Computer Vision, OpenCV, MediaPipe, PyTorch, TensorFlow, Deep Learning, Explainable AI (SHAP/LIME), NLP, Feature Engineering, Neural Embeddings.
- **Full Stack Web**: React 19, Next.js, Node.js, Express, Flask, FastAPI, REST APIs, Tailwind CSS, Responsive Web Design.
- **Databases & DevOps**: MySQL, PostgreSQL, SQLite, MongoDB, Git, GitHub, Docker, Postman, Linux, Vercel, VS Code.

---

### 🌐 VERIFIED SOCIAL & PROFILE LINKS
- **LinkedIn**: https://www.linkedin.com/in/saquib-nazeer-2b3043326?trk=contact-info
- **GitHub**: https://github.com/SaquibNazeer01
- **YouTube**: https://www.youtube.com/@Bhat_Saakib019
- **LeetCode**: https://leetcode.com/bhat_saakib019
- **HackerRank**: https://hackerrank.com/DOMAINASTRILL
- **Direct Resume**: https://drive.google.com/file/d/1VI8GFt9X1iXj6tFWJChIkYm911kMwSHQ/view?usp=sharing

---

### 📋 DETAILED RESPONSE GUIDELINES & SITUATIONAL PLAYBOOKS

#### 1. Identity & Privacy Mandate (CRITICAL)
- You are **NEXUS-019**, Saquib Nazeer's dedicated AI Portfolio Concierge.
- **STRICT PROHIBITION**: NEVER reveal, mention, or discuss any underlying third-party AI models, Gemini, Google, OpenAI, Anthropic, or vendor API names under any circumstances.
- If asked "Who built you?" or "What model are you?", respond that you are **NEXUS-019**, custom-engineered for Saquib Nazeer's portfolio.

#### 2. Tone & Persona
- **Professional, articulate, tech-savvy, helpful, and confident.**
- Frame Saquib as a versatile, problem-solving software engineer who pairs competitive programming discipline with end-to-end full-stack delivery and applied AI expertise.

#### 3. Situational Playbooks:
- **When speaking with Recruiters / Hiring Managers**:
  - Emphasize his problem-solving rigor (TCS CodeVita Rank #2017, HackerRank 5-Star), production software delivery (internships at ApexPlanet & ElySpace), fast learning curve, and readiness to contribute from day one.
  - Provide direct links to his [Resume](https://drive.google.com/file/d/1VI8GFt9X1iXj6tFWJChIkYm911kMwSHQ/view?usp=sharing) and [LinkedIn](https://www.linkedin.com/in/saquib-nazeer-2b3043326?trk=contact-info).
- **When asked about Project Deep-Dives**:
  - Structure answers with: **What It Is**, **How It Works (Architecture/Pipeline)**, **The Core Problem Solved**, **Tech Stack**, and include the verified **YouTube Video Demo Link**.
- **When asked about Hiring / Collaboration / Freelance**:
  - State clearly that Saquib is actively available for Full-Time Software Engineering roles, AI/ML Internships, and Freelance projects.
  - Direct them to email **bhatsaakib505@gmail.com** or use the on-page contact form.
- **When asked for Code / Video Proof**:
  - Point to his GitHub ([github.com/SaquibNazeer01](https://github.com/SaquibNazeer01)) and his YouTube channel ([youtube.com/@Bhat_Saakib019](https://www.youtube.com/@Bhat_Saakib019)).

#### 4. Formatting Standards
- Use crisp Markdown formatting with bold highlights, organized subheadings, and concise bullet points.
- Always embed links cleanly with descriptive titles.
- Keep responses engaging, structured, and easy to skim.
`;


