'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IoPerson, IoAddCircle, IoNotifications, IoBookmarks, IoLogOut } from 'react-icons/io5';
import { api } from '~/utils/api'; // Adjust the import path based on your project structure


const NavProfileMenu: React.FC = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileInfo, setProfileInfo] = useState<any | null>(null);
    const context = api.useContext();

    useEffect(() => {
        fetchProfileInfo();
    }, []);
    
    const fetchProfileInfo = async () => {
        try {
          const data = await context.users.getMyProfile.fetch({ token: window.localStorage.getItem("token") || "" });
          setProfileInfo(data);
        } catch (error) {
          console.error('Failed to fetch profile:', error);
        }
    };

    const handleAvatarHover = async () => {
        setIsMenuOpen(true);
    };

    const handleMenuLeave = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
        await context.auth.logout.fetch({ token: window.localStorage.getItem("token") || "" });
        localStorage.removeItem('token');
        window.dispatchEvent(new Event('storage'));
        router.push('/auth/signin');
        } catch (error) {
        console.error('Logout failed:', error);
        }
    };

    

    return (
        <div id='profileSubMenu' className="relative z-10">
        <button
            onMouseEnter={handleAvatarHover}
            onMouseLeave={handleMenuLeave}
            className="py-2 text-gray-100 hover:text-gray-300"
        >
            <Image src={`/${ profileInfo?.avatar }`} width={32} height={32}  alt="User" className="h-8 w-8 rounded-full" />
        </button>
        {isMenuOpen && (
            
            <div
            onMouseEnter={handleAvatarHover}
            onMouseLeave={handleMenuLeave}
            className="submenu absolute right-2 w-[216px] rounded-xl bg-[#fbfbfc] dark:bg-[#1b1b1c] py-4 shadow-xl duration-300"
            >

            <button onClick={() => router.push('/profile/' + profileInfo?.id)} className="flex px-4 py-4 text-gray-800 dark:text-gray-100 hover:text-[#76bcd3] dark:hover:text-[#76bcd3] hover:drop-shadow-xl items-center group">
                <IoPerson size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Профиль</p>
            </button>
            <button onClick={() => router.push('/addComics')} className="flex px-4 py-4 text-gray-800 dark:text-gray-100 hover:text-[#76bcd3] dark:hover:text-[#76bcd3] hover:drop-shadow-xl items-center group">
                <IoAddCircle size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Добавить комикс</p>
            </button>
            <button onClick={() => router.push('/notifications')} className="flex px-4 py-4 text-gray-800 dark:text-gray-100 hover:text-[#76bcd3] dark:hover:text-[#76bcd3] hover:drop-shadow-xl items-center group">
                <IoNotifications size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Уведомления</p>
            </button>
            <button onClick={() => router.push('/bookmarks')} className="flex px-4 py-4 text-gray-800 dark:text-gray-100 hover:text-[#76bcd3] dark:hover:text-[#76bcd3] hover:drop-shadow-xl items-center group">
                <IoBookmarks size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Закладки</p>
            </button>
            <button onClick={handleLogout} className="flex px-4 py-4 text-gray-800 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-500 hover:drop-shadow-xl items-center group">
                <IoLogOut size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Выйти</p>
            </button>
            </div>
        )}
        </div>
    );
};

export default NavProfileMenu;
