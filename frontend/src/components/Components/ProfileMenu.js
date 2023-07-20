import React, { Component, useState } from 'react'
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
    };

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
    };

    onClickLogout(e) {
        console.log('ok sss')
        logout()
    };

    // onClickMenu = (e) => {
    //     console.log('THIS')
    //     this.subMenu.style.top = '60px'
    // }
    // ShowMenu(e) {
    //     setTimeout(() => {
    //         this.subMenu.style.top = '50px'
    //     }, 3);
    //     e.target.addEventListener('mouseleave', () => {
    //         this.subMenu.addEventListener('mouseenter', () => {
    //             this.subMenu.style.top = '50px'
    //         }
    //         )
    //         this.subMenu.addEventListener('mouseleave', () => {
    //             this.subMenu.style.top = '-999px'
    //         }
    //         )
    //         this.subMenu.style.top = '-999px'
    //     })
        
    // }

    // const [open,setOpen] = useState(false);

    // onMouseEnter={this.ShowMenu.bind(this)} 
    render() {
        
        return (
            <div id='profileSubMenu' className="relative z-10">
                <button onClick={()=> {setOpen(!open)}} className="px-4 py-2 text-gray-100 hover:text-gray-300">
                <img src={this.state.avatar.url} alt="User" className="h-8 w-8 rounded-full" />
                </button>
                {/* {`${open? 'active' : 'inactive'}`} */}
                <div id='sub-menu' className={`submenu ${open? 'active' : 'inactive'} absolute right-4 w-[212px] rounded-xl bg-[#222223] py-4 shadow-xl duration-300`}>
                    <Link to="profile" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center group "><IoPerson size='1.0em' /><p className="mx-2 group-hover:mx-4 duration-300">Профиль</p></Link>
                    {/* {% if user.is_staff %}
                    <a href="{% url 'admin-panel' %}" className="flex px-4 py-4 text-gray-100 hover:bg-zinc-700 items-center">{% bs_icon 'shield-fill' %}<p className="mx-2">Админ-панель</p></a>
                    {% endif %} */}
                    <Link to="addComics" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center  group  "><IoAddCircle size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Добавить комикс</p></Link>
                    <Link to="notifications" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center  group  "><IoNotifications size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Уведомления</p></Link>
                    <Link to="bookmarks" className="flex px-4 py-4 text-gray-100 hover:text-[#76bcd3] hover:drop-shadow-xl items-center  group  "><IoBookmarks size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Закладки</p></Link>
                    <Link onClick={this.onClickLogout.bind(this)} className="flex px-4 py-4 text-gray-100 hover:text-red-500 hover:drop-shadow-xl items-center  group  "><IoLogOut size='1.0em'/><p className="mx-2 group-hover:mx-4 duration-300">Выйти</p></Link>
                </div>
            </div>
        )
    }
}