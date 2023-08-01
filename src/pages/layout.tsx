import React, { PropsWithChildren, ReactNode, useState } from "react";
import Navbar from "~/Navbar/Navbar";
import Footer from "~/Footer/Footer";
import Head from "next/head";
import { useEffect } from 'react';
export default function Layout({ children } : PropsWithChildren) : JSX.Element {
  const [theme, setTheme] = useState("dark");

  useEffect( () => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, [] )

  return (
    <>
      <Head>
        <title>Onomics</title>
        <meta name="description" content="Onomics - платформа для веб-комиксов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-6 mt-[30px] hidden sm:block" data-mode={theme}><br/></div>
        <div id="themed" className="" data-mode={theme}>
            <main className='w-auto flex-grow h-auto box-border overflow-x-hidden bg-primary dark:bg-primary-dark'>{children}</main>
        </div>
      <Footer />
    </>
  )
}