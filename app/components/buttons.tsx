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
      <Link href={"/dashboard"}>
        <Image
          src={session.user?.image ?? "favicon.io"}
          alt="joseph"
          width={32}
          height={32}
        ></Image>
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}
