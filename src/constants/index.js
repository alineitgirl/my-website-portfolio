export const navLinks = [
  { id: 1, name: "Portfolio" },
  { id: 2, name: "Contact" },
  { id: 3, name: "Projects" },
];

export const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const dockApps = [
  {
    id: "finder",
    name: "Potfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgFile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { WINDOW_CONFIG, INITIAL_Z_INDEX };

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Typescript", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["C#", ".NET Core", "Entity Framework", "xUnit"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub Actions", "Postman"],
  },
];

export { techStack };

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "My First Blog Post",
    link: "https://example.com/blog/my-first-post",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    date: "June 11, 2025",
    title: "My Second Blog Post",
    link: "https://example.com/blog/my-second-post",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    date: "May 22, 2025",
    title: "My Third Blog Post",
    link: "https://example.com/blog/my-third-post",
    image: "/images/blog3.png",
  },
];

export { blogPosts };
