"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap-trial/all";
import devImage from "../../public/assets/images/dev.jpg";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ConcertPoster = ({ text }: { text: string }) => {
  const stageRef = useRef(null);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const stage = stageRef.current;
    const bandST = new SplitText(".name", {
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
          return i % 2 === 0 ? -100 : 100;
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

    window.addEventListener("resize", resize);

    init();
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="stage" ref={stageRef}>
      <div className="content">
        {[...Array(8)].map((_, index) => (
          <h1 className="band" key={index}>
            <span className="names">
              <span className="name name--red">{text}</span>
              <span className="name name--blue">{text}</span>
            </span>
            <span
              className="names"
              style={{
                marginLeft: `${(text.length + 1) * 7}rem`,
              }}
            >
              <span className="name name--red">{text}</span>
              <span className="name name--blue">{text}</span>
            </span>
          </h1>
        ))}
        <h1 className="band">
          <span className="names">
            <span className="name name--red name__end name__end--red">
              {text}
            </span>
            <span className="name name--blue name__end name__end--blue">
              {text}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeText, setActiveText] = useState("frontend");

  useEffect(() => {
    // add some parallax effect to the background text

    const stage = document.querySelector(".bg-text-stage");
    const stageHeight = stage.offsetHeight;
    const stageWidth = stage.offsetWidth;
    const stageCenterX = stageWidth / 2;
    const stageCenterY = stageHeight / 2;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const moveX = (x - stageCenterX) / 10;
      const moveY = (y - stageCenterY) / 10;

      gsap.to(".bg-text-stage", {
        x: moveX,
        y: moveY,
        duration: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // when scrolled scroll-container and about_text is in view change the activeText to "about"

    gsap.to(".bg-text-stage", {
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "center",
        scrub: 0.5,
        scroller: ".scroll-container",
        onEnter: async () => {
          setActiveText("about");

          // change the theme to some creamy color
          document.documentElement.style.setProperty(
            "--primary-color",
            "#f3f3f3"
          );
          document.documentElement.style.setProperty(
            "--secondary-color",
            "#f3f3f3"
          );
        },
        onLeaveBack: () => {
          setActiveText("frontend");
        },
      },
    });
  }, []);

  return (
    <div className="scroll-container">
      <div className="bg-text-container">
        <div className="bg-text-stage">
          <ConcertPoster text={activeText} key={activeText.toLowerCase()} />
        </div>
      </div>
      <section className="content-section ">
        <div className="container">
          <div className="position-container">
            <div className="position-details">
              <span className="light-text-small">I'm a</span>
              <span className="bright-text-big upper-position-title">
                FRONTEND <br /> DEVELOPER
              </span>
              <span className="light-text-small">based in</span>
              <span className="bright-text-big">INDIA .</span>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section ">
        <div className="container">
          <div className="about_me">
            <div className="about_image">
              <img src={devImage.src} alt="dev" />
            </div>
            <div className="about_text">
              <h1>About Me</h1>
              <p>
                I am a{" "}
                <span className="lower-position-title">Frontend Developer</span>{" "}
                based in India. I have been working in the industry for 5 years.
                I have a passion for web development and love to create
                responsive websites. I have experience working with React,
                Angular, and Vue. I am also familiar with backend technologies
                like Node.js and Express.
              </p>
              <div className="hire_actions">
                <button id="hire-me">Hire Me</button>
                <button id="resume">Resume</button>
              </div>
            </div>
          </div>
          {/* <div className="bg-text-container">
            <div className="bg-text-stage">
              <ConcertPoster text="about" key={"about"} />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
