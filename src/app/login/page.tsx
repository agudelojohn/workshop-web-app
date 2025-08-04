"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/Icons/Icons";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Credenciales inválidas");
    } else {
      router.push("/dashboard"); // Redirige a un área protegida
    }
  };

  function handleShowPassord() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="h-full flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className={
          "flex flex-col gap-12 bg-gray-900 p-15 rounded-4xl shadow-md min-w-lg"
        }
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-100"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2 flex gap-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            <button
              type="button"
              onClick={handleShowPassord}
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              {showPassword ? <Icons name="opened-eye" /> : <Icons name="closed-eye" />}
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
