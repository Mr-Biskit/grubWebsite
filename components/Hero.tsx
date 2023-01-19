import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen flex ">
      <div>
        <video autoPlay loop muted className="w-screen h-1/2 object-cover ">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="bg-hero-pattern bg-cover bg-center w-screen h-full ">
          <div className="bg-hero-pattern  w-40 h-40 rounded-full absolute bg-cover left-[50%] transform -translate-x-1/2 bottom-28 justify-center items-center">
            <div className="h-32 w-32 border-4 border-black rounded-full bg-white bg-opacity-60 flex justify-center absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 items-center text-center">
              <Link href="/">
                BOOK
                <br /> A <br />
                TABLE
              </Link>
            </div>
          </div>
          <div className="bg-white bg-opacity-60 w-screen border-y-4 border-black items-center h-20 justify-center text-center text-4xl absolute bottom-5 p-3">
            A Little Slice Of South Africa
          </div>
        </div>
      </div>
    </div>
  );
}
