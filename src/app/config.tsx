import { FaGithub, FaFacebook } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareXTwitter,
  FaDiscord,
  FaThreads,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiBluesky } from "react-icons/si";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiOpenaiFill,
  RiWordpressFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiShadcnui,
  SiPrisma,
  SiWoocommerce,
  SiReact,
  SiSupabase,
  SiExpress,
  SiPuppeteer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiFramer,
  SiThreedotjs,
  SiElectron,
  SiDocker,
  SiDrizzle,
  SiMui,
  SiGit,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";

export const siteConfig = {
  name: "Muhammad Ramzan Nasir",
  title: "Muhammad Ramzan Nasir | Web Developer",
  email: "mrammzannasir555@gmail.com",
  alias: "Nasir",
  description:
    "Muhammad Ramzan Nasir is a frontend developer with one year of experience crafting responsive, user-friendly, and visually engaging web applications. Specializing in JavaScript, TypeScript, React, Next.js, Redux, HTML5, CSS3, and modern styling tools like Sass.",
  keywords:
    "Muhammad Ramzan Nasir, web developer, frontend development, JavaScript, TypeScript, React, Next.js, Redux, HTML5, CSS3, Sass",
  url: "https://nasir-portfolio.vercel.app",
  taglines: [
    "🚀 Web Developer @ Nexobe | Specializing in JavaScript & TypeScript",
    "🎨 Crafting responsive, user-friendly, and visually engaging web applications",
    "💡 Turning complex UI/UX designs into clean, efficient, and maintainable code",
  ],
  titles: ["Web Developer", "Frontend Developer", "React Developer"],
  socialLinks: [
    {
      icon: <IoIosMail />,
      url: "mailto:mrammzannasir555@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/muhammad-ramzan-nasir-a60510211/",
    },
    {
      icon: <FaFacebook />,
      url: "https://web.facebook.com/profile.php?id=100032429956302",
    },
  ],
  sections: {
    tableOfContents: [
      {
        id: "about-me",
        label: "ABOUT ME",
      },
      {
        id: "experiences",
        label: "EXPERIENCES",
      },
      {
        id: "projects",
        label: "PROJECTS",
      },
      {
        id: "technologies",
        label: "TECHNOLOGIES",
      },
      {
        id: "contact",
        label: "CONTACT",
      },
    ],
    aboutMe: `
           <p>
  Hello! I'm a Frontend Developer passionate about building modern, responsive, and visually appealing web experiences. With one year of experience, I leverage JavaScript, TypeScript, React, Next.js, Redux, HTML5, and CSS3 (including Sass) to create performant and user-centric interfaces.
</p>
<br />
<p>
  My focus is on transforming creative designs into clean, efficient, and scalable code. I value seamless user experiences and optimize for performance. I'm also comfortable with collaborative development environments, utilizing tools like Git to streamline workflows.
</p>
<br />
<p>
  I enjoy partnering with design and product teams to deliver digital solutions that meet strategic goals. My curiosity drives me to continuously learn and apply the latest frontend innovations. Let's discuss how I can contribute to your next project!
</p>
        `,
    experiences: [
      {
        company: "Nexobe",
        position:
          "Web Developer @ Nexobe | Specializing in JavaScript & TypeScript",
        duration: "2024 Oct- Present",
        description:
          "Worked as a Web Developer at Nexobe, contributing to AI-driven products using TypeScript and JavaScript. Built responsive, scalable solutions across brands like, Otteri AI,  pikcel AI and Snap.photo to enhance user experience and functionality.",
      },
      {
        company: "Gridship",
        position: "Web Developer",
        duration: "2024 July - 2024 Oct",
        description:
          "Worked as a Web Developer at Gridship, contributing to the development of Treply — a B2B SMS marketing platform. Built scalable frontend solutions using TypeScript and JavaScript to enhance campaign automation, user engagement, and analytics for businesses",
      },
      {
        company: "CodeNative X",
        position: "Frontend Developer",
        duration: "2024 Jan - 2024 July",
        description:
          "Worked as a Frontend Developer at CodeNative X, contributing to the development of a web application using TypeScript and JavaScript. Built responsive, scalable solutions to enhance user experience and functionality.",
      },
    ],
    projects: [
      {
        title: "Nasir Portfolio",
        description:
          "My personal portfolio website showcasing my projects and skills. Built with Next.js, Tailwind CSS, and TypeScript.",
        logo: "/projects/portfolio/portfolio-logo.webp",
        thumbnail: "/projects/portfolio/portfolio-thumbnail.webp",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiShadcnui className="text-[#FFF]" />,
            name: "Shadcn/UI",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
        ],
        link: "https://nasir-portfolio.vercel.app",
        previewImages: [
          "/projects/portfolio/1.webp",
          "/projects/portfolio/2.webp",
          "/projects/portfolio/3.webp",
          "/projects/portfolio/4.webp",
          "/projects/portfolio/5.webp",
          "/projects/portfolio/6.webp",
        ],
        previewVideos: [
          "https://video-proxy-worker.alvs131313.workers.dev/portfolio-video-4k/output.m3u8",
        ],
      },
      {
        title: "Genzify AI",
        description:
          "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
        logo: "/projects/genz/genz-logo.webp",
        thumbnail: "/projects/genz/genz-thumbnail.webp",
        repoLink: "https://github.com/auroradream04/genzify-app",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <RiOpenaiFill className="text-[#412991]" />,
            name: "OpenAI API",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
          {
            icon: <SiShadcnui className="text-[#FFF]" />,
            name: "Shadcn/UI",
          },
        ],
        link: "https://genzify-app-wine.vercel.app/",
        previewImages: [
          "/projects/genz/1.webp",
          "/projects/genz/2.webp",
          "/projects/genz/3.webp",
          "/projects/genz/4.webp",
          "/projects/genz/5.webp",
        ],
        previewVideos: [
          "https://video-proxy-worker.alvs131313.workers.dev/genz-video-4k/output.m3u8",
        ],
      },
      {
        title: "WhatAboutPets",
        description:
          "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
        logo: "/projects/whataboutpets/whataboutpets-logo.webp",
        thumbnail: "/projects/whataboutpets/whataboutpets-thumbnail.webp",
        repoLink: "",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <RiWordpressFill className="text-[#21759B]" />,
            name: "WordPress",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiShadcnui className="text-[#FFF]" />,
            name: "Shadcn/UI",
          },
          {
            icon: <GrGraphQl className="text-[#E10098]" />,
            name: "GraphQL",
          },
          {
            icon: <SiWoocommerce className="text-[#96588A]" />,
            name: "Woocommerce",
          },
        ],
        link: "https://whataboutpets.com",
        previewImages: [
          "/projects/whataboutpets/1.webp",
          "/projects/whataboutpets/2.webp",
          "/projects/whataboutpets/3.webp",
          "/projects/whataboutpets/4.webp",
          "/projects/whataboutpets/5.webp",
          "/projects/whataboutpets/6.webp",
        ],
        previewVideos: [
          "https://video-proxy-worker.alvs131313.workers.dev/whataboutpets-video-4k/output.m3u8",
        ],
      },
      {
        title: "Plaiful - AI Agent Directory",
        description:
          "Developed for a client, Plaiful is a comprehensive AI agent directory platform built on Next.js. This project involved significant customization of the OpenAlternative codebase to create a dedicated platform for discovering and comparing AI agents focused on the banking and credit union sector. I implemented advanced filtering, search capabilities, and built a modern, intuitive interface for users to easily find AI solutions tailored to their specific needs.",
        logo: "/projects/plaiful/plaiful-logo.webp",
        thumbnail: "/projects/plaiful/plaiful-thumbnail.webp",
        repoLink: "https://github.com/Plaifully/Plai",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiPrisma className="text-[#2D3748]" />,
            name: "Prisma",
          },
          {
            icon: <SiSupabase className="text-[#0084d4]" />,
            name: "Supabase",
          },
        ],
        link: "https://plai-web.vercel.app/",
        previewImages: [
          "/projects/plaiful/1.webp",
          "/projects/plaiful/2.webp",
          "/projects/plaiful/3.webp",
          "/projects/plaiful/4.webp",
          "/projects/plaiful/5.webp",
          "/projects/plaiful/6.webp",
        ],
        previewVideos: [
          "https://video-proxy-worker.alvs131313.workers.dev/plaiful-video-4k/output.m3u8",
        ],
      },
      {
        title: "Zambia Casino",
        description:
          "Built for a client, Zambia Casino is a sleek landing page for an online casino targeting the Zambian market. I designed and developed a responsive, high-performance site that effectively showcases the casino's offerings, promotions, and games. The project emphasizes strong visual elements, fast loading times, and intuitive navigation to optimize user engagement and conversion rates in the competitive online gambling space.",
        logo: "/projects/zambia/zambia-logo.webp",
        thumbnail: "/projects/zambia/zambia-thumbnail.webp",
        repoLink: "",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiFramer className="text-[#0055FF]" />,
            name: "Framer Motion",
          },
          {
            icon: <SiShadcnui className="text-[#FFF]" />,
            name: "Shadcn/UI",
          },
        ],
        link: "https://zambia-casino.vercel.app/",
        previewImages: [
          "/projects/zambia/1.webp",
          "/projects/zambia/2.webp",
          "/projects/zambia/3.webp",
          "/projects/zambia/4.webp",
          "/projects/zambia/5.webp",
          "/projects/zambia/6.webp",
          "/projects/zambia/7.webp",
        ],
        previewVideos: [
          "https://video-proxy-worker.alvs131313.workers.dev/zambia-video-4k/output.m3u8",
        ],
      },
    ],
    technologies: {
      main: [
        {
          name: "Next.js",
          icon: <RiNextjsFill className="text-[#FFF]" />,
          description: "A React framework",
        },
        {
          name: "React",
          icon: <SiReact className="text-[#61DAFB]" />,
          description: "A JavaScript UI library",
        },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
          description: "A CSS framework",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
          description: "Typed Javascript",
        },
        {
          name: "Git",
          icon: <SiGit className="text-[#F05032]" />,
          description: "A version control system",
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-[#4a5b77]" />,
          description: "An ORM for databases",
        },
        {
          name: "WordPress",
          icon: <RiWordpressFill className="text-[#21759B]" />,
          description: "A CMS for websites",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
          description: "A Node.js framework",
        },
        {
          name: "Puppeteer",
          icon: <SiPuppeteer className="text-[#7a56f1]" />,
          description: "A library for browser automation",
        },
      ],
      other: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <SiCss3 className="text-[#009df7]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "NodeJS",
          icon: <SiNodedotjs className="text-[#339933]" />,
        },
        {
          name: "PHP",
          icon: <SiPhp className="text-[#5d6dad]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#5798ca]" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="text-[#0084d4]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" />,
        },
        {
          name: "Redis",
          icon: <DiRedis className="text-[#DC382D]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-[#E10098]" />,
        },
        {
          name: "RESTful API",
          icon: <TbApi className="text-[#FF5733]" />,
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="text-[#0055FF]" />,
        },
        {
          name: "Three.js",
          icon: <SiThreedotjs className="text-[#FFF]" />, // ORIGINALLY BLACK
        },
        {
          name: "WooCommerce",
          icon: <SiWoocommerce className="text-[#96588A]" />,
        },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="text-[#61DAFB]" />,
        },
        {
          name: "Electron",
          icon: <SiElectron className="text-[#47848F]" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-[#2496ED]" />,
        },
        {
          name: "Shadcn/UI",
          icon: <SiShadcnui className="text-[#FFF]" />,
        },
        {
          name: "Drizzle",
          icon: <SiDrizzle className="text-[#00A7E1]" />,
        },
      ],
    },
  },
};
