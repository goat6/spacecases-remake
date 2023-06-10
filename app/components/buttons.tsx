"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center justify-center sm:gap-4">
        <button onClick={() => console.log("bruh")}>
          <Image
            src={session.user?.image ?? "favicon.io"}
            alt="joseph"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
        </button>
      </div>
    );
  }

  return (
    <button
      className=" p-2 flex items-center justify-center gap-1 text-purple-400 text-2xl"
      onClick={() => signIn("discord")}
    >
      <BiLogIn size={30} />
      Login
    </button>
  );
}
