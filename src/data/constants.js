import avmLogo from "../images/avm.jpg";
import Wpic from "../images/weather_app.png";
import FTPpic from "../images/FTP.png";
import Apic from "../images/Apic.png";
import chrpic from "../images/chrpic.png";
import Cpic from "../images/Cpic.png";
import dPic from "../images/dPic.webp";
export const Bio = {
  name: "Saikiran",
  roles: [
    "Full Stack Developer",
    "Android Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Hackersaikiran",
  resume:
    "https://drive.google.com/file/d/1ZiZ62Vq_evySTF4PI0YqR-Z10jsj6fJd/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/saikiran18/",
  
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
  
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/jpeg;base64,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",
      },
      
      {
        name: "Figma",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];

export const experiences = [
  {
    
  id: 0,
  img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEVHcEwGIjcadsISdcEQdMAcd8MUdcELc78Ccb0AcbwgecUJc74Hcr4TdMAXgtcre8cbdsICcbwve8cXdsIqesYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMc78AAAAAAAAieMQAAAAfd8QAAAAXdsIAAAAAAAAJL00AAAAAAAASd8QzfMgAAAAAAADHrbZ5AAAAMHRSTlMACmeSTn////8psaTQ8xUy/7jMdf8YTyI8fLz+/+2x5nD4/5fe1zqGYZWo3sH/Q46qBhJqAAAA/0lEQVR4Aa3QRZaFMBRF0Ys7pHCH7wrMf3aVhQZp/t090Ycf4HhBEHFMkhWV0nBAp8kwDFPlsMMrqmUDjmQI2CEqcYZVf7smKrKLnubtoqH6EhCEEWDvoqn4POIkzfKiDLFRyb6HOh+cNtkiZ50r88kFrCs5+7jlsyRY2l0n5Cw88sVzibx3plVitl6WewX7fJZlor/e5WeIabLMQHR9IlNfIOzj54HZ1/F9WaEEoL/6xsS7pzcNUVWlAuKcejMRvHhtGl9WTeDZ/+UJxp1W6g58aMtqMJ4AeNd1gHe/MQaDK4ahtJ/+IxxYtOZ5UeS9N3aSfPBpcSROuu4Z4Rf+ATbgG1jbTYexAAAAAElFTkSuQmCC", // Replace with your Octanet logo or relevant image link
  role: "Web Development Intern",
  company: "Octanet Services Pvt. Ltd.",
  date: "May 2024 - Jun 2024",
  desc: "Completed a hands-on internship involving landing page and to-do list web apps, participated in learning sessions, and enhanced frontend development skills.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Frontend Design",
    "Responsive Web Design"
  ],
  doc: "https://drive.google.com/file/d/1wad1UMSzAfsO_LdkeU9ufc9Eoay_rY9T/view?usp=sharing" // Replace with your Octanet certificate or portfolio link
},
{
  id: 0,
  img: "https://yt3.googleusercontent.com/l7Pfr47b8sGLoa0m13On6sHt9STatMi3kuO0k67HxxmkqkvoDHerkU_vqmO0cs9jvFjPEqG3Fg=s900-c-k-c0x00ffffff-no-rj", // Replace with Codetech IT Solutions logo or relevant image
  role: "MERN Stack Developer Intern",
  company: "Codetech IT Solutions",
  date: "Jun 2025 - Jul 2025",
  desc: "Developed full-stack web applications using the MERN stack, collaborated on real-time projects, and integrated RESTful APIs to build dynamic and responsive user interfaces.",
  skills: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "REST APIs",
    "JavaScript",
    "Git",
    "Postman"
  ],
  doc: "https://drive.google.com/file/d/1vYEp5D-MUAU6JTHW6nQHuvjoVppJ4khF/view?usp=sharing" 
},
];

export const education = [
  {
    id: 0,
    img: "https://images.shiksha.com/mediadata/images/1652957451phpTc4nIn.jpeg",
    school: "Vignan's Institute of Information Technology, Visa",
    date: "Nov 2022 - Aug 2026",
    grade: "9.18 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Information Technology at Vignan's Institute of Information Technology, Visakhapatnam. I have completed 3 semisters and have a CGPA of 9.18. I have taken courses in Data Structures Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. ",
    degree: "Bachelor of Technology - BTech, Information Technology",
  },
  {
    id: 1,
    img: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/f5c3375df2dceaeb432aac100fa95641",
    school: "Sri Chaitanya Junior College, Visakhapatnam",
    date: "Apr 2020 - Apr 2022",
    grade: "91.9%",
    desc: "I completed my class 12 high school education at Sri Chaitanya Junior College, where I scored 91.9% in the board exams.",
    degree: "Board of Intermediate Education, Andhra Pradesh – MPC Stream",
  },
  {
    id: 2,
    img: avmLogo,
    school: "AVM EM School, Visakhapatnam",
    date: "Apr 2014 - Apr 2020",
    grade: "97.3%",
    desc: "I completed my class 10 education at AVM School, Visakhapatnam. I achieved a score of 97.3% in my SSC board exams.",
    degree: "Secondary School Certificate (SSC), Andhra Pradesh",
  },
];

