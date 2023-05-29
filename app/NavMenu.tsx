import Link from "next/link";
import React from "react";
import { LuOrbit } from "react-icons/lu";
import { SignInButton } from "./components/buttons";

const NavMenu = () => {
  return (
    <nav className="w-full h-16 bg-black flex justify-between items-center text-white uppercase font-bold">
      <Link href={"/"} className="flex items-center justify-center ml-6 gap-2">
        <LuOrbit size={40} color="white" />
        <h1>space cases</h1>
      </Link>
      <ul className="flex gap-4 items-center justify-center mr-6">
        <li>
          <Link href={"/test1"}>test1</Link>
        </li>
        <li>
          <Link href={"/test2"}>test2</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
