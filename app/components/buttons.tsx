"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center justify-center gap-4">
        <Link href={"/dashboard"}>
          <Image
            src={session.user?.image ?? "favicon.io"}
            alt="joseph"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
        </Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("discord")}>Sign In</button>;
}
