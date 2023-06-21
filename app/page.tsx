import Image from "next/image";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className="h-[85svh]  bg-palette-dark py-16 grid grid-cols-[60%_40%]">
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
                href="#features-section"
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
        <div className="relative overflow-hidden z-0">
          <div className="absolute inset-0 ">
            <Image
              src={"inventoryMockup.svg"}
              alt={"Homepage SVG"}
              fill
              className="overflow-hidden ml-20 absolute"
            />
          </div>
        </div>
      </main>
      <section
        id="features-section"
        className="h-[80svh] w-full bg-palette-dark flex flex-col items-center justify-center text-white"
      >
        <h2 className="text-2xl font-semibold text-palette-primary mb-4">
          Our Features
        </h2>
        <p className="text-3xl font-semibold">
          Choose from a range of over{" "}
          <em className="text-palette-primary">150</em> cases and capsules,
          fully updated for CS2.
        </p>
        <span className="grid grid-cols-3 w-full h-full text-center ">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={"unboxingMockup.svg"}
              alt={"Unboxing SVG"}
              width={400}
              height={400}
            />
            <p className="w-3/4 font-medium text-xl">
              Unbox skins or stickers, then trade & sell with other players -
              all up to date with{" "}
              <em className="text-palette-primary">current market prices.</em>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-3/4">
              Risk it all by upgrading your skins, or pick from a selection of
              minigames to earn more currency.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-3/4">
              Compete against other players on the leaderboard, and see what
              skins other players currently have.
            </p>
          </div>
        </span>
      </section>
    </>
  );
}
