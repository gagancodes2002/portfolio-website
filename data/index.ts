export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack",
    description:
      "I am always adapting to new technologies and learning new things.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    spareImg: "",
  },
  {
    id: 2,
    title: "I prioritize user experience and performance",
    // Write something about adapting to new technologies
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    spareImg: "",
    img: "/b1.svg",
  },
  {
    id: 3,
    //write something about international clients
    title: "Have worked with International clients",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "A tech enthusiast with a knack of developing Chrome extensions ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Instagram analytics tool ",
    description: "Sneek peek",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Insta Insight",
    des: "Insta-Insight is your backstage pass to Instagram Reels data. Whether you’re a content creator, influencer, or social media manager, this powerful browser extension empowers you to make informed decisions and supercharge your Reels strategy.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/chrome.svg"],
    link: "https://chromewebstore.google.com/detail/insta-insight/pknilpgbmejebohnilnmdmhjkmjddajf",
  },
  {
    id: 2,
    title: "Tokaudit",
    des: "5K+ users, Sort videos of TikTok users, Analyze, Download & Audit any TikTok profile in seconds. #1 TikTok Extension TikTok Creators & Brands.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/sass.svg", "/ts.svg", "/chrome.svg"],
    link: "https://www.tokaudit.io/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote: `I work with a lot of Upworkers and this guy ... this guy right here has hands down been the best experience
I've ever had. Extreme attention to detail, was able to execute every single thing I wanted AND he knew
how to project manage himself and anticipate what I would want and need before I even thought of it. This
has been the best experience and I will Absolutley be working with him several times in the near future.
Thank you again!`,
    name: "Michael Hernsin",
    title: "Upwork Client, California",
    profile: "/profile.svg",
  },
  {
    quote:
      "Gagan bindoria is very talented and hard working guy absoluetly recommended..",
    name: "Sadab Ahmad",
    title: "Upwork Client, Lucknow",
    profile: "/person.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Cognavi Pvt Ltd.",
    start: "2023 June",
    end: "Present 👨‍💻",
    position: "Frontend Enginner",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    skills: [
      {
        name: "Next.js",
        img: "/next-js.svg",
      },
      {
        name: "React",
        img: "/react.svg",
      },
      {
        name: "Tailwind",
        img: "/tail.svg",
      },
      {
        name: "Redux",
        img: "/redux.svg",
      },
      {
        name: "TypeScript",
        img: "/ts.svg",
      },
      {
        name: "Framer Motion",
        img: "/framer.svg",
      },
      {
        name: "GSAP",
        img: "/gsap.svg",
      },
    ],
    thumbnail: "/exp2.svg",
    points: [
      `Spearheaded development of an AI facilitated recruitment booster interface at Cognavi India Pvt.
Ltd.`,
      `Leveraged Next.js, React Query / Redux, Tailwind and TypeScript to create a dynamic and
efficient platform.`,
      `Translated complex requirements into user-friendly features.`,
      ` Demonstrated innovation and problem-solving skills effectively `,
    ],
  },
  {
    id: 2,
    title: "Orgzit ",
    start: "2022 Feb",
    end: "2023 May",
    position: "Frontend Developer",
    desc: "Played a key role in frontend development at Orgzit CRM, a small-scale enterprise.",
    className: "md:col-span-2",
    skills: [
      {
        name: "Backbone.js",
        img: "/backbone.svg",
      },
      {
        name: "jQuery",
        img: "/jquery.svg",
      },
      {
        name: "Sass",
        img: "/sass.svg",
      },
    ],
    thumbnail: "/exp1.svg",
    points: [
      `Stepped into a pivotal role in frontend development at Orgzit CRM, a small-scale enterprise.`,
      `Took on additional responsibilities such as working with React Native for the Android and iOS app.`,
      `Utilized Sentry for monitoring bugs in the CRM and effectively debugging them.`,
      `Ensured the web app was mobile-friendly by building responsive designs.`,
      `Crafted impactful features using technologies like Backbone.js, jQuery, SCSS.`,
    ],
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   skills: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/gagancodes2002",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/GBindoria400",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gaganbindoria-v8/",
  },
  {
    id: 4,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/gaganbindoria/",
  },
];
