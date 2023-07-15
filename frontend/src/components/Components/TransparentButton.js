import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class TransparentLink extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        this.link = this.props.link
    }

    render() {
        return (
            <Link to={this.link} className="w-full text-center text-gray-200 my-2 duration-300 rounded-md px-4 py-4 sm:py-2 hover:bg-zinc-800 max-sm:hidden">{this.text}</Link>
        )
    }
}