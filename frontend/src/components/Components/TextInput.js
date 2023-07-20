import React, { Component } from 'react'
import { render } from "react-dom"

export class TextInput extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        this.placeholder = this.props.placeholder
        this.min = this.props.min
        this.max = this.props.max
        this.secure = this.props.secure
        this.id = this.props.id
        this.onChange = this.props.onChange

        this.msgShow = false
        this.msg = ""

        this.state = {
            length: 0
        };
    }

    componentDidMount() {
        console.log(this.state.length)
    }

    render() {
        return (
            <>
                <div className="my-1">
                { this.msgShow && <div className="text-gray-100 bg-orange-400 rounded-t-md items-center"><p className='mx-2'>{this.msg}</p></div>}
                <input id={this.id ? this.id : "text-input"} type={ this.secure ? "password" : "text" } className='w-full outline-0 border-none outline-none bg-zinc-800 text-gray-200 rounded-lg px-2 py-2' value={this.text}
                placeholder={this.placeholder} minLength={this.min} maxLength={this.max} onChange={ this.onChange.bind(this) }
                />
            </div>
            </>
        )
    }
}