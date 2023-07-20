import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class Text extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        this.className = this.props.className
    }

    render() {
        return (
            <p className={ this.className ? this.className : "font-light text-center text-white" }>Ещё нет аккаунта?</p>
        )
    }
}