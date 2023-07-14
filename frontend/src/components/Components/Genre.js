import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class Genre extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        
    }

    render() {
        return (
            <div class="flex text-gray-200 bg-zinc-900 rounded-xl px-3 mr-2">
            <a href="#!" class="flex items-center hover:text-[#5fa9c1] duration-200">{this.text}</a>
          </div>
        )
    }
}