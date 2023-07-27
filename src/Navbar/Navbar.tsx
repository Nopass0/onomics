import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '~/utils/api'; // Adjust the import path based on your project structure
import NavProfileMenu from './NavProfileMenu';

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const context = api.useContext();

  useEffect(() => {
    // Check if the user is authenticated
    const token = window.localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-between backdrop-blur-xl bg-opacity-60 bg-zinc-900 px-4 lg:px-40 py-2">
      <div className="flex items-center">
        <Link href="/">
          <div>
            <img src="/images/other/logo.svg" alt="Logo" className="h-8 w-8 rounded-full" />
          </div>
        </Link>
        <nav className="flex items-center">
          <Link href="/catalogue">
            <div className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Каталог</div>
          </Link>
          <Link href="/users_list">
            <div className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Сообщество</div>
          </Link>
        </nav>
      </div>
      <div>
        {isAuthenticated ? (
          <NavProfileMenu />
        ) : (
          <div className="relative my-2">
            <Link href="/auth/signin">
              <div className="px-2 text-gray-100 hover:text-gray-300 truncate py-4 h-8">Войти</div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
