import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type HeaderButtonProps = {
  title: string;
  linkhref: string;
};

export default function HeaderButton({ title, linkhref }: HeaderButtonProps) {
  const buttonMotionUp = {
    hover: {
      opacity: 1,
      y: 10,
    },
    initial: {
      opacity: 0,
      y: 30,
    },
  };

  const buttonMotionDown = {
    hover: {
      opacity: 1,
      y: -10,
    },
    initial: {
      opacity: 0,
      y: -30,
    },
  };

  return (
    <motion.li
      layout
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        variants={buttonMotionUp}
        transition={{ duration: 0.5 }}
        className="w-full h-1 bg-gray-200"
      />
      <Link href={linkhref} className="lg:p-4 py-3 px-0 block ">
        {title}
      </Link>
      <motion.div
        variants={buttonMotionDown}
        transition={{ duration: 0.5 }}
        className="w-full h-1 bg-gray-200"
      />
    </motion.li>
  );
}
