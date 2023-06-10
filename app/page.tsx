import { signOut } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className="h-[90svh] flex flex-col justify-center items-center bg-gray-900 font-bold py-16 gap-12">
        <h1 className="text-7xl text-purple-400 w-2/3">
          The premier case unboxing simulator.
        </h1>
        <p className="text-5xl text-purple-300 w-2/3 text-right">
          Unbox skins, stickers or raise the stakes with minigames.
        </p>
        <p className="text-4xl text-white w-2/3 text-left">
          Trade with friends, or dominate the leaderboards, all updated for CS2.
        </p>
        <button className="bg-white text-black flex justify-center items-center p-4 w-1/6 rounded-md ">
          <BsDiscord size={40} className="mr-3 text-gray-900" />
          <a
            className="text-gray-900 text-xl"
            href="https://discord.com/api/oauth2/authorize?client_id=1025496377939197972&permissions=395136993280&guild_id=1050490944232890389&scope=bot"
          >
            Add to discord
          </a>
        </button>
        {
          // () ? (
          //   <ul className="top-full absolute w-max flex flex-col text-2xl h-full bg-white rounded-md text-black text-left p-2">
          //     <Link href={"/profile/"}>Profile</Link>
          //     <button onClick={() => signOut()} className="text-left">
          //       Sign Out
          //     </button>
          //   </ul>
          // ) : null)
        }
      </main>
    </>
  );
}
