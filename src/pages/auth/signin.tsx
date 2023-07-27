import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const context = api.useContext();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await context.auth.signin.fetch(formData);
      if (response.token) {
        // Login successful, save the token to local storage and redirect to profile page
        window.localStorage.setItem("token", response.token);
        // Redirect to profile page after successful login
        // Assuming you have div profile page at "/profile"
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Onomics</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 w-screen h-screen flex justify-center items-center">
        <div className="w-[400px] h-[300px] bg-[#1b1b1c] rounded-lg">
          <form className="w-full mx-6 mt-4" onSubmit={handleSubmit}>
            <h1 className="text-gray-100 text-xl">Sign In</h1>
            <div className="mt-4">
              <label className="text-gray-100">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 mt-1 bg-zinc-800 text-gray-100 rounded-md"
                required
              />
            </div>
            <div className="mt-4">
              <label className="text-gray-100">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-2 py-1 mt-1 bg-zinc-800 text-gray-100 rounded-md"
                required
              />
            </div>
            <div className="flex flex-row justify-center mt-4">
              <button
                type="submit"
                className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2"
              >
                Sign In
              </button>
              <Link href="/auth/signup">
                <div className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2">
                  Sign Up
                </div>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
