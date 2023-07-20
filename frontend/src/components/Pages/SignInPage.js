import React, { Component } from 'react'
import axios from 'axios'
import { render } from "react-dom"
import { Form } from '../Components/Form'
import { BlueLink } from '../Components/BlueLink'
import { TextInput } from '../Components/TextInput'
import { BlueButton } from '../Components/BlueButton'
import { Text } from '../Components/Text'
import { Link } from 'react-router-dom'
import { auth } from '../api/auth'

export class SignInPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        axios.get('/api/csrf_token')
            .then( (res) => this.setState({ token: res.data['csrf_token'] }) )
    }
    onClick(e) {
        e.preventDefault()
        console.log(this.state.token)
        
        auth(this.state.username, this.state.password)
        this.forceUpdate()
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <>
            <Form title="Вход" className="reg_block--div flex justify-center bg-zinc-900 mx-auto rounded-lg shadow-xl my-32 md:w-[450px] h-[440px]">
                <TextInput placeholder="Логин" min='5' max='16' onChange={this.onChangeUsername.bind(this)}/>
                <TextInput placeholder="Пароль" min='5' max='16' secure onChange={this.onChangePassword.bind(this)}/>
                <Link href="../recovery"
                className="text-[#5fa9c1] font-light text-sm text-right mb-4 mt-2 duration-[400ms] hover:text-[#3f7081] active:text-[#3f7081]">Забыли
                пароль?</Link>
                <BlueButton text="Войти" onClick={this.onClick.bind(this)}  className="reg_log_in text-center text-white mt-3 mb-12 bg-[#5fa9c1] py-[5px] border-2 rounded-3xl border-[#5fa9c1] duration-[400ms] hover:bg-[#3f7081] hover:border-[#3f7081] active:bg-[#3f7081] active:border-[#3f7081]" />
                <Text className="font-light text-xs text-center text-white">Ещё нет аккаунта?</Text>
                <Link to="../signup" className="reg_had--acc mx-4 px-2 py-2 text-center text-[#5fa9c1] duration-[400ms] hover:text-[#3f7081] active:text-[#3f7081]" >Зарегистрироватся</Link>
            </Form>
            </>
        )
    }
}