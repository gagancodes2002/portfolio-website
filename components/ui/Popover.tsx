import { motion } from "framer-motion";
import React from "react";
import { useAppDataContext } from "../context";
export default function Popover({ children }: { children: React.ReactNode }) {
  const { mutateState } = useAppDataContext();

  return (
    <motion.div
      onClick={() => {
        mutateState({ isModalOpen: false });
      }}
      //   fade in animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      //   glass background blur
      className="fixed flex h-[100vh] items-center justify-center  inset-0 z-[6000] bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
    >
      {children}
    </motion.div>
  );
}
