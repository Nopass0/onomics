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
import { Carousel } from '@trendyol-js/react-carousel';

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
            {/* <div className="text-gray-100">
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
                <div className='text-gray-100 bg-slate-500 py-2 px-4'>Pass: {this.state.info['password']}</div> */}
                {/* <div className='text-gray-100 bg-slate-500 py-2 px-4'>Me: <ul>{this.state.info.map( (key, data) => {<li>{key} : {data}</li>} )}</ul></div> */}
                {/* <BlueButton text="GET" onClick={this.onClick.bind(this)}/> */}
               
            {/* </div> */}
                <Slider className="max-h-[400px] h-full w-[9999px] overflow-y-hidden flex flex-row flex-nowrap">
                <div id='sliderPlivi' className='w-auto flex flex-row flex-nowrap'>
                    {this.state.comicsList.map( (data) => {
                        return (
                            <ComicsInstance key={data.id} id={data.id} author_name='Test Name' text={data.title} image_url={data.image} views_count='1.2K' width='280' height='380'/>
                        )
                    } )}
                </div>

                </Slider>
                <Carousel slide={3} swiping={true}>
                {this.state.comicsList.map( (data) => {
                        return (
                            <ComicsInstance  key={data.id} id={data.id} author_name='Test Name' text={data.title} image_url={data.image} views_count='1.2K' width='280' height='380'/>
                        )
                    } )}
                </Carousel>
            </>
        )
    }

}