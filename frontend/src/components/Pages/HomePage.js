import React, { Component } from 'react'
import { render } from "react-dom"
import { BlueLink } from '../Components/BlueLink'
import { TransparentLink } from '../Components/TransparentButton'
import { Genre } from '../Components/Genre'
import { GenreWrap } from '../Components/GenreWrap'

export function HomePage() {
    let [csrf_token, set_csrf_token] = React.useState('')

    React.useEffect(() => {
        fetch('/api/csrf_token')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok.')
        })
        .then(data => set_csrf_token(data['csrf_token']))
    }, [])


    return (
        <>
        <div className="text-gray-100">
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
            <div className='text-gray-100 bg-slate-500 py-2 px-4'>Token: {csrf_token }</div>
        </div>
        </>
    )
}