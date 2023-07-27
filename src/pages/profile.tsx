import { useState, useEffect } from "react";
import Head from "next/head";
import { api } from "~/utils/api";
import Link from "next/link";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const context = api.useContext();

  useEffect(() => {
    // Fetch user profile data when the component mounts
    context.users
      .getMyProfile.fetch({ token: window.localStorage.getItem("token") || "" })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await context.auth.logout.fetch({ token: window.localStorage.getItem("token") || "" });
      window.localStorage.removeItem("token");
      // Redirect to the login page after logout
      // Assuming you have a login page at "/auth/signin"
      window.location.href = "/auth/signin";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Head>
        <title>User Profile - Onomics</title>
        <meta name="description" content="User Profile Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 w-screen h-screen flex justify-center items-center">
        <div className="w-[400px] h-[300px] bg-[#1b1b1c] rounded-lg">
          {loading ? (
            <p className="text-gray-100 text-center mt-4">Loading...</p>
          ) : (
            <>
              <div className="w-full mx-6 mt-4">
                <h1 className="text-gray-100 text-xl">User Profile</h1>
              </div>
              <div className="w-full px-6 mt-2 text-gray-100">
                <p className="text-gray-100">Username: {user.username}</p>
                {/* Add other user profile information as needed */}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-[#2b2b2c] text-gray-100 px-4 py-2 rounded-md hover:bg-[#4b4b4c] mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
