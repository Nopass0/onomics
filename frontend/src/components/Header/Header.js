import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
    const [image, setImage] = React.useState('')

    //Fetch data from API to get image
    React.useEffect(() => {
        fetch("/api/staticfiles/svg&logo.svg").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setImage(jsonRes))
    }, []) 

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-between backdrop-blur-xl bg-opacity-60 bg-zinc-900 px-4 lg:px-40 py-1">
            <div className="flex items-center">
            <Link to="/"><img src={image.url} alt="Logo" className="h-8 w-8 rounded-full" /></Link>
            <nav className="flex items-center">
                <Link to="/catalog" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Каталог</Link>
                <Link to="/community" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Сообщество</Link>
                {/* <!--<a href="#" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Тренды</a>--> */}
            </nav>
            </div>
            <div>
            {/* <!--<button className="px-4 py-4 text-gray-700 hover:text-gray-900">Sign In</button>--> */}
            {isUserAuthenticated? (
                <div className="relative">
                <button className="menu-profile px-4 py-2 text-gray-100 hover:text-gray-300">
                <img src="" alt="User" className="h-8 w-8 rounded-full" />
                </button>
                <div className="menu-profile-menu absolute right-0 w-48 rounded-lg bg-zinc-800 py-4 shadow-xl">
                <a href="" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center"><p className="mx-2">Профиль</p></a>
                {/* {% if user.is_staff %}
                <a href="{% url 'admin-panel' %}" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center">{% bs_icon 'shield-fill' %}<p className="mx-2">Админ-панель</p></a>
                {% endif %} */}
                <a href="" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center"><p className="mx-2">Добавить комикс</p></a>
                <a href="" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center"><p className="mx-2">Уведомления</p></a>
                <a href="" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center"><p className="mx-2">Закладки</p></a>
                <a href="" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center"><p className="mx-2">Выйти</p></a>
                </div>
            </div>
            ) : (
                <div className="relative my-2">
                    <button className="px-2 text-gray-100 hover:text-gray-300 truncate h-8">Войти</button>
                </div>
            )}
            
            </div>
        </header>
        );
      
}
