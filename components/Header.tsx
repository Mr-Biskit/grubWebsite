"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderButton from "./HeaderButton";

export default function Header1() {
  return (
    <header className="lg:px-16 px-6 bg-white flex w-full flex-wrap items-center lg:py-0 py-2 h-1/3">
      <style>
        {`
            #menu-toggle:checked + #menu {
                display: block;
            }
        `}
      </style>
      <div className="flex justify-between flex-1 items-center lg:hidden">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          height="32px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" />
        </svg>
      </label>

      <input type="checkbox" className="hidden" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:flex-1 lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <div className="flex flex-1  justify-center lg:px-2 items-center">
          <nav className="w-full">
            <ul className="lg:flex items-center w-full justify-evenly lg:text-xl  text-gray-700 pt-4 lg:pt-0">
              <HeaderButton title="MENU" linkhref="/" />
              <HeaderButton title="ON TAP" linkhref="/" />
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex justify-between items-center ">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex flex-1  justify-center lg:px-2 items-center">
          <nav className="w-full">
            <ul className="lg:flex items-center w-full justify-evenly lg:text-xl  text-gray-700 pt-4 lg:pt-0">
              <HeaderButton title="OUR STORY" linkhref="/" />
              <HeaderButton title="BLOG" linkhref="/" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
