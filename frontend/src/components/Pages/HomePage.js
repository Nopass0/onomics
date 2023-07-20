import React, { Component } from 'react'
import { render } from "react-dom"
import { BlueLink } from '../Components/BlueLink'
import { TransparentLink } from '../Components/TransparentButton'
import { Genre } from '../Components/Genre'
import { GenreWrap } from '../Components/GenreWrap'
import { isAuth, myUserInfo } from '../api/auth'
import { BlueButton } from '../Components/BlueButton'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        myUserInfo().then( (data) => {
            // let data = res.data
            console.log(data)
            this.setState({
                info: data
            } )
        } )
    }

    onClick(e) {
        e.preventDefault()
        console.log(this.state.info)
    }

    render() {
        return (
            <>
            <div className="text-gray-100">
                <div className='bg-zinc-700 px-4 text-gray-100'>Text</div>
                <BlueLink text="Catalog" />
                <TransparentLink text="Community" />
                <GenreWrap >
                <Genre text="Action" />
                <Genre text="Adventure" />
                <Genre text="Comedy" />
                <Genre text="Drama" />
                <Genre text="Fantasy" />
                </GenreWrap>
                <div className='text-gray-100 bg-slate-500 py-2 px-4'>isAuth: {isAuth() ? "true" : "false" }</div>
                <div className='text-gray-100 bg-slate-500 py-2 px-4'>Pass: {this.state.info['password']}</div>
                {/* <div className='text-gray-100 bg-slate-500 py-2 px-4'>Me: <ul>{this.state.info.map( (key, data) => {<li>{key} : {data}</li>} )}</ul></div> */}
                <BlueButton text="GET" onClick={this.onClick.bind(this)}/>
            </div>
            </>
        )
    }

}