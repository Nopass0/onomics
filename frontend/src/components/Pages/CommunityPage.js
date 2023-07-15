import React, { Component } from 'react'
import { render } from "react-dom"
import { Form } from '../Components/Form'
import { BlueLink } from '../Components/BlueLink'

export function CommunityPage() {
    
    return (
        <>
        <Form title="Добавить комикс" message="Сообщение">
            <BlueLink text="Добавить комикс" />
        </Form>
        </>
    )
}