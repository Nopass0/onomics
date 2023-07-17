import React, { Component } from 'react'
import { render } from "react-dom"
import { Link } from 'react-router-dom'
import { TextInput } from './TextInput'
import "react-icons/io5";
import { IoCalendarNumberOutline } from 'react-icons/io5';

export class DataInput extends React.Component {

    constructor(props) {
        super(props)
        this.text = this.props.text

        this.isCalendarShown = false
    }

    componentDidMount() {
    }

    showCalendar() {
        console.log("show calendar", this.isCalendarShown)
        this.isCalendarShown = !this.isCalendarShown
    }

    render() {
        return (
            <>
                <div className="relative" onClick={this.showCalendar.bind(this)}>
                    <TextInput placeholder={this.text} id="data-input"/>
                    <IoCalendarNumberOutline className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size="1.4em" />
                </div>
                { this.isCalendarShown == true && (
                    <div className="absolute top-12 right-0 bg-zinc-100 rounded-lg shadow-lg text-gray-100">
                    sss
                    </div>
                )}
            </>
        )
    }
}