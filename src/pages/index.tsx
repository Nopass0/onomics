import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { IUser } from "./api/interfaces";

export default function Home() {
  const [user, setUser] = useState({} as IUser);
  const [isAuth, setIsAuth] = useState(false);
  const context = api.useContext();

  const getUserInfo = useCallback(async () => {
    try {
      const response = await context.users.getMyProfile.fetch({
        token: window.localStorage.getItem("token") || "",
      });
      setUser(response);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }, [context.users]);

  const logout = useCallback(async () => {
    try {
      await context.auth.logout.fetch({
        token: window.localStorage.getItem("token") || "",
      });
      setIsAuth(false);
      window.localStorage.removeItem("token");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, [context.auth]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      getUserInfo();
    }
  }, [getUserInfo]);

  return (
    <>
      <main className="bg-zinc-900 w-screen h-screen flex justify-center items-center">
        <div className="w-[1200px] h-[600px] bg-[#1b1b1c] rounded-lg">
          <div className="w-full mx-6 mt-4">
            <h1 className="text-gray-100 text-xl">Home Page</h1>
          </div>
          <div className="w-full px-6 mt-2 text-gray-100">
            <p className="text-gray-100">{user?.username}</p>
          </div>
          <div className="w-full flex flex-row justify-center items-center mt-4">
            <Link href={isAuth ? "/profile" : "/auth/signin"}>
              <div className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2">
                {isAuth ? "Profile" : "Sign In"}
              </div>
            </Link>
            {!isAuth && (
              <Link href="/auth/signup">
                <div className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2">
                  Sign Up
                </div>
              </Link>
            )}
            {isAuth && (
              <button
                className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
