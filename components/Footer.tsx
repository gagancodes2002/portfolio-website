import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampContainer } from "./ui/LampContainer";

const Footer = () => {
  return (
    <section className="w-full" id="contact">
      {/* background grid */}
      <div className="top-0 left-0 absolute w-full h-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      {/* <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div> */}
      <LampContainer>
        <div className=" flex md:flex-row flex-col justify-center items-center">
          <div className=" flex items-center justify-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                onClick={() => window.open(info.link, "_blank")}
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </LampContainer>
    </section>
  );
};

export default Footer;
