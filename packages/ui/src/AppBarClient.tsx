"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "./AppBar";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export function AppBarClient({ className }: { className?: string }) {
  const session = useSession();
  const router = useRouter();

  return (
    <Appbar
      className={clsx("bg-white shadow-md", className)} // ✅ merge base + external overrides
      name={session.data?.user?.name}
      onSignin={signIn}
      onSignout={async () => {
        await signOut();
        router.push("/api/auth/signin");
      }}
      user={session.data?.user}
    />
  );
}
