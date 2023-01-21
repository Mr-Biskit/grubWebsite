"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariantsRight = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 40, transition: { duration: 1 } },
};

const cardVariantsLeft = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -40, transition: { duration: 1 } },
};

// The reason there is a horizonatl scroll bar is because their are margins on the x -axis for elements with w-screen
export default function InfoCards() {
  return (
    <div className=" bg-hero-pattern flex w-full">
      <div className="lg:mx-20  w-full p-10 bg-white bg-opacity-60 space-y-8">
        <div className="w-full p-2 justify-beween items-center lg:flex space-y-4 lg:space-x-6">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/foodImages/food1.jpeg"
            width={200}
            height={200}
            className="rounded-lg w-[442px] h-[294px] lg:h-96 lg:w-1/2"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" lg:flex-col lg:w-1/2 items-center justify-center space-y-4"
          >
            <h1 className="lg:text-4xl text-2xl font-bold text-black ">
              HOMEMADE CRAFT BEER
            </h1>
            <p className="lg:text-lg text-base flex flex-wrap text-gray-700 ">
              Lion's Head is a open-minded, relaxed restaurant in Amsterdam,
              full of surprises. Feel good food, means: healthy, sustainable and
              sated food. Everything you eat or drink at our restaurant is
              carefully selected from the best suppliers so you can order
              everything from our menu, with confidence and a peace of mind.
              Whether is for lunch, dinner or just a drink.
            </p>
          </motion.div>
        </div>
        <div className="w-full p-2 justify-beween items-center lg:flex space-y-4 lg:space-x-6">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            alt="img"
            src="/foodImages/beer6.jpeg"
            width={200}
            height={200}
            className="rounded-lg w-[442px] h-[294px] lg:h-96 lg:w-1/2 lg:hidden"
          />

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" lg:flex-col lg:w-1/2 items-center justify-center space-y-4"
          >
            <h1 className="lg:text-4xl text-2xl font-bold text-black ">
              LIVE SPORTS
            </h1>
            <p className="lg:text-lg text-base flex flex-wrap text-gray-700 ">
              Lion's Head is a open-minded, relaxed restaurant in Amsterdam,
              full of surprises. Feel good food, means: healthy, sustainable and
              sated food. Everything you eat or drink at our restaurant is
              carefully selected from the best suppliers so you can order
              everything from our menu, with confidence and a peace of mind.
              Whether is for lunch, dinner or just a drink.
            </p>
          </motion.div>
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            alt="img"
            src="/foodImages/beer6.jpeg"
            width={200}
            height={200}
            className="rounded-lg w-[442px] h-[294px] lg:h-96 lg:w-1/2 "
          />
        </div>
        <div className="w-full p-2 justify-beween items-center lg:flex space-y-4 lg:space-x-6">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            alt="img"
            src="/foodImages/food1.jpeg"
            width={200}
            height={200}
            className="rounded-lg w-[442px] h-[294px] lg:h-96 lg:w-1/2"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" lg:flex-col lg:w-1/2 items-center justify-center space-y-4"
          >
            <h1 className="lg:text-4xl text-2xl font-bold text-black ">
              PLAN YOUR EVENT WITH US
            </h1>
            <p className="lg:text-lg text-base flex flex-wrap text-gray-700 ">
              Lion's Head is a open-minded, relaxed restaurant in Amsterdam,
              full of surprises. Feel good food, means: healthy, sustainable and
              sated food. Everything you eat or drink at our restaurant is
              carefully selected from the best suppliers so you can order
              everything from our menu, with confidence and a peace of mind.
              Whether is for lunch, dinner or just a drink.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
