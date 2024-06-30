"use client";

import { navItems, workExperience } from "@/data";
import Spline from "@splinetool/react-spline/next";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Button } from "@/components/ui/MovingBorders";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             //   random duration will be fun , I think , may be not
//             duration={Math.floor(Math.random() * 10000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             // remove bg-white dark:bg-slate-900
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

const WorkExperienceTile = ({ card }: { card: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      ng-repeat="itembx"
      className="rb-item flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 relative"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* <div className="timestamp font-semibold">
        {card.start} - {card.end}
      </div> */}

      <h1 className="text-start text-xl md:text-3xl font-bold text-nowrap">
        <span className="text-sm text-nowrap">
          {" "}
          {card.start + " - " + card.end}
        </span>{" "}
        <br />
        {card.title}
      </h1>
      <div className="item-title text-start text-md  text-white-100 mt-3 font-semibold">
        {card.position}
      </div>
      <div className="flex items-center">
        {card.skills.map((icon, index) => (
          <div
            key={index}
            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            style={{
              transform: `translateX(-${5 * index + 2}px)`,
            }}
          >
            <img src={icon} alt="icon5" className="p-2" />
          </div>
        ))}
      </div>
      {isExpanded && (
        <AnimatePresence>
          <motion.ul
            className={cn("text-start text-white-100 mt-3 font-semibold")}
            // use isExpanded to toggle the animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {card.points.map((res) => (
              <li className="points">
                {" "}
                <circle className="text-white-100 mr-2">•</circle>
                <span className="text-white-100 md:text-sm text-xs">{res}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </li>

    // <div
    //   key={card.id}
    //   //   random duration will be fun , I think , may be not
    //   // duration={Math.floor(Math.random() * 10000) + 10000}
    //   // borderRadius="1.75rem"
    //   // style={{
    //   //   //   add these two
    //   //   //   you can generate the color from here https://cssgradient.io/
    //   //   // background: "rgb(4,7,29)",
    //   //   background:
    //   //     "linear-gradient(97deg, rgb(91 44 255 / 20%) 0%, rgb(255 255 255 / 0%) 100%);",
    //   //   borderRadius: "calc(1.75rem* 0.96);",
    //   // }}
    //   // remove bg-white dark:bg-slate-900
    //   className="flex-1 min-h-[20vh] text-black dark:text-white border-neutral-200 dark:border-slate-800 relative"
    // >
    //   <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
    //     {/* <img
    //                     src={card.thumbnail}
    //                     alt={card.thumbnail}
    //                     className="lg:w-32 md:w-20 w-16"
    //                   /> */}
    //     <div className="lg:ms-5">
    //       <h1 className="text-start text-xl md:text-2xl font-bold">
    //         {card.title}{" "}
    //         <span className="text-sm"> {card.start + " - " + card.end}</span>
    //       </h1>
    //       {/* position */}
    //       <h2 className="text-start text-md  text-white-100 mt-3 font-semibold">
    //         {card.position}
    //       </h2>
    //       <div className="flex items-center">
    //         {card.skills.map((icon, index) => (
    //           <div
    //             key={index}
    //             className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
    //             style={{
    //               transform: `translateX(-${5 * index + 2}px)`,
    //             }}
    //           >
    //             <img src={icon} alt="icon5" className="p-2" />
    //           </div>
    //         ))}
    //       </div>
    //       <p className="text-start text-white-100 mt-3 font-semibold">
    //         {card.desc}
    //       </p>
    //       {isExpanded && (
    //         <AnimatePresence>
    //           <motion.ul
    //             className={cn("text-start text-white-100 mt-3 font-semibold")}
    //             // use isExpanded to toggle the animation
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             exit={{ opacity: 0 }}
    //           >
    //             {card.points.map((res) => (
    //               <li>
    //                 {" "}
    //                 <circle className="text-white-100 mr-2">•</circle> {res}
    //               </li>
    //             ))}
    //           </motion.ul>
    //         </AnimatePresence>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

const Home = () => {
  const roboCursorFollowRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // const ctx = gsap.context(() => {
    //   const races = document.querySelector(".races");
    //   function getScrollAmount() {
    //     let racesWidth = races?.scrollWidth;
    //     return -(racesWidth - window.innerWidth);
    //   }
    //   const tween = gsap.to(races, {
    //     x: getScrollAmount,
    //     duration: 3,
    //     ease: "none",
    //   });
    //   ScrollTrigger.create({
    //     trigger: ".racesWrapper",
    //     start: "20% 20%",
    //     end: () => `+=${getScrollAmount() * -1}`,
    //     pin: true,
    //     animation: tween,
    //     scrub: 1,
    //     invalidateOnRefresh: true,
    //     markers: true,
    //   });
    // });
    // return () => ctx.revert();
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl section-container " role="main">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <div className="py-20">
          <h1 className="heading mb-4">Work Experience</h1>
          <div
            className="overflow-hidden rounded-3xl border fbg-black-100 border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none       
            w-full h-fit
          "
          >
            <div className="relative racesWrapper h-[80vh] items-end w-full overflow-hidden flex flex-col">
              {/* <div className="top-0 left-0 w-full h-full bg-black-100 absolute z-10">
            <h1 className="text-4xl font-bold text-center text-white-100 mt-20">
              Work Experience
            </h1>
          </div> */}
              <div
                ref={roboCursorFollowRef}
                className="absolute top-0 bottom-0 left-0 w-full h-full !z-[1]"
                style={{
                  mixBlendMode: "difference",
                }}
              >
                <Spline
                  className=" bg-black-100"
                  scene="https://prod.spline.design/JP35IUVB4cFB3PMF/scene.splinecode"
                />
              </div>
              <div
                className="rightbox md:!top-[4rem] md:!left-[4rem] top-[2rem] left-[2rem]"
                onClick={(e) => {
                  // pass the event to the parent
                  e.stopPropagation();
                  const customEvent = new MouseEvent("click", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                  });
                  roboCursorFollowRef.current.dispatchEvent(customEvent);
                }}
              >
                <div className="rb-container">
                  <ul className="rb">
                    {workExperience.map((card) => (
                      <WorkExperienceTile card={card} />
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="h-full w-full flex flex-col items-start justify-around gap-x-12 ">
                {workExperience.map((card) => (
                  <WorkExperienceTile card={card} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
