import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'

export class BlueButton extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text
        this.isDisabled = this.props.isDisabled
        this.className = this.props.className
        this.onClick = this.props.onClick
    }

    render() {
        return (
           <>
           {this.isDisabled == "true" ? (
            <button href="#" disabled onClick={ this.onClick.bind(this) } className={ this.className ? this.className : "w-full text-center text-gray-200 my-2 bg-[#1a5467] rounded-md px-4 py-4 sm:py-2 duration-300 disabled:bg-[#2a6578]" } >{this.text}</button>
           ) : (
            <button href="#" onClick={ this.onClick.bind(this) } className={ this.className ? this.className : "w-full text-center text-gray-200 my-2 bg-[#4c879a] rounded-md px-4 py-4 sm:py-2 duration-300 hover:bg-[#5fa9c1] disabled:bg-[#2a6578]" } >{this.text}</button>
           )}
           </>
        )
    }
}