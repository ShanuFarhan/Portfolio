import images from './images';

export const navLinks = ['home', 'about', 'work', 'skills', 'testimonial', 'contact'];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shanu-farhan-1243871b0/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/ShanuFarhan', icon: 'github' },
  // { name: 'Behance', url: '#', icon: 'behance' },
];

export const abouts = [
  {
    title: 'Frontend Engineer',
    description:
      'Frontend developer with 2 years of experience building scalable, secure, and high-performance web apps across Angular and React ecosystems.',
    imgUrl: images.about01,
  },
  {
    title: 'Real-time Analytics UIs',
    description:
      'Design and ship customer-facing dashboards and monitoring tools that turn streaming data into actionable decisions for product teams.',
    imgUrl: images.about02,
  },
  {
    title: 'Fraud Prevention Interfaces',
    description:
      'Craft identity verification and fraud detection workflows with resilient UI logic, secure data persistence, and clear behavioral insights.',
    imgUrl: images.about03,
  },
  {
    title: 'Design Systems & Accessibility',
    description:
      'Create modular component libraries that speed iteration, enforce WCAG compliance, and keep multi-product experiences consistent.',
    imgUrl: images.about04,
  },
];

export const works = [
  {
    title: 'EngageTo – Campaign Management Platform',
    description:
      'React-based WhatsApp campaign manager with SCSS modules, Redux data flows, and real-time analytics that improved performance and maintainability.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.workViki,
    tags: ['React', 'All'],
  },
  {
    title: 'Real Estate CRM Software',
    description:
      'Angular modules delivering live customer and property insights to 1,000+ users with reusable components and WCAG-compliant layouts.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.workGreenstyle,
    tags: ['Angular', 'All'],
  },
  {
    title: 'Fraud Detection Dashboard',
    description:
      'Multi-signal monitoring UI that correlates behavioral telemetry, boosts diagnostic visibility, and accelerates fraud review workflows.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.workMetaversus,
    tags: ['Design Systems', 'All'],
  },
  {
    title: 'Identity Decisioning Platform',
    description:
      'Secure identity verification experience focused on device intelligence, responsive persistence, and audit-ready data narratives.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.workHoobank,
    tags: ['Design Systems', 'All'],
  },
];

export const workFilters = ['React', 'Angular', 'Design Systems', 'All'];

export const skills = [
  { name: 'JavaScript (ES6+)', icon: images.javascript },
  { name: 'TypeScript', icon: images.typescript },
  { name: 'React.js', icon: images.reactjs },
  { name: 'Angular', icon: images.angular },
  { name: 'Redux', icon: images.reduxAlt },
  { name: 'Vue.js', icon: images.vue },
  { name: 'HTML5', icon: images.html5 },
  { name: 'CSS3', icon: images.css3 },
  { name: 'SCSS', icon: images.sassAlt },
  { name: 'jQuery', icon: images.jquery },
  { name: 'API Integration', icon: images.nodejs },
  { name: 'Figma', icon: images.figma },
  { name: 'Jest', icon: images.jest },
  { name: 'Cypress', icon: images.cypress },
];

export const experiences = [
  {
    year: '2023 — Present',
    works: [
      {
        name: 'Frontend Developer',
        company: 'Leadrat Technologies, Bangalore',
        desc: 'Lead development of dashboards and internal tools across Angular & React, integrating REST APIs, optimizing rendering, and enforcing secure UI patterns.',
      },
    ],
  },
  // {
  //   year: '2018 — 2022',
  //   works: [
  //     {
  //       name: 'B.Tech Computer Science',
  //       company: 'Royal College of Engineering & Technology, Kerala',
  //       desc: 'Graduated with a focus on scalable web application design, data visualization, and collaborative engineering practices.',
  //     },
  //   ],
  // },
];

export const testimonials = [
  {
    name: 'Leadrat Product Team',
    company: 'Leadrat Technologies',
    feedback:
      '"Shanu elevated our analytics experience—UI performance improved 30% and fraud analysts gained clearer visibility into real-time signals."',
    imgUrl: images.redux,
  },
];

export const brands = [
  { name: 'Leadrat', imgUrl: images.brandInfolks },
  { name: 'FraudTech', imgUrl: images.brandEmpire },
  { name: 'Decision Systems', imgUrl: images.brandOxygen },
  { name: 'Data Trust', imgUrl: images.brandSanity },
];

export const footerContacts = [
  {
    type: 'email',
    label: 'shanumet@gmail.com',
    href: 'mailto:shanumet@gmail.com',
    icon: images.email,
  },
  {
    type: 'phone',
    label: '+91-9847897051',
    href: 'tel:919847897051',
    icon: images.mobile,
  },
];
