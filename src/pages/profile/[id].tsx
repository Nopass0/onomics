import { useState, useEffect } from "react";
import Head from "next/head";
import { api } from "../../utils/api";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

export default function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const context = api.useContext();
  const router = useRouter();
  const { id } = router.query;

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

    </>
  );
}
