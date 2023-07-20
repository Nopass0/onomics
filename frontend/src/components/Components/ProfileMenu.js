import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'
import { IoPerson, IoAddCircle, IoNotifications, IoBookmarks, IoLogOut } from 'react-icons/io5'
import { myUserInfo, logout } from '../api/auth'
import { getStatic } from '../api/static'

export class ProfileMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            profileInfo: {},
            avatar: {},
        }
    }

    componentDidMount() {
        myUserInfo().then( (data) => {
            this.setState({ profileInfo: data })
            getStatic(data['avatar']).then(res => {
                console.log('ok', res)
                this.setState({ avatar: res })
            })
        } )
        this.subMenu = document.getElementById('sub-menu')
        this.subMenu.style.top = '-999px'
        console.log(this.subMenu)
    }

    onClickLogout(e) {
        console.log('ok sss')
        logout()
    }

    ShowMenu(e) {
        setTimeout(() => {
            this.subMenu.style.top = '0px'
        }, 5);
        e.target.addEventListener('mouseleave', () => {
            this.subMenu.addEventListener('mouseenter', () => {
                this.subMenu.style.top = '0px'
            }
            )
            this.subMenu.addEventListener('mouseleave', () => {
                this.subMenu.style.top = '-999px'
            }
            )
            this.subMenu.style.top = '-999px'
        })
    }

    render() {
        return (
            <div className="relative">
                <button onMouseEnter={this.ShowMenu.bind(this)} className="px-4 py-2 text-gray-100 hover:text-gray-300">
                <img src={this.state.avatar.url} alt="User" className="h-8 w-8 rounded-full" />
                </button>
                <div id='sub-menu' className=" absolute right-0 w-[212px] rounded-lg bg-zinc-900 py-4 shadow-xl duration-300 ease-in-out">
                    <Link to="profile" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center transition group duration-300 "><IoPerson size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Профиль</p></Link>
                    {/* {% if user.is_staff %}
                    <a href="{% url 'admin-panel' %}" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center">{% bs_icon 'shield-fill' %}<p className="mx-2">Админ-панель</p></a>
                    {% endif %} */}
                    <Link to="addComics" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center transition group duration-300 "><IoAddCircle size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Добавить комикс</p></Link>
                    <Link to="notifications" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center transition group duration-300 "><IoNotifications size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Уведомления</p></Link>
                    <Link to="bookmarks" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center transition group duration-300 "><IoBookmarks size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Закладки</p></Link>
                    <Link onClick={this.onClickLogout.bind(this)} className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center transition group duration-300 "><IoLogOut size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Выйти</p></Link>
                </div>
            </div>
        )
    }
}