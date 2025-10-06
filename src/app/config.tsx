import { FaGithub, FaFacebook } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareXTwitter,
  FaDiscord,
  FaThreads,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiBluesky, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { HiEnvelope } from "react-icons/hi2";
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
    "Full‑stack developer building products at the intersection of elegant frontend experiences and robust backend systems. Shipping end‑to‑end features across authentication, billing, and scalable databases with JavaScript, TypeScript, React, Next.js, Redux, Supabase, Postgres, Stripe, Auth.js, and Resend—balancing performance, usability, and clean architecture.",
  keywords:
    "Muhammad Ramzan Nasir, web developer, frontend development, JavaScript, TypeScript, React, Next.js, Redux, HTML5, CSS3, Sass",
  url: "https://nasir-dev-portfolio.vercel.app",
  taglines: [
    "🚀 Web Developer @ Nexobe | Specializing in JavaScript & TypeScript",
    "🎨 Crafting responsive, user-friendly, and visually engaging web applications",
    "💡 Turning complex UI/UX designs into clean, efficient, and maintainable code",
  ],
  titles: [
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Postgres",
  ],
  socialLinks: [
    {
      icon: <HiEnvelope size={19} />,
      url: "mailto:mrammzannasir555@gmail.com",
    },
    {
      icon: <FaLinkedin size={19} />,
      url: "https://www.linkedin.com/in/muhammad-ramzan-nasir-a60510211/",
    },
    {
      icon: <FaFacebook size={19} />,
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
            I build products that live at the intersection of elegant frontend experiences and robust backend systems. Over the past year, I’ve evolved from a frontend-focused developer into a full-stack engineer, working across authentication, billing, databases, and modern development tooling.
          </p>
            <br />
            <p>
              My toolkit spans JavaScript, TypeScript, React, Next.js, and Redux, combined with Supabase, Postgres, Stripe, Auth.js, Resend, and Resolve ORM on the backend. I’m fluent in building authentication flows, integrating payments, and shaping scalable database structures.
            </p>
            <br />
            <p>
              I work in fast-paced environments, shipping end-to-end features that balance performance, usability, and clean architecture. I enjoy navigating complex technical problems, whether that’s designing UI with Chakra UI and TanStack Router or architecting backend logic with tRPC and monorepos.
            </p>
            <br />
            <p>
              Always learning. Always building. 🚀
            </p>
        `,
    experiences: [
      {
        company: "Nexobe",
        position:
          "Web Developer @ Nexobe | Specializing in JavaScript & TypeScript",
        duration: "2024 Oct- Present",
        description:
          "Working as a Web Developer at Nexobe, contributing to AI-driven products using TypeScript and JavaScript. Built responsive, scalable solutions across brands like, Otteri AI,  pikcel AI and Snap.photo to enhance user experience and functionality.",
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
        title: "Phantom",
        description:
          "A dynamic digital agency landing page with smooth scroll-driven animations and immersive style. Crafted using Next.js, Tailwind CSS, and Framer Motion for a bold, interactive feel.",
        logo: "/projects/phantom/logo.webp",
        thumbnail: "/projects/phantom/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/Phantom.git",
        technologies: [
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          { icon: <SiFramer />, name: "Framer Motion" },
        ],
        link: "https://phantom-theta.vercel.app/",
        previewImages: [
          "/projects/phantom/1.png",
          "/projects/phantom/2.png",
          "/projects/phantom/3.png",
        ],
        previewVideos: [],
      },
      {
        title: "E-Commerce Front‑End",
        description:
          "A clean and responsive storefront demo featuring intuitive product layouts and streamlined navigation. Built with React and Tailwind CSS, it focuses on modular design and rapid performance.",
        logo: "/projects/ecommerce/logo.webp",
        thumbnail: "/projects/ecommerce/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/ecommerce-front-end.git",
        technologies: [
          { icon: <SiReact />, name: "React" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        link: "https://ecommerce-front-end-mu.vercel.app/",
        previewImages: [
          "/projects/ecommerce/1.png",
          "/projects/ecommerce/2.png",
          "/projects/ecommerce/3.png",
        ],
        previewVideos: [],
      },

      {
        title: "NFT Dashboard",
        description:
          "An interactive analytics dashboard for NFTs, featuring intuitive UI components and real‑time layout. Built with React and Tailwind CSS to organize and display NFT data cleanly.",
        logo: "/projects/nft-dashboard/logo.webp",
        thumbnail: "/projects/nft-dashboard/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/nft_dashboard.git",
        technologies: [
          { icon: <SiReact />, name: "React" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        link: "https://nft-dashboard-5tn8.vercel.app/",
        previewImages: [
          "/projects/nft-dashboard/1.png",
          "/projects/nft-dashboard/2.png",
          "/projects/nft-dashboard/3.png",
        ],
        previewVideos: [],
      },
      {
        title: "Furniro (Imtiaz Furniture)",
        description:
          "A stylish furniture showcase featuring animated transitions and modern layout for enhanced product exploration. Built with React and Framer Motion for a fluid, engaging UI.",
        logo: "/projects/furniro/logo.webp",
        thumbnail: "/projects/furniro/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/imtiaz-furniro.git",
        technologies: [
          { icon: <SiReact />, name: "React" },
          { icon: <SiFramer />, name: "Framer Motion" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        link: "https://imtiaz-furniro.vercel.app/",
        previewImages: [
          "/projects/furniro/1.png",
          "/projects/furniro/2.png",
          "/projects/furniro/3.png",
        ],
        previewVideos: [],
      },
      {
        title: "Unda Quest",
        description:
          "A bold, adventure-inspired landing page with vibrant visuals and dynamic animations. Built with React and Framer Motion to create an immersive first impression.",
        logo: "/projects/unda-quest/logo.webp",
        thumbnail: "/projects/unda-quest/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/unda_quest.git",
        technologies: [
          { icon: <SiReact />, name: "React" },
          { icon: <SiFramer />, name: "Framer Motion" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        link: "https://unda-quest.vercel.app/",
        previewImages: [
          "/projects/unda-quest/1.png",
          "/projects/unda-quest/2.png",
          "/projects/unda-quest/3.png",
        ],
        previewVideos: [],
      },
      {
        title: "Ready Sell",
        description:
          "A minimalist product landing page optimized for speed and conversions with smooth scroll and clean layout. Built with Next.js and Tailwind CSS for responsiveness and swift performance.",
        logo: "/projects/ready-sell/logo.webp",
        thumbnail: "/projects/ready-sell/thumbnail.webp",
        repoLink: "https://github.com/im-nasirr/ready-sell",
        technologies: [
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        ],
        link: "https://ready-sell.vercel.app/",
        previewImages: [
          "/projects/ready-sell/1.png",
          "/projects/ready-sell/2.png",
          "/projects/ready-sell/3.png",
        ],
        previewVideos: [],
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
        // {
        //   name: "Prisma",
        //   icon: <SiPrisma className="text-[#4a5b77]" />,
        //   description: "An ORM for databases",
        // },
        // {
        //   name: "WordPress",
        //   icon: <RiWordpressFill className="text-[#21759B]" />,
        //   description: "A CMS for websites",
        // },
        {
          name: "Express.js",
          icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
          description: "A Node.js framework",
        },

        // {
        //   name: "Puppeteer",
        //   icon: <SiPuppeteer className="text-[#7a56f1]" />,
        //   description: "A library for browser automation",
        // },

        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "NodeJS",
          icon: <SiNodedotjs className="text-[#339933]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" />,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <SiCss3 className="text-[#009df7]" />,
        },
        {
          name: "Shadcn/UI",
          icon: <SiShadcnui className="text-[#FFF]" />,
        },
      ],
      other: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26]" />,
        },

        // {
        //   name: "MySQL",
        //   icon: <SiMysql className="text-[#5798ca]" />,
        // },
        // {
        //   name: "Supabase",
        //   icon: <SiSupabase className="text-[#0084d4]" />,
        // },

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
          name: "Drizzle",
          icon: <SiDrizzle className="text-[#00A7E1]" />,
        },
      ],
    },
  },
};
