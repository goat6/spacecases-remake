import Link from "next/link";
import React from "react";
import { LuOrbit } from "react-icons/lu";
import { BiCrown } from "react-icons/bi";
import { SignInButton } from "./components/buttons";
import { BsDiscord } from "react-icons/bs";
import SearchBar from "./components/SearchBar";

const NavMenu = () => {
  return (
    <nav className="w-full h-20 bg-gray-900 flex  items-center text-white capitalize font-bold border-b-2 border-white">
      <Link
        href={"/"}
        className="flex items-center justify-center  sm:mx-6 gap-2 flex-shrink-0"
      >
        <LuOrbit size={40} color="white" />
        <h1 className="hidden sm:block  text-2xl">space cases</h1>
      </Link>
      <SearchBar />
      <ul className="flex sm:gap-4 items-center justify-center sm:mx-6 flex-shrink-0">
        <li className="flex items-center justify-center gap-1 text-gold">
          <BiCrown size={35} color="gold"></BiCrown>
          <Link className="hidden sm:block" href={"/premium"}>
            premium
          </Link>
        </li>
        <li>
          <Link href={"https://discord.gg/Ym33UvuKQW"}>
            <BsDiscord size={35} color="white" />
            <p className="hidden sm:block">discord server</p>
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
