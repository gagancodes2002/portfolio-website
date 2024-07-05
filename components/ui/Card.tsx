import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

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
interface Props {
  name: string;
  image: string;
  animate?: boolean;
}

export default function Card({ name, image, animate = true }: Props) {
  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={cn(
        " flex items-center justify-center relative px-2 card-container group ",
        animate && "col-span-1"
      )}
      {...(animate
        ? {
            initial: "offscreen",
            whileInView: "onscreen",
            viewport: { once: true, amount: 0.8 },
          }
        : {})}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 clip-path-[path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')] "
        // style={{ background }}
      />
      <motion.div
        className="relative flex items-center justify-start  min-w-72 h-36  rounded-xl shadow-2xl transform-origin-[10% 60%] bg-gradient-to-br from-[#1f1f1f] to-[#2f2f2f] dark:from-[#352489] dark:to-[#020a3e] sm-max:h-16 sm-max:min-w-40"
        // variants={cardVariants}

        {...(animate
          ? {
              variants: cardVariants,
            }
          : {})}
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
