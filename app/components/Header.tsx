"use client";

import { icons } from "@/public/assets/icons/export";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";
import { useState, useEffect } from "react";
import Hero from "./Hero";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="container !mt-0">
      <nav className="flex items-center justify-between space-x-14 text-sm md:text-base">
        <div className="flex items-center space-x-4 flex-1">
          <Image src={icons.logo} alt="logo" />
          <span className="font-poppins font-bold">NestHaven</span>
        </div>

        <ul className="hidden md:flex space-x-10 uppercase tracking-wide font-[400] text-primary">
          <li>Home</li>
          <li>Properties</li>
          <li>Agents</li>
          <li>Blog</li>
        </ul>

        <button
          className="hidden md:block border-2 border-secondary text-secondary
        py-1 px-5  whitespace-nowrap rounded-xl font-medium"
        >
          LOG IN
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* <div
        className={`md:hidden fixed bg-primary top-0 right-0 z-50 ${
          menuOpen ? " w-4/5 opacity-100" : "w-0 opacity-0"
        } h-screen duration-300 ease-in-out overflow-hidden`}
      >
        <button
          className="absolute left-10 top-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CloseMenuIcon />
        </button>
        <nav className="flex flex-col items-center justify-center space-y-20">
          <ul className="flex flex-col items-center space-y-6 text-white uppercase font-semibold mt-20">
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Blog</li>
          </ul>

          <button
            className="border-2 border-secondary text-secondary
        py-1 px-5  whitespace-nowrap rounded-lg font-medium"
          >
            LOG IN
          </button>
        </nav>
      </div> */}
      <Hero />
    </header>
  );
};
export default Header;
