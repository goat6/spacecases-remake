import Link from "next/link";
import React from "react";
import { LuOrbit } from "react-icons/lu";
import { BiCrown } from "react-icons/bi";
import { SignInButton } from "./components/buttons";
import AuthProvider from "./AuthProvider";

const NavMenu = () => {
  return (
    <nav className="w-full h-16 bg-black flex justify-between items-center text-white capitalize font-bold">
      <Link href={"/"} className="flex items-center justify-center ml-6 gap-2">
        <LuOrbit size={40} color="white" />
        <h1>space cases</h1>
      </Link>
      <ul className="flex gap-4 items-center justify-center mr-6">
        <li className="flex items-center justify-center gap-1 text-gold">
          <BiCrown size={35} color="gold"></BiCrown>
          <Link href={"/premium"}>premium</Link>
        </li>
        <li>
          <Link href={"https://discord.gg/Ym33UvuKQW"}>discord server</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
