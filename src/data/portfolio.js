// ใช้ ES6 Export เพื่อนำไปใช้ในไฟล์อื่น
export const profileData = {
  name: "Natee Siriudom",
  role: "Full Stack Developer",
  profileImage: "/image/img1.jpg",
  description:
    "I'm a Full Stack Developer passionate about building robust web applications using the MERN stack. With a keen interest in AI integration and emerging technologies, I focus on creating scalable solutions and delivering seamless user experiences. Always learning, always building.",
  resumeUrl:
    "https://drive.google.com/file/d/12os5v4qJTnKtCq6E1GXudnDUHA7eDcH_/view?usp=sharing",
};

export const aboutData = {
  title: "Who I am",
  bio: "Highly motivated Software Developer Bootcamp graduate with a strong foundation in JavaScript/TypeScript, React, Node.js, Express, and MongoDB (Full-Stack/MERN). Bringing 10 years of professional experience in Environmental Management, emphasizing orientation to detail, problem-solving, and communication, crucial for building robust educational products. Self-driven and eager to collaborate with cross-functional teams (Engineering, UX, Product) to develop high-quality Web/Mobile Applications.",
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skillsData = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    icon: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "Vite",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
];

// ประวัติการทำงานและการศึกษา

export const experienceCard = [
  {
    image: "image/journey.png",
    title: "Transitioning into Tech",
    description: 
      `For over a decade, I have worked in various roles and environments. Throughout my career, one thing has remained constant: my passion for growth. I am someone who naturally loves exploring new things, experimenting, and constantly improving how things work.

      In my previous roles, I always looked for ways to optimize my work—whether it was technical tasks, management processes, or documentation. I found that the best tools for improvement were always new technologies and innovative mindsets.

      As technology began to evolve at an incredible pace, especially with the rise of AI, my curiosity grew even stronger. I didn't just want to use these tools; I wanted to understand how they work. I started sharing my knowledge and tech experiences through online media, and the positive impact inspired me to dive deeper.

      To fully transition into this field, I have dedicated myself to learning. I’ve completed various courses in AI, Data Science, and Full Stack Development—ranging from short-term workshops to long-term programs, both online and onsite, with government and private institutions.

      Today, I am driven by a strong passion to build a career in the tech industry. I am ready to use my experience and coding skills to create meaningful products and contribute to the future of technology.`,
  },
  {
    image: "image/gen.png",
    title: "Generation Thailand",
    description:
      `I recently completed an intensive 15-week full-time "Junior Software Developer" bootcamp at Generation Thailand. This program is designed to prepare career changers for entry-level roles in the tech industry through a rigorous, industry-standard curriculum.

      The course covered everything from programming fundamentals to full-stack web development. I gained hands-on experience with modern technologies, including HTML, CSS, JavaScript, React, Node.js, Express, SQL, and MongoDB. The learning process was highly practical, focusing on solving real-world problems and building functional applications.

      A key highlight was the final project, where I collaborated with a team to build a complete web application. This experience taught me how to work effectively in a development team and apply technical skills to create a product from scratch. Beyond coding, the bootcamp also emphasized essential professional mindsets, such as continuous learning and persistence. I am now confident and ready to contribute as a professional Software Developer.`,
  },
  {
    image: "image/skill.jpg",
    title: "Soft Skills",
    description:
      `Transitioning into the tech industry, I bring more than just technical proficiency; I offer a diverse set of soft skills honed through my professional background. I thrive in environments that require strong Teamwork and Collaboration, understanding that the best software is built through collective problem-solving and open communication.

      As a career switcher, my Adaptability and Flexibility are my greatest strengths. I am comfortable navigating fast-paced changes and am always eager to learn new frameworks or methodologies. My Communication skills allow me to bridge the gap between complex technical requirements and clear, actionable goals for the team. Furthermore, my background in Leadership has taught me how to take ownership of tasks and support my peers to achieve shared milestones. I also bring a sense of Creativity to coding, looking for innovative ways to optimize user experiences. I am ready to apply this versatile toolkit to help your development team succeed.`,
  },
];

export const projectsData = [
  {
    title: "POS System",
    description: "A lightweight, high-performance Point-of-Sale system built for modern food outlets.",
    tags: ["React", "Tailwind CSS"],
    image:
      "image/pos.png",
    link: "https://pos-system-gilt-delta.vercel.app/",
  },
  {
    title: "Dice-Roller",
    description: "A fun and interactive dice-rolling app created for web development practice.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    image:
      "image/dice.png",
    link: "https://jsd11-dice-roller-three.vercel.app/",
  },
  {
    title: "E-Commerce",
    description: "A professional MERN-stack e-commerce platform specializing in office syndrome relief products.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB & Mongoose"],
    image: "image/relief.png",
    link: "https://e-commerce-eight-brown-64.vercel.app/",
  },
];

export const contactData = {
  title: "Contact Me",
  subtitle: "Feel free to reach out to me for any questions or opportunities!",
  email: "env.man2533@gmail.com",
  phone: "+66 88 951 6595",
  address: "Saraburi, Thailand",
};

// github: "https://github.com/natee-s",
//     linkedin: "https://www.linkedin.com/in/natee-siriudom/",
//   }
