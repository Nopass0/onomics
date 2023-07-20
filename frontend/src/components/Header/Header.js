import React from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../api/auth'
import { myUserInfo, logout } from '../api/auth'
import { getStatic } from '../api/static'
import { BlueButton } from '../Components/BlueButton'
import { ProfileMenu } from '../Components/ProfileMenu'
import { IoAdd, IoAddCircle, IoBookmarks, IoLogOut, IoNotifications, IoPerson } from 'react-icons/io5'

export class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: '',
        }
    }

    componentDidMount() {
        getStatic("svg/logo.svg").then(res => {
            console.log('ok', res)
            this.setState({ image: res })
        })
    }

    render() {
        return (
            <header
                className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-between backdrop-blur-xl bg-opacity-60 bg-zinc-900 px-4 lg:px-40 py-1">
                <div className="flex items-center">
                <Link to="/"><img src={this.state.image.url} alt="Logo" className="h-8 w-8 rounded-full" /></Link>
                <nav className="flex items-center">
                    <Link to="/catalog" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Каталог</Link>
                    <Link to="/community" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Сообщество</Link>
                    {/* <!--<a href="#" className="px-4 py-1 text-gray-100 hover:text-gray-300 truncate">Тренды</a>--> */}
                </nav>
                </div>
                <div>
                {/* <!--<button className="px-4 py-4 text-gray-700 hover:text-gray-900">Sign In</button>--> */}
                {isAuth() ? (
                    <ProfileMenu/>
                ) : (
                    <div className="relative my-2">
                        <Link to="signin" className="px-2 text-gray-100 hover:text-gray-300 truncate h-8">Войти</Link>
                    </div>
                )}
                
                </div>
            </header>
            )
    }
      
}
