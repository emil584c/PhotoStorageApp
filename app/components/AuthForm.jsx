"use client";

import { useState } from "react";

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
  }

  async function handleSignUp(e) {
    e.preventDefault();
  }

  let signInMessage = "Sign In";

  if (isSigningIn) {
    signInMessage = "Signing In";
  } else if (isNewUser) {
    signInMessage = "Sign Up";
  }

  const signUpMessage =
    "Email sent to confirm your account. Please check your email.";

  return (
    <form onSubmit={isNewUser ? handleSignUp : handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        {signInMessage}
      </button>
      <p>
        {isNewUser ? (
          <>
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:text-blue-800 mt-2"
              onClick={() => setIsNewUser(false)}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button
              className="text-blue-500 hover:text-blue-800 mt-2"
              onClick={() => setIsNewUser(true)}
            >
              Sign Up
            </button>
          </>
        )}
      </p>
      {isSigningUp && signUpMessage}
    </form>
  );
}
