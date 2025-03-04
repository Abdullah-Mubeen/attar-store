"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("user", "admin");
      router.push("/dashboard");
    } else {
      localStorage.setItem("user", "user");
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-600 text-white rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
