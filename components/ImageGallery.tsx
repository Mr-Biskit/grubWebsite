"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const imageVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -40, transition: { duration: 1 } },
};

export default function ImageGallery() {
  const images = [
    "/foodImages/food1.jpeg",
    "/foodImages/beer1.jpeg",
    "/foodImages/food2.jpeg",
    "/foodImages/beer2.jpeg",
    "/foodImages/food3.jpeg",
    "/foodImages/beer3.jpeg",
    "/foodImages/food4.jpeg",
    "/foodImages/beer4.jpeg",
    "/foodImages/food5.jpeg",
    "/foodImages/beer5.jpeg",
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-screen flex flex-col  bg-">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ type: "spring", stiffness: 100 }}
        variants={imageVariants}
        className="grid grid-cols-2 lg:grid-cols-5 "
      >
        {images.map((image, key) => (
          <Image
            key={key}
            alt="food"
            src={image}
            width={400}
            height={400}
            className="w-80 h-60"
          />
        ))}
      </motion.div>
      <div className="w-screen  p-4  items-center justify-between flex bg-black">
        {/*  */}
        <div className="bg-white h-2 w-1/3 ml-3" />
        <Link
          href="/"
          className="items-center justify-center bg-white p-2 rounded-lg animate-pulse"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            alt="insta"
            src="/foodImages/insta.png"
            width={60}
            height={60}
          />
        </Link>
        <div className="bg-white h-2 w-1/3 mr-3" />
      </div>
    </div>
  );
}
