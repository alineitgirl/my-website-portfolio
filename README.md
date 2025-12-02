# 🍎 macOS Portfolio

> A stunning, interactive macOS-inspired portfolio built with React, showcasing projects, skills, and contact information with smooth animations and a beautiful design.

![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/gsap-green?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## ✨ Features

- 🖥️ **Authentic macOS Design** - Pixel-perfect recreation of macOS UI with draggable windows
- ⚡ **Lightning Fast** - Built with Vite for instant HMR and blazing fast performance
- 🎨 **Beautiful Animations** - Smooth transitions and interactions powered by GSAP
- 🎪 **Interactive Dock** - Hover effects and app launcher inspired by macOS dock
- 📂 **File Manager** - Browse projects and content like a real macOS Finder
- 🖼️ **Image Viewer** - Display project screenshots and portfolio images
- 📄 **PDF Resume** - Integrated PDF viewer for your resume
- 💬 **Contact Form** - Get in touch with visitors through an integrated contact window
- 🔗 **Project Links** - Direct links to GitHub, live demos, and design files
- 🛠️ **Tech Stack Display** - Showcase your skills and technologies
- 📰 **Blog Section** - Share your latest articles and insights
- 🎯 **State Management** - Zustand for efficient global state management
- ♿ **Accessible** - Built with accessibility best practices in mind

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/alineitgirl/my-website-portfolio.git
cd macos-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📦 Build & Deploy

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint code
```bash
npm run lint
```

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Welcome.jsx         # Hero section
│   ├── Dock.jsx            # macOS-style dock
│   ├── WindowControls.jsx  # Window control buttons
│   └── Home.jsx            # Home component
├── windows/
│   ├── Terminal.jsx        # Tech stack display
│   ├── Finder.jsx          # File manager/project browser
│   ├── Safari.jsx          # Blog/articles section
│   ├── Contact.jsx         # Contact form window
│   ├── Text.jsx            # Text file viewer
│   ├── Image.jsx           # Image viewer
│   └── Resume.jsx          # PDF resume viewer
├── hoc/
│   └── WindowWrapper.jsx   # Higher-order component for windows
├── store/
│   ├── window.js           # Zustand store for window state
│   └── location.js         # Zustand store for location state
├── constants/
│   └── index.js            # Constants and configuration
├── App.jsx                 # Main app component
└── index.css               # Global styles
```

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI library | ^19.2.0 |
| **Vite** | Build tool & dev server | ^7.2.4 |
| **Tailwind CSS** | Utility-first CSS | ^4.1.17 |
| **GSAP** | Animation library | ^3.13.0 |
| **Zustand** | State management | ^5.0.8 |
| **React PDF** | PDF viewer | ^10.2.0 |
| **Lucide React** | Icon library | ^0.554.0 |
| **React Tooltip** | Tooltip component | ^5.30.0 |

---

## 🎮 Usage

### Adding Projects

Edit `src/constants/index.js` and add your projects to the `WORK_LOCATION` section:

```javascript
{
  id: 1,
  name: "Your Project Name",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-5",
  children: [
    {
      id: 1,
      name: "project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: ["Your project description..."],
    },
    // Add more files...
  ],
}
```

### Customizing Content

- **Tech Stack**: Update `techStack` array in `src/constants/index.js`
- **Blog Posts**: Modify `blogPosts` array
- **About Section**: Edit `ABOUT_LOCATION` object
- **Navigation**: Update `navLinks` in constants

### Window Management

The window system uses Zustand for state management. Each window has:
- `isOpen` - Window visibility state
- `zIndex` - Z-order for layering
- `data` - Window-specific data

---

## 🎨 Customization

### Colors & Styling

Colors are defined using Tailwind CSS. Edit `tailwind.config.js` to customize the theme:

```javascript
theme: {
  colors: {
    // Your custom colors
  }
}
```

### Animations

GSAP animations are configured in:
- `src/hoc/WindowWrapper.jsx` - Window open/close animations
- `src/components/Dock.jsx` - Dock hover effects
- Individual window components

---

## 🔐 Security & Performance

- ✅ ESLint configuration for code quality
- ✅ React 19 with Compiler enabled for optimizations
- ✅ Lazy loading of images
- ✅ Code splitting with Vite
- ✅ Optimized bundle size

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request

---

## 👋 Get In Touch

- **Portfolio**: [Visit Live Demo](https://your-portfolio.com)
- **GitHub**: [@alineitgirl](https://github.com/alineitgirl)
- **Email**: queenalina2005@gmail.com

---

## 🙏 Acknowledgments

- Inspired by macOS design language
- Icons from [Lucide React](https://lucide.dev)
- Animations powered by [GSAP](https://greensock.com/gsap)
- State management with [Zustand](https://github.com/pmndrs/zustand)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/alineitgirl/my-website-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/alineitgirl/my-website-portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/alineitgirl/my-website-portfolio?style=social)

---

<div align="center">

**[⬆ back to top](#-macos-portfolio)**

Made with ❤️ by [Alina](https://github.com/alineitgirl)

</div>
