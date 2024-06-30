import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";
import { SplitText } from "gsap-trial/SplitText";
import { Variants, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const skills = [
  "ReactJS",
  "Next.js",
  "BackboneJS",
  "Sass/Scss",
  "React Query/Redux",
  "Tailwind",
  "Bootstrap",
  "jQuery",
  "GSAP",
  "Framer Motion",
];

const Poster = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    new SplitText(".name", {
      type: "chars",
      charsClass: "bandChar",
      position: "absolute",
    });

    const intro = () => {
      let tl = gsap.timeline({
        delay: 1,
        defaults: {
          duration: 2,
          ease: "power4",
        },
      });
      tl.from(".names", {
        x: function (i) {
          return i % 2 === 0 ? 1000 : -1000;
        },
        stagger: 0.15,
      }).from(
        "p span",
        {
          y: 70,
          stagger: 0.1,
        },
        2
      );
      return tl;
    };

    const loopAnim = () => {
      let tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(".names", {
        y: -102,
        duration: 5,
        ease: "none",
      })
        .from(
          ".name__end--red .bandChar",
          {
            y: 120,
            duration: 3,
            ease: "power4",
            stagger: 0.05,
          },
          1
        )
        .from(
          ".name__end--blue .bandChar",
          {
            y: 120,
            duration: 3,
            ease: "power4",
            stagger: 0.05,
          },
          1.3
        )
        .from(
          ".band:nth-of-type(5) .name--blue .bandChar",
          {
            y: -120,
            duration: 2,
            ease: "power4.inOut",
            stagger: -0.05,
          },
          0
        )
        .to(
          ".band:nth-of-type(6) .name--blue .bandChar",
          {
            y: 120,
            duration: 2,
            ease: "power4.inOut",
            stagger: -0.05,
          },
          0
        );

      return tl;
    };

    const init = () => {
      gsap.set(stage, { autoAlpha: 1 });
      gsap.set(".content", { rotate: -25 });
      stage.onclick = () => {
        gltl.restart();
      };

      const gltl = gsap.timeline({ delay: 1 });
      gltl.add(intro());
      gltl.add(loopAnim(), 0);
    };

    const resize = () => {
      let vh = window.innerHeight;
      let sh = stage.offsetHeight;
      let scaleFactor = vh / sh;
      gsap.set(stage, { scale: scaleFactor < 1 ? scaleFactor : 1 });
    };

    // window.addEventListener("resize", resize);

    init();
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="stage ring-2 ring-slate-700 right-0 min-w-[100%] w-[100%] h-[100%]  cursor-pointer overflow-hidden invisible"
      ref={stageRef}
    >
      <div className="content absolute bottom-[0px] ring-1 ring-slate-600 right-[0px] w-[100%] h-[100%]">
        {skills.map((skill, index) => (
          <h1
            className="band relative m-0 h-[52px] font-semibold text-[35px] text-[#d71111] leading-[0.8]"
            key={index}
          >
            <span className="names block relative w-[150%] h-[120px] overflow-hidden">
              <span className="name block absolute top-0 left-0 mix-blend-multiply text-[#d71111]">
                {skill}
              </span>
              <span className="name name--blue block absolute top-[8px] left-0 mix-blend-multiply text-[#019ac5]">
                {skill}
              </span>
            </span>
          </h1>
        ))}
        <h1 className="band relative m-0 h-[102px] font-semibold text-[135px] text-[#d71111] leading-[0.8]">
          <span className="names block relative w-[150%] h-[120px] overflow-hidden">
            <span className="name name--red name__end name__end--red block absolute top-0 left-0 mix-blend-multiply text-[#d71111]">
              {skills[skills.length - 1]}
            </span>
            <span className="name name--blue name__end name__end--blue block absolute top-[8px] left-0 mix-blend-multiply text-[#019ac5]">
              {skills[skills.length - 1]}
            </span>
          </span>
        </h1>
      </div>
      <p className="date absolute bottom-[24px] left-[25px] m-0 text-[#d71111] text-[17px] leading-[1.3] text-left">
        <span className="block">tuesday</span>
        <span className="block">december 9 1980</span>
      </p>
      <p className="location absolute bottom-[24px] left-[332px] m-0 text-[#d71111] text-[17px] leading-[1.3]">
        <span className="block">at the starwood</span>
        <span className="block">west hollywood, california</span>
      </p>
      <p className="guests absolute bottom-[24px] left-[566px] m-0 text-[#d71111] text-[17px] leading-[1.3]">
        <span className="block">with fear</span>
        <span className="block">and circle jerks</span>
      </p>
    </div>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface Props {
  name: string;
  image: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ name, image }: Props) {
  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className=" flex items-center justify-center relative px-2 card-container group "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 clip-path-[path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')] "
        // style={{ background }}
      />
      <motion.div
        className="relative flex items-center justify-start  min-w-72 h-36  rounded-xl shadow-2xl transform-origin-[10% 60%] bg-gradient-to-br from-[#1f1f1f] to-[#2f2f2f] dark:from-[#352489] dark:to-[#020a3e] sm-max:h-16 sm-max:min-w-40"
        variants={cardVariants}
      >
        <div className="inline-flex items-center p-4">
          <div className=" p-4 sm-max:p-1 rounded-full bg-[#020a3d] flex  items-center justify-center shadow-lg ring-[1px] ring-slate-600/10 ">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 sm-max:h-6 sm-max:w-6"
            />
          </div>
          <span className="text-2xl font-bold text-white sm-max:text-sm  ml-4 sm-max:ml-2">
            {name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const food: [
  {
    name: string;
    img: string;
  }
][{
  name: string;
  img: string;
}] = [
  {
    name: "NextJS",
    img: "next-js.svg",
  },
  {
    name: "ReactJS",
    img: "/react.svg",
  },
  {
    name: "BackboneJS",
    img: "backbone.svg",
  },
  {
    name: "Sass",
    img: "sass.svg",
  },
  {
    name: "Redux",
    img: "redux.svg",
  },
  {
    name: "Tailwind",
    img: "tailwind.svg",
  },
  {
    name: "Bootstrap",
    img: "bootstrap.svg",
  },
  {
    name: "jQuery",
    img: "jquery.svg",
  },
  {
    name: "GSAP",
    img: "gsap.svg",
  },
  {
    name: "Framer Motion",
    img: "framer.svg",
  },
  {
    name: "NodeJS",
    img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "ExpressJS",
    img: "express.svg",
  },
  {
    name: "Git",
    img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    name: "Jira",
    img: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
  },
  {
    name: "Sentry",
    img: "https://cdn.worldvectorlogo.com/logos/sentry-1.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
  },
];

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    "ReactJS",
    "NextJS",
    "BackboneJS",
    "Sass/Scss",
    "React Query/Redux",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "GSAP",
    "Framer Motion",
  ];
  const rightLists = [
    "NodeJS",
    "MongoDB",
    "ExpressJS",
    "Git",
    "Jira",
    "Sentry",
    "Figma",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    gsap.to(".gsap-img-anim", {
      scrollTrigger: {
        trigger: "#about",
        scroller: ".scroll-container",
        start: "top top",
        scrub: 1,
        // give a zoom effect
        toggleActions: "play none none reverse",
      },
      scale: 1.2,
    });

    // scroll the left-list infinitely, from bottom to top, seamlessly and smoothly with GSAP

    // split the list into multiple parts and animate them one by one
  }, []);

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bento-grid",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 3 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center gsap-img-anim"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 3 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-20`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 3 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 1 && (
            // <div className="w-full h-full absolute !m-0 border-2 border-slate-600 top-0 left-0">
            //   <Poster />
            // </div>
            <div className=" absolute right-0 top-0 ">
              <div className="flex space-y-4 pb-6  flex-col max-h-[60rem] w-fit overflow-y-scroll">
                {food.map(({ name, img }) => (
                  <Card key={name} image={img} name={name} />
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
