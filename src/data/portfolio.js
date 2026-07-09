import {
  Blocks,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Mail,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Eng Mahmoud Ahmed Ali',
  title: 'Full Stack Developer',
  education: 'Faculty of Computers and Information',
  email: 'faay1511@gmail.com',
  tagline: 'Full Stack Developer | Building Scalable Web Apps',
  bio:
    'I build clean, reliable, and scalable web applications across the full stack. My work combines thoughtful user experience, modern frontend engineering, robust APIs, and database design that supports real product growth.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '20+', label: 'UI screens crafted' },
  { value: '10+', label: 'API modules built' },
  { value: '100%', label: 'Responsive mindset' },
];

export const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Responsive UI', level: 91 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 86 },
      { name: 'REST APIs', level: 88 },
      { name: 'Authentication', level: 82 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 84 },
      { name: 'MySQL', level: 82 },
      { name: 'Schema Design', level: 80 },
      { name: 'Query Optimization', level: 76 },
    ],
  },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A responsive shopping experience with product filtering, cart workflows, secure checkout patterns, and admin-ready architecture.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://example.com',
    github: 'https://github.com/',
    icon: Globe2,
  },
  {
    title: 'Task Management App',
    description:
      'A productivity dashboard for teams with project boards, priorities, user assignment, and fast state-driven interactions.',
    stack: ['React', 'REST API', 'MySQL', 'JWT'],
    demo: 'https://example.com',
    github: 'https://github.com/',
    icon: Workflow,
  },
  {
    title: 'Learning Management System',
    description:
      'Course browsing, lesson tracking, role-based access, and clean content management flows for students and instructors.',
    stack: ['React', 'Express', 'MongoDB', 'CSS Modules'],
    demo: 'https://example.com',
    github: 'https://github.com/',
    icon: Blocks,
  },
  {
    title: 'Restaurant Ordering System',
    description:
      'Digital menu, cart, order tracking, and kitchen-friendly order states optimized for mobile-first usage.',
    stack: ['React', 'Node.js', 'Socket-ready API'],
    demo: 'https://example.com',
    github: 'https://github.com/',
    icon: Smartphone,
  },
];

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Modern React interfaces with responsive layouts, smooth interactions, accessible components, and strong performance habits.',
    icon: Layers3,
  },
  {
    title: 'Backend Engineering',
    description:
      'Clean APIs, authentication flows, validation, business logic, and integration-ready server architecture.',
    icon: Rocket,
  },
  {
    title: 'Database Design',
    description:
      'Practical schema modeling, query planning, and data structures that keep applications stable as they grow.',
    icon: Database,
  },
  {
    title: 'Full Stack Delivery',
    description:
      'End-to-end product builds from interface to server to deployment, with maintainability considered from day one.',
    icon: ShieldCheck,
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Portfolio', href: '#home', icon: Globe2 },
];