export const projects = [
  {
    id: 9,
    title: "AI Summarise Chrome Extension",
    date: "Mar 2025 - Apr 2025",
    description:
      "AI Summarise Chrome Extension is a productivity tool designed to help users quickly grasp the key insights from any web content. With just a single click, it uses advanced AI to generate concise and accurate summaries of articles, blogs, research papers, or lengthy documents. The extension ensures users save time, avoid information overload, and stay focused on what really matters. Built with React and powered by intelligent algorithms, it delivers clean, user-friendly interactions right within the browser. This makes it an essential tool for students, professionals, and avid readers who want to enhance their online reading efficiency.",
    image:
      chrpic,
    tags: [
     "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Manifest v3",
    "Chrome Extension APIs",
    "Axios",
    "OpenAI API",
   "Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Chrome_extension",
   
  },
  {
    id: 0,
    title: "AI-ToolHub",
    date: "Dec 2024 - Jun 2025",
    description:
      "AI Tool Hub is your one-stop destination for discovering and exploring AI tools. Built during Sus Hacks 2024, this platform helps users navigate through various AI solutions by matching their specific needs with the right tools.Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
     Apic,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Tailwind CSS",],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Ai-ToolHub",
    webapp: "",
    member: [
      {
        name: "E.Saikiran",
        img: "",
        linkedin: "",
        github: "https://github.com/Hackersaikiran/",
      },
      {
        name: "G.Jathin",
        img: "",
        linkedin: "",
        github: "https://github.com/Jathin321/",
      },
      {
        name: "CH.Yugandhar",
        img: "",
        linkedin: "",
        github: "https://github.com//",
      },
      {
        name: "K.Bangarraju",
        img: "",
        linkedin: "",
        github: "https://github.com//",
      },
    
    ],
  },
  {
    id: 9,
    title: "Real-Time Chat Application",
    date: "Jun 2025 - July 2025",
    description:
      "Realtime ChatApp is a modern web application designed to enable seamless and instant communication between users. It provides a fast, secure, and responsive platform where individuals or groups can exchange messages in real time. With an intuitive user interface, users can easily connect, share information, and collaborate without delays. The app is ideal for both casual conversations and professional team interactions, offering a smooth and engaging chat experience.",
    image:
      Cpic,
    tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Socket.io",
    "JWT",
    "Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Real-time-Chat-app",
   
  },
  {
    id: 9,
    title: "Find the Product",
    date: "Apr 2024 - Jun 2024",
    description:
      "Find the Product is a smart web application built to simplify the product discovery process for users. It helps users efficiently search and compare items across various categories and stores, saving both time and effort. With a clean and responsive user interface, users can explore products, view detailed information, and make informed purchasing decisions. The platform is ideal for both casual shoppers and tech-savvy users looking for an optimized shopping experience.",
    image:
      FTPpic,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Nodejs",
      "MongoDB",
      "Expressjs",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/Find-the-product",
   
  },
  
  {
    id: 9,
    title: "Weather App",
    date: "Mar 2025 - Apr 2025",
    description:
      "Weather App is a user-friendly application that provides real-time weather updates for any location worldwide. It displays essential details such as temperature, humidity, wind speed, and weather conditions in an intuitive interface. With features like location search and responsive design, users can quickly check forecasts on both desktop and mobile devices. This app is perfect for anyone who wants quick and accurate weather insights before planning their day.",
    image:
      Wpic,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "OpenWeather API"
    ],
    category: "web app",
    github: "https://github.com/Hackersaikiran/weather_app",
   
  },
  {
    id: 9,
    title: "Doomscrolling Reduction App",
    date: "Jun 2025 - NA",
    description:
      "coming soon...",
    image:
     dPic,
    tags: [
    
    ],
    category: "android app",
    github: "https://github.com/Hackersaikiran/Hackersaikiran.github.io",
   
  },
  
];

export const TimeLineData = [
  { year: 2022, text: "Started my journey" },
  { year: 2023, text: "Started exploring web development and programming" },
  { year: 2024, text: "Gained knowledge in MERN stack and c++ language" },
  { year: 2025, text: "Started building projects" },
];
