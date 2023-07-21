import React, { Component } from 'react'
import { render } from "react-dom"

export function ProfileEditPage() {
    return (
    <div class="mx-0 xl:mx-24 2xl:mx-64">
        <div class="container mx-auto flex flex-wrap pt-6 pb-2 px-4 max-sm:justify-center">
            <div class="px-4 pt-4 w-full md:w-1/3 bg-[#171717] rounded-md py-2 max-md:hidden">
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Информация об аккаунте</p>
            </div>
            {/* <!-- <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Пароль и конфеденциальность</p>
            </div> -->
            <!-- <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Кастомизация</p>
            </div> --> */}
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Банковские карты</p>
            </div>
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Баланс</p>
            </div>
            {/* <!-- <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Статистика</p>
            </div> --> */}
            </div>

            <div class="md:px-10 max-md:mt-10 md:w-2/3">
            <h1 class="text-gray-100 text-2xl mb-3">Информация об аккаунте</h1>
            <div id="avatar_label" class="flex flex-wrap mb-2">
                <label for="avatar" class="text-gray-100 text-lg">Аватар</label>
            </div>

                <div class="mt-4 flex flex-col justify-center sm:justify-normal">
                <img src="{{ user.profile.avatar.url }}" id="avatar_img" class="h-52 w-52 rounded-md mb-4" alt="Avatar"></img>
                {/* <!--Input for upload avatar--> */}
                <input type="file" name="avatar" id="avatar"
                    class="relative m-0 block min-w-0 sm:w-[300px] flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition
                    file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-zinc-600 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"></input>
                </div>

                {/* <!-- Form --> */}
                <form action="" method="post" enctype="multipart/form-data">

                <div class="mt-4 flex sm:flex-wrap max-sm:flex-col" id="content_wrapper">

                    <div class="flex justify-center item-center mb-4 max-sm:flex-col">

                    <div id="nickname" class="flex flex-col mr-3">
                        <label for="nickname" class="text-gray-100 ml-1 max-sm:ml-[6px] max-sm:mb-1 mb-2">Прозвище:</label>
                        <input type="text" name="nickname" id="nickname" placeholder="Прозвище" value="{% if user.profile.nickname %}{{user.profile.nickname}}{% else %}{{user.username}}{% endif %}" class="outline-0 border-none
                    bg-[#171717] rounded-md text-gray-100 outline-none max-sm:mb-3"></input>
                    </div>
                    <div id="first_name" class="flex flex-col mr-3">
                        <label for="first_name" class="text-gray-100 ml-1 max-sm:ml-[6px] max-sm:mb-1 mb-2">Имя:</label>
                        <input type="text" name="first_name" id="first_name" placeholder="Имя" value="{{user.first_name}}" class="outline-0 border-none
                    bg-[#171717] rounded-md text-gray-100 outline-none max-sm:mb-3"></input>
                    </div>
                    <div id="last_name" class="flex flex-col mr-3">
                        <label for="last_name" class="text-gray-100 ml-1 max-sm:ml-[6px] max-sm:mb-1 mb-2">Фамилия:</label>
                        <input type="text" name="last_name" id="last_name" placeholder="Фамилия" value="{{user.last_name}}" class="outline-0 border-none
                    bg-[#171717] rounded-md text-gray-100 outline-none max-sm:mb-3"></input>
                    </div>
                    </div>

                    <div class="flex flex-col max-sm:flex-wrap">
                    <div id="last_name" class="flex sm:justify-center sm:items-center mb-4 max-sm:flex-col">
                        <label for="select_naming" class="text-gray-100 mr-3 max-sm:ml-[6px] max-sm:mb-2">Выберите как к вам
                        обращатся:</label>
                        <input type="checkbox" name="isNickname" id="isNickname" class="hidden"></input>
                        <select name="select_naming" id="select_naming" class="outline-0 border-none
                    bg-[#171717] rounded-md text-gray-100 outline-none">
                        <option value="nickname">По прозвищу</option>
                        <option value="first_name_last_name">По имени и фамилии</option>
                        <option value="first_name_last_name">По имени и фамилии</option>
                        <option value="nickname">По прозвищу</option>
                        </select>
                    </div>
                    <div id="description" class="flex flex-col mb-5">
                        <label for="description" class="text-gray-100 ml-1 mb-3">Описание профиля:</label>
                        <textarea type="text" name="description" id="description" placeholder="Описание" class="outline-0 border-none
                    bg-[#171717] rounded-md text-gray-100 outline-none"
                        style="resize: vertical; max-height: 200px; min-height: 50px;"></textarea>

                    </div>
                    <div id="save" class="flex">
                        <input type="submit" name="save" id="save_btn" value="Сохранить"
                        class="cursor-pointer text-md px-3 py-2 rounded-md text-white duration-300 hover:bg-[#3f7081] active:bg-[#3f7081] bg-[#5fa9c1]"></input>
                    </div>
                    </div>

                </div>
                </form>


            </div>

            <div class="px-4 pt-4 w-full md:w-1/3 bg-[#171717] rounded-md py-2 md:hidden max-md:mt-20">
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Информация об аккаунте</p>
            </div>
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Пароль и конфеденциальность</p>
            </div>
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Кастомизация</p>
            </div> 
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Банковские карты</p>
            </div>
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Баланс</p>
            </div>
            <div class="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                <p class="mx-2"></p>
                <p class="w-full text-gray-100 py-2 items-center">Статистика</p>
            </div> 
            </div>
        </div>
    </div>

    )
}