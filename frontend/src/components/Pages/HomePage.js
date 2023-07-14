import React, { Component } from 'react'
import { render } from "react-dom"
import { BlueLink } from '../Components/BlueLink'
import { TransparentLink } from '../Components/TransparentButton'
import { Genre } from '../Components/Genre'
import { GenreWrap } from '../Components/GenreWrap'

export function HomePage() {
    
    return (
        <>
        <div className="text-gray-100">
            <BlueLink text="Catalog" />
            <TransparentLink text="Community" />
            <GenreWrap >
            <Genre text="Action" />
            <Genre text="Adventure" />
            <Genre text="Comedy" />
            <Genre text="Drama" />
            <Genre text="Fantasy" />
            </GenreWrap>
        </div>
        </>
    )
}