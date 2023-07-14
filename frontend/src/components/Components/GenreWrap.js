
import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class GenreWrap extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        this.children = this.props.children
    }

    render() {
        return (
            <div class="flex flex-wrap ml-2">
                {this.children}
            </div>
        )
    }
}