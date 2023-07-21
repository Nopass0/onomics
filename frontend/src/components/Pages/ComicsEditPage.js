import React, { Component } from 'react'
import { render } from "react-dom"

export function ComicEditPage() {
    return (
        <div className="mx-0 w-full xl:w-auto xl:mx-24 2xl:mx-64">
            <div className="container mx-auto flex flex-wrap pt-6 pb-2 px-4">
                <div className="px-4 pt-4 w-full sm:w-1/3 bg-zinc-900 rounded-md py-2">
                    <div id='tab_1_btn' className="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                        <p className="mx-2"></p>
                        <p className="w-full text-gray-100 py-2 items-center">Информация о комиксе</p>
                    </div>
                    <div id='tab_2_btn' className="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                        <p className="mx-2"></p>
                        <p className="w-full text-gray-100 py-2 items-center">Главы</p>
                    </div>
                    <div id='tab_3_btn' className="w-full items-center flex justify-center cursor-pointer hover:bg-zinc-800 rounded-md">
                        <p className="mx-2"></p>
                        <p className="w-full text-gray-100 py-2 items-center">Статистика</p>
                    </div>
                </div>
                <div id="tab_1" className="px-4 pt-4 w-full sm:w-2/3">
                    <h1 className="text-gray-100 text-xl mx-2">Информация о комиксе</h1>
                    <div id="avatar_label" className="flex flex-wrap w-full mx-2 mb-2">
                        <label for="avatar" className="text-gray-100 w-full mx-2">Обложка</label>
                    </div>
                    <div className="mt-4 flex flex-wrap">
                        <img src="#!" id="cover" className="h-96 w-72 rounded-md" alt="Avatar"></img>

                        {/* <!--Input for upload avatar--> */}
                        <input type="file" name="avatar" id="avatar" className="outline-0 border-none
              bg-zinc-900 rounded-md text-gray-100 outline-none w-full"></input>
                    </div>

                    <div className="mt-4 flex flex-wrap" id="content_wrapper">
                        <div id="comic_name" className="flex flex-wrap w-1/3 mx-2 mb-2">
                            <label for="name" className="text-gray-100 w-full mx-2">Название</label>
                            <input type="text" value="" name="name" id="title" placeholder="Название" className="outline-0 border-none
                  bg-zinc-900 rounded-md text-gray-100 outline-none"></input>
                        </div>

                        {/* <!--Tags and genres--> */}
                        <div id="comic_description" className="flex flex-wrap w-full mx-2 mb-2">
                            <label for="description" className="text-gray-100 w-full mx-2">Описание профиля</label>
                            <textarea type="text" name="description" id="description" placeholder="Описание" className="outline-0 border-none
                bg-zinc-900 rounded-md text-gray-100 outline-none w-full">

                            </textarea>
                        </div>
                        <div id="save" className="flex flex-wrap w-1/3 mx-2 mb-2">
                            <input type="button" name="save" id="save_btn" value="Сохранить" className="outline-0 border-none
                bg-zinc-900 rounded-md text-gray-100 outline-none hover:bg-blue-400"></input>
                        </div>
                    </div>
                </div>
                <div id="tab_2" className="px-4 pt-4 w-full sm:w-2/3 hidden">
                    <h1 className="text-gray-100 text-xl mx-2">Главы</h1>
                    <div id="addChapter" className="flex flex-wrap w-1/3 mx-2 mb-2">
                        <button name="addChapter" onclick="addChapter()" id="addChapter_btn" className="outline-0 border-none
                bg-zinc-900 rounded-md text-gray-100 outline-none hover:bg-blue-400 p-2 duration-[400ms]">

                        </button>
                        <input type="text" name="addChapterInput" onclick="" id="addChapter_name" className="outline-0 border-none
                bg-zinc-900 rounded-md text-gray-100 outline-none p-2 duration-[400ms]"></input>
                    </div>
                    <div className="w-full" id="chapters">

                        <a id="_chapter" href="{{ chapter.get_absolute_edit_url }}" className="text-gray-200 cursor-pointer flex w-full bg-zinc-800 hover:bg-zinc-500 rounded-md px-4 py-2 mx-2 mb-1">
                            <p className="mx-2">
                                <div className="mr-2 w-10 flex">
                                    <p className="ml-1" id="sequence_number"></p>
                                </div>
                                <p className="w-full" id="chapter_name"></p>
                                <button className="mx-2 p-2 bg-zinc-900 hover:bg-zinc-700 rounded-md" id="chapter_delete"></button>
                                <p className="hidden" id="chapter_id"></p>
                            </p>
                        </a>
                    </div>

                </div>
            </div>
            <div id="tab_3" className="px-4 pt-4 w-full sm:w-2/3 hidden">
                <h1 className="text-gray-100 text-xl mx-2">Главы</h1>

            </div>
        </div>
       
  
   )
}