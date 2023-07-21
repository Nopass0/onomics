import React, { Component } from 'react'
import { render } from "react-dom"
import { BlueLink } from '../Components/BlueLink'
import { TransparentLink } from '../Components/TransparentButton'
import { Genre } from '../Components/Genre'
import { GenreWrap } from '../Components/GenreWrap'
import { isAuth, myUserInfo } from '../api/auth'
import { BlueButton } from '../Components/BlueButton'
import { Slider } from '../Components/Slider'
import { ComicsInstance } from '../Components/ComicsInstance'
import { getAllComics } from '../api/comics'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            info: {},
            comicsList: []
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
        getAllComics().then( (data) => {
            console.log(data)
            this.setState({
                comicsList: data
            } )
        } )


    }

    onClick(e) {
        e.preventDefault()
        console.log(this.state.info)
        console.log(this.state.comicsList)
    }

    render() {
        return (
            <>
                <Slider className="h-74 w-full overflow-y-hidden flex flex-row flex-nowrap">
                    {this.state.comicsList.map( (data) => {
                        return (
                            <ComicsInstance key={data.id} id={data.id} author_name='Test Name' text={data.title} image_url={data.image} views_count='1.2K' width='280' height='380'/>
                        )
                    } )}


                </Slider>
            </>
        )
    }

}