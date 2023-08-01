import React, { PropsWithChildren, ReactNode } from "react";
import Navbar from "~/Navbar/Navbar";
import Footer from "~/Footer/Footer";
import Head from "next/head";
export default function Layout({ children } : PropsWithChildren) : JSX.Element {
  return (
    <>
      <Head>
        <title>Onomics</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <div className="h-6 mt-[30px] hidden sm:block"><br/></div> */}
      <div className="" data-mode="">
      <div className="h-[50px] bg-secondary dark:bg-primary-dark"></div>
      </div>
        <div className="w-full h-screen overflow-hidden" data-mode="">
            <main className='w-auto flex-grow h-full box-border overflow-x-hidden text-primary-dark dark:text-primary bg-secondary dark:bg-primary-dark'>{children}</main>
        </div>
      <Footer />
    </>
  )
}