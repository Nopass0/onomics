import React, { Component } from 'react'
import { render } from "react-dom"
import { Form } from '../Components/Form'
import { BlueLink } from '../Components/BlueLink'
import { TextInput } from '../Components/TextInput'
import { BlueButton } from '../Components/BlueButton'
import { Text } from '../Components/Text'
import { Link } from 'react-router-dom'
import { DataInput } from '../Components/DataInput'

export function SignUpPage() {

    return (
        <>
        <Form title="Регистрация" className="reg_block--div flex justify-center bg-zinc-900 rounded-lg shadow-xl mx-auto my-32 md:w-[450px] md:h-[630px]">
            <TextInput placeholder="Логин" min='5' max='16' />
            <TextInput placeholder="Пароль" min='5' max='16' secure/>
            <TextInput placeholder="Повтор пароля" min='5' max='16' secure/>
            <TextInput placeholder="Имя" min='2' max='26' />
            <TextInput placeholder="Фамилия" min='2' max='26' />
            <TextInput placeholder="E-mail" min='5' max='26' />

            {/* bdate, gender */}
            <DataInput text="Дата рождения" />
            <Link href="recovery"
            className="text-[#5fa9c1] font-light text-sm text-right mb-4 mt-2 duration-[400ms] hover:text-[#3f7081] active:text-[#3f7081]">Забыли
            пароль?</Link>
            <BlueButton text="Зарегистрироватся" className="reg_log_in text-center text-white mt-3 mb-12 bg-[#5fa9c1] py-[5px] border-2 rounded-3xl border-[#5fa9c1] duration-[400ms] hover:bg-[#3f7081] hover:border-[#3f7081] active:bg-[#3f7081] active:border-[#3f7081]" />
            <h3 className="font-light text-white text-xs text-center">Уже есть аккаунт?</h3>
            <Link to="signup" className="reg_had--acc mx-4 px-2 py-2 text-center text-[#5fa9c1] duration-[400ms] hover:text-[#3f7081] active:text-[#3f7081]" >Войти</Link>
        </Form>
        </>
    )
}