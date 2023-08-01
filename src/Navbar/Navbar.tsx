'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '~/utils/api'; // Adjust the import path based on your project structure
import NavProfileMenu from './NavProfileMenu';

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState("dark");
  const context = api.useContext();

  useEffect(() => {
    // Check if the user is authenticated
    const token = window.localStorage.getItem("token");
    setIsAuthenticated(!!token);
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  const themeChange = (e) => {
    console.log(e.target.checked)
    localStorage.setItem("theme", e.target.checked ? "light" : "dark");
    setTheme(localStorage.getItem("theme") || "dark");

    //document.querySelector("body").style.background = document.querySelector("body").style.background == "#121212" ? "" : "#ffffff"

    for (let i = 0; i < document.querySelectorAll("#themed").length; i++) {
      document.querySelectorAll("#themed")[i].setAttribute("data-mode", localStorage.getItem("theme") || "dark")
    }
  } 

  return (
      <div className="" data-mode={theme}>
        <header className=" bg-primary dark:bg-primary-dark" >
          <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-between backdrop-blur-sm bg-opacity-60 px-4 lg:px-40 py-3 font-light text-primary-dark dark:text-primary bg-secondary dark:bg-secondary-dark">
          <div className="flex items-center">
            <Link href="/">
              <div>
                <img src="/images/other/logo.svg" alt="Logo" className="h-8 w-8 rounded-full logo animate-spin" />
              </div>
            </Link>
            <nav className="flex items-center">
              <Link href="/catalogue">
                <div className="ml-3 px-6 py-2 truncate text-sm --dark:hover:bg-[#212121] hover:text-[#5fa9c1] rounded-full duration-300  ">Каталог</div>
              </Link>
              <Link href="/users_list">
                <div className="px-6 py-2 truncate text-sm --dark:hover:bg-[#212121] hover:text-[#5fa9c1] rounded-full duration-300">Сообщество</div>
              </Link>
            </nav>
          </div>
          <div className='flex flex-nowrap items-center justify-center'>
            <div className="mr-8 flex items-center justify-center">
            <div className="toggleWrapper">
            {theme == "dark" ? <input type="checkbox" className="dn" id="dn" onChange={themeChange}  /> : <input type="checkbox" className="dn" id="dn" onChange={themeChange} />}
              <label for="dn" className="toggle">
                  <span className="toggle__handler">
                      <span className="crater crater--1"></span>
                      <span className="crater crater--2"></span>
                      <span className="crater crater--3"></span>
                  </span>
                  <span className="star star--1"></span>
                  <span className="star star--2"></span>
                  <span className="star star--3"></span>
                  <span className="star star--4"></span>
                  <span className="star star--5"></span>
                  <span className="star star--6"></span>
              </label>
            </div>
            </div>
            {isAuthenticated ? (
              <NavProfileMenu />
            ) : (
              <div className="relative mt-1">
                <Link href="/auth/signin">
                  <div className="truncate h-8 flex items-center hover:text-[#5fa9c1] text-sm duration-200">Войти</div>
                </Link>
              </div>
            )}
          </div>
          </div>
        </header>
      </div>
  );
};

export default Navbar;
