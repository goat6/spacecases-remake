import Image from "next/image";
import { ReactComponentElement } from "react";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className="h-[90svh]  bg-palette-dark py-16 grid grid-cols-[60%_40%] ">
        <span className="flex flex-col justify-center items-center gap-10 ">
          <h1 className="text-5xl text-palette-primary w-3/4 font-semibold">
            The premier counter-strike case unboxing discord bot
          </h1>
          <p className="text-3xl text-palette-secondary w-3/4">
            Unbox cases, play minigames and compete on the leaderboards, all
            built up directly for the discord platform.
          </p>
          <div className="flex justify-center items-center gap-6 w-3/4 font-medium">
            <button className="bg-palette-primary flex justify-center items-center p-4 w-1/3 rounded-md ">
              <a
                className="text-palette-secondary text-lg"
                href="https://discord.com/api/oauth2/authorize?client_id=1025496377939197972&permissions=395136993280&guild_id=1050490944232890389&scope=bot"
              >
                Explore features
              </a>
            </button>
            <button className="bg-palette-secondary flex justify-center items-center p-4 w-1/3 gap-2 rounded-md ">
              <BsDiscord size={20} className=" text-palette-dark" />
              <a
                className="text-palette-dark text-lg"
                href="https://discord.com/api/oauth2/authorize?client_id=1025496377939197972&permissions=395136993280&guild_id=1050490944232890389&scope=bot"
              >
                Add to discord
              </a>
            </button>
          </div>
        </span>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 ">
            <Image
              src={"inventoryMockup.svg"}
              alt={"HOMEPAGE SVG"}
              fill
              className="overflow-hidden ml-20 absolute"
            />
          </div>
        </div>
      </main>
    </>
  );
}
