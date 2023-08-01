'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '~/utils/api'; // Adjust the import path based on your project structure
import NavProfileMenu from './NavProfileMenu';
import useTheme from '~/utils/useTheme';

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
  }
  return (
    

    <header className="fixed top-0 left-0 right-0 z-50 " data-mode={theme}>
        <div className="px-4 lg:px-40 py-4 backdrop-blur-[2px] bg-opacity-20 max-sm:hidden flex justify-between font-light text-primary-dark dark:text-primary bg-primary dark:bg-primary-dark">
        <div className="flex items-center">
          <Link href="/">
            <div>
              <img src="/images/other/logo.svg" alt="Logo" className="h-8 w-8 rounded-full" />
            </div>
          </Link>
          <nav className="flex items-center">
            <Link href="/catalogue">
              <div className="ml-3 px-6 py-2 truncate dark:hover:bg-[#212121] hover:text-[#5fa9c1] rounded-full duration-300  ">Каталог</div>
            </Link>
            <Link href="/users_list">
              <div className="px-6 py-2 truncate dark:hover:bg-[#212121] hover:text-[#5fa9c1] rounded-full duration-300">Сообщество</div>
            </Link>
          </nav>
        </div>

        <div className='flex flex-nowrap items-center justify-center'>
          <div className="mr-8 flex items-center justify-center">
            <label className="switch">
              <input type="checkbox" onChange={themeChange}></input>
              <span className="slider"></span>
            </label>
          </div>

          {isAuthenticated ? (
            <NavProfileMenu />
          ) : (
            <div className="relative mt-1">
              <Link href="/auth/signin">
                <div className="truncate h-8 hover:text-[#5fa9c1] duration-200">Войти</div>
              </Link>
            </div>
          )}
        </div>
        </div>
    </header>
  );
};

export default Navbar;
