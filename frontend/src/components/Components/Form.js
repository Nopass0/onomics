import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class Form extends React.Component {

    constructor(props) {
        super(props)
        this.title = this.props.title
        this.children = this.props.children
        this.message = this.props.message
        this.className = this.props.className
    }

    render() {
        return (
        <form id="form_addComicsPage" method="post" className={ this.className ? this.className : "flex justify-center items-center bg-zinc-900 rounded-lg shadow-xl mx-auto my-32 md:w-[450px]  md:h-[900px]"}
            enctype="multipart/form-data">
            <div className="flex flex-col justify-center ">
                { this.title && <h2 className="text-white font-bold text-lg mb-8">{ this.title }</h2>}
                { this.message && <p className="text-red-600">{ this.message }</p>}
                {this.children}
            </div>
        </form>
        )
    }
}