"use client";
import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <button
        onClick={() => {
          console.log(session);
        }}
      >
        Session
      </button>
      <div>Bienvenido, {session?.user?.email}</div>
    </>
  );
}
