import Link from "next/link";
import React from "react";
import { BiCrown } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { LuOrbit } from "react-icons/lu";
import SearchBar from "./components/SearchBar";
import { SignInButton } from "./components/buttons";

const NavMenu = () => {
  return (
    <nav className="w-full h-[10svh] bg-gray-900 flex  items-center text-white  border-b-2 border-white">
      <Link
        href={"/"}
        className="flex items-center justify-center  sm:mx-6 gap-2 flex-shrink-0"
      >
        <LuOrbit size={40} color="white" />
        <h1 className="hidden sm:block  text-2xl">Space Cases</h1>
      </Link>
      <SearchBar />
      <ul className="flex sm:gap-6 items-center justify-center sm:mx-6 flex-shrink-0">
        <li className="flex items-center justify-center gap-1 text-gold">
          <BiCrown size={35} color="gold"></BiCrown>
          <Link className="hidden sm:block" href={"/premium"}>
            Premium
          </Link>
        </li>
        <li>
          <Link
            href={"https://discord.gg/Ym33UvuKQW"}
            className="flex justify-center items-center gap-2 bg-blue-700 rounded-md p-2"
          >
            <BsDiscord size={30} color="white" />
            <p className="hidden sm:block">Discord Server</p>
          </Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
