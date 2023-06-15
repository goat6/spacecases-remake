import Link from "next/link";
import React from "react";
import { BiCrown } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { LuOrbit } from "react-icons/lu";
import SearchBar from "./components/SearchBar";
import { SignInButton } from "./components/buttons";

const NavMenu = () => {
  return (
    <nav className="w-full h-[10svh] bg-palette-dark flex justify-between items-center text-palette-secondary">
      <span className="flex items-center justify-center gap-6 sm:ml-6">
        <Link href={"/"} className="flex items-center justify-center gap-1 ">
          <LuOrbit size={40} />
          <h1 className="hidden sm:block  text-2xl">Space Cases</h1>
        </Link>
        <SearchBar />
      </span>
      <ul className="flex sm:gap-6 items-center justify-center sm:mr-6">
        <li>
          <Link
            className="flex items-center justify-center gap-1 text-palette-primary"
            href={"/premium"}
          >
            <BiCrown size={30} className="text-palette-primary"></BiCrown>
            Premium
          </Link>
        </li>
        <li>
          <Link href={"/leaderboard"}>
            <p>Leaderboard</p>
          </Link>
        </li>
        <li>
          <Link
            href={"https://discord.gg/Ym33UvuKQW"}
            className="flex justify-center items-center gap-1"
          >
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
