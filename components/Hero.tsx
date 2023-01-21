"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
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
    <div className="w-full h-screen flex ">
      <div>
        <video autoPlay loop muted className="w-full h-1/2 object-cover ">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="bg-hero-pattern bg-cover bg-center w-screen h-full ">
          <div className="bg-hero-pattern  w-40 h-40 rounded-full absolute bg-cover left-[50%] transform -translate-x-1/2 bottom-28 justify-center items-center">
            <div className="h-32 w-32 border-4 border-black rounded-full bg-white bg-opacity-60 flex justify-center absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 items-center text-center">
              <Image alt="logo" src="/logo.png" width={200} height={200} />
            </div>
          </div>
          <motion.div
            layout
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className=" w-screen items-center h-20 justify-center text-center lg:text-4xl text-lg absolute  bottom-5 p-3"
          >
            <motion.div
              variants={buttonMotionUp}
              transition={{ duration: 0.5 }}
              className="w-full h-1 bg-black"
            />
            <Link
              href={"/"}
              className="lg:p-4 py-3 px-0 block font-bold text-4xl bg-white bg-opacity-60"
            >
              BOOK A TABLE
            </Link>
            <motion.div
              variants={buttonMotionDown}
              transition={{ duration: 0.5 }}
              className="w-full h-1 bg-black"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
