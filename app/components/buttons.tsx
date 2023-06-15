"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export function SignInButton() {
  const [dropdownVisibility, setDropdownVisiblity] = useState(false);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <AiOutlineLoading3Quarters
        className="animate-spin"
        color="white "
        size={30}
      />
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center justify-center relative sm:gap-4 z-0">
        <button
          className="z-0"
          onClick={() => setDropdownVisiblity(!dropdownVisibility)}
        >
          <Image
            src={session.user?.image ?? "favicon.io"}
            alt="joseph"
            width={50}
            height={50}
            className="rounded-full "
          ></Image>
        </button>
        {dropdownVisibility ? (
          <ul className="right-0 mt-2 top-full absolute w-max flex flex-col text-2xl h-max bg-white rounded-sm text-gray-800 text-left p-4 gap-2 z-0">
            <p>{session.user?.name}</p>
            <p className="text-gray-500 text-lg">{session.user?.email}</p>
            <Link href={"/profile/"}>Profile</Link>
            <button onClick={() => signOut()} className="text-left">
              Sign Out
            </button>
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <button
      className=" flex items-center justify-center gap-1"
      onClick={() => signIn("discord")}
    >
      <BiLogIn size={30} />
      Login
    </button>
  );
}
