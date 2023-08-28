import React from "react";
import { useState, useEffect } from "react";

export default function comics_page() {
    return (
        <>
            <div className="px-2 py-4 sm:mx-4 sm:my-4 sm:w-full flex max-sm:flex-wrap flex-nowrap justify-center text-primary-dark dark:text-primary" id="comics">
                <div className="sm:max-w-[260px] sm:max-h-[350px] flex flex-wrap justify-center max-sm:mb-10 sm:justify-between sm:z-10  sm:left-[520px] sm:mr-4">

                <div className="max-sm:w-full">
                    <div className="py-2 sm:hidden h-20 inset-0 z-10 sm:w-full px-4 rounded-lg">
                        <h1 className="text-3xl block sm:hidden">Test1</h1>
                        <p className=" inline sm:hidden">Автор: Nikita Salam</p>
                    </div>
                    <img src="https://placehold.co/260x400" alt="Cover" className="max-sm:w-full  sm:w-[260px] sm:h-[400px] rounded-lg"/>
                </div>
                <div className="w-full flex flex-col">
                    <a href="#" className="w-full text-center text-primary my-2 bg-btn-secondary rounded-md px-4 py-4 sm:py-2 duration-300 hover:bg-btn">Читать</a>
                    <a href="!#" className="w-full text-center my-2 duration-300 rounded-md px-4 py-4 sm:py-2 hover:bg-secondary dark:hover:bg-secondary-dark max-sm:hidden">Редактировать</a>
                    <select name="bookmark" id="bookmark" className="w-full outline-none outline-0 border-none text-center cursor-pointer  bg-secondary dark:bg-secondary-dark rounded-md px-4 py-4 sm:py-2 ">
                        <option value="del" >В закладки</option>
                        <option value="will_read">Буду читать</option>
                        <option value="read">Читаю</option>
                        <option value="readed">Прочитано</option>
                        <option value="droped">Брошено</option>
                    </select>
                    <a href="#!" className="w-full text-center my-2 duration-300 rounded-md px-4 py-4 sm:py-2 text-text-secondary-dark hover:text-red-500 hover:bg-secondary dark:hover:bg-secondary-dark">
                        <div className="flex flex-row items-center justify-center text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle mr-2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                            <h2 className="">Пожаловаться</h2>
                        </div>
                    </a>
                </div>
                </div>
                <div className="px-2 sm:px-0 sm:mx-4 w-full sm:w-auto">
                <h1 className="text-primary-dark dark:text-primary text-3xl hidden sm:block mb-1">Test 1</h1>
                <div className="flex flex-col">
                    {/* <!--Description--> */}
                    <p className="text-gray-300 hidden sm:inline mb-4"></p>
                    <div id="info" className="flex flex-col">
                    <div className=" sm:bg-transparent rounded-lg mb-5">
                        <div className="hidden sm:flex flex-col">
                            <p className="text-text-secondary-dark">Автор: <span className="text-primary-dark dark:text-primary">Nikita Kohler</span></p>
                        </div>
                        
                        {/* <!-- Genre --> */}
                        <div className="flex flex-wrap">
                        <p className="text-text-secondary-dark py-2 max-sm:mr-2">Жанры: </p>
                        <div className="flex flex-wrap sm:ml-2 text-primary-dark dark:text-primary">
                            <div className="flex  bg-secondary dark:bg-secondary-dark rounded-xl sm:px-3 max-sm:px-2 mr-2">
                                <a href="#!" className="flex items-center hover:text-btn dark:hover:text-btn-secondary duration-200">Хентай</a>
                            </div>
                            <div className="flex  bg-secondary dark:bg-secondary-dark rounded-xl sm:px-3 max-sm:px-2 mr-2">
                                <a href="#!" className="flex items-center hover:text-btn dark:hover:text-btn-secondary duration-200">Хентай</a>
                            </div>
                            <div className="flex  bg-secondary dark:bg-secondary-dark rounded-xl sm:px-3 max-sm:px-2 mr-2">
                                <a href="#!" className="flex items-center hover:text-btn dark:hover:text-btn-secondary duration-200">Хентай</a>
                            </div>

                            <span className="text-gray-200 bg-zinc-800 rounded-xl px-2 mx-2 mb-1"></span>

                        </div>
                        </div>
                    </div>

                    {/* <!-- Statistics  --> */}
                    <div className="w-full mb-5 flex max-lg:flex-wrap text-primary-dark dark:text-primary">
                        <div className="flex sm:float-left w-full sm:w-auto py-2 sm:px-4 sm:justify-none max-lg:flex-wrap lg:justify-center items-center lg:bg-secondary dark:lg:bg-secondary-dark lg:rounded-lg lg:bg-opacity-50">
                        <div id="stars" className="mr-4">
                            <a href="!#" className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" fill="#ff9800" className="bi bi-star-fill mb-[2px] mr-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <p className=" text-center">9.1 (голосов: 452)</p>
                            </a>
                        </div>
                        <div id="views" className="flex justify-center items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            <span className=" py-1 px-2">1k</span>
                        </div>
                        <div id="likes" className="flex justify-center items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <span className=" py-1 px-2">1K</span>
                        </div>
                        <div id="Genre" className="flex justify-center items-center mr-4 max-sm:hidden">
                            <a href="!#" className=" hover:text-[#5fa9c1] duration-200">Манхва</a>
                        </div>
                        <div id="year" className="max-sm:hidden">
                            <p className="">2023</p>
                        </div>
                        </div>
                        {/* Share VK */}
                        <div id="share" className="max-md:hidden ml-5 flex items-center justify-center bg-secondary dark:bg-secondary-dark px-4 py-4 rounded-lg text-primary-dark dark:text-primary">
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-primary-dark dark:text-primary">

                        <div className="flex flex-wrap mb-5">
                        <div className="flex flex-col">
                            <div className="mr-5" id="description">
                            <button className="comics_desc-btn duration-300 relative hover:text-btn-secondary hover:bg-secondary dark:hover:bg-secondary-dark p-3 rounded-lg hover:bg-opacity-50">
                                Описание
                            </button>
                            </div>
                        </div>
            
                        <div className="" id="chapters">
                            <button className="comics_chap-btn duration-300 hover:text-btn-secondary hover:bg-secondary dark:hover:bg-secondary-dark py-3 px-4 rounded-lg hover:bg-opacity-50">
                            Главы (20)
                            </button>
                        </div>
                        </div>
            
                        <div className="mb-5 max-w-[660px]" id="description--text ">
                        <div className="w-full ml-3">
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus, minima ipsam accusamus unde voluptates deleniti. Facere repellat nostrum ratione vel, doloremque est cupiditate quo temporibus hic optio id quas.</p>
                        </div>
                        </div>


                    </div>


                    <div className="flex flex-col">
                        
                        <div className="description_view">
                        <h2 className="text-xl mb-3 ">Комментарии 100</h2>
                        <div id="comments" className="w-full flex flex-wrap">
                            

                            <form className="w-full" method="post">
                                <div className="w-full flex items-center rounded-lg justify-between">
                                    <div className="w-[100%]">
                                        <textarea name="" id="chat" rows={1} placeholder="Отсавить коментраий..." className="block p-2.5 bg-opacity-40 w-full overflow-hidden outline-0 border-none outline-none rounded-lg bg-secondary dark:bg-secondary-dark duraction-300 dark:placeholder:text-primary placeholder:text-primary-dark
                                        focus:bg-opacity-80 hover:bg-opacity-60 focus:ring-[#5fa9c1] placeholder:text-base resize-none max-h-[400px] h-[50px]">
                                        </textarea>
                                    </div>
                                    <button type="submit" className="w-[10%] inline-flex justify-center p-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="#5fa9c1" className="bi bi-send-fill rotate-[47deg] " viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                    </svg>
                                    </button>
                                
                                </div> 
                            </form>

                            {/* <div className="w-full bg-zinc-800 bg-opacity-50 py-5 text-center items-center">
                            <a href="" className="text-gray-200">Пожалуйста, войдите в аккаунт чтобы написать комментарий.</a>
                            </div> */}
                            
                            

                            <div className=" my-4 w-full h-full">
                            
{/* 
                            <div id="comment" className="flex my-2 p-4 items-center">
                                <img src="" alt="avatar" className="rounded-3xl w-9 h-9 mr-4"/>
                                <div className="w-full flex flex-wrap bg-zinc-800 bg-opacity-40 rounded-md p-4">
                                <span className="w-full text-zinc-400"></span>
                                <span className="w-full"></span>
                                </div>
                                <!-- <img src="{% static 'heart.svg' %}" alt="like" className="w-8 h-4"> -->
                            </div> */}
                                
                            {/* <!--<div className="w-full">
                                <div id="comment" className="flex my-2 p-4 bg-zinc-800 rounded-md">
                                <img src="https://placehold.jp/150x150.png" alt="avatar" className="rounded-3xl w-9 h-9 mr-4">
                                <span className="w-full">Очень-очень-очень-очень-очень-очень-очень-очень-очень-очень-очень длинный первый комментарии</span>
                                <img src="{% static 'heart.svg' %}" alt="like" className="w-8 h-4 mt-4 float-right">
                                </div>
                                <div id="sub-comment" className="w-full">
                                <div className="flex float-right my-2 p-4 bg-zinc-800 rounded-md w-2/3">
                                    <img src="https://placehold.jp/150x150.png" alt="avatar" className="rounded-3xl w-9 h-9 mr-4">
                                    <span className="w-full">Ответ на очень-очень-очень-очень-очень-очень-очень-очень-очень-очень-очень длинный первый комментарии</span>
                                    <img src="{% static 'heart.svg' %}" alt="like" className="w-8 h-4 mt-4 float-right">
                                </div>
                                </div>
                                <div id="sub-comment-addtion" className="w-full">
                                <div className="flex float-right my-2 p-4 rounded-md w-full">
                                    <a href="#" className="">Другие ответы</a>
                                </div>
                                </div>
                                <div id="comment" className="flex my-2 p-4 bg-zinc-800 rounded-md">
                                <img src="https://placehold.jp/150x150.png" alt="avatar" className="rounded-3xl w-9 h-9 mr-4">
                                <span className="w-full">Еще один очень-очень-очень-очень-очень-очень-очень-очень-очень-очень-очень длинный первый комментарии</span>
                                <img src="{% static 'heart.svg' %}" alt="like" className="w-8 h-4 mt-4 float-right">
                                </div>--> */}
                            </div>
                

                            <div className="mx-2 my-4 w-full">
                            <div className="w-full text-center py-20">
                                <p className="">Тут пока что нет комментариев, но ты можешь быть первым!</p>
                            </div>
                            </div>

                            
                        </div>
                        </div>

                        <div className="hidden" id="chapters_view">
                        <div className="w-full flex flex-wrap my-4">

                            <a href="" className="text-gray-200 cursor-pointer flex justify-between w-full bg-zinc-800 hover:bg-zinc-500 rounded-md px-4 py-2 mx-2 mb-1">
                            <div className="mr-2 w-10 flex">

                                <p className="ml-1" id="sequence_number"></p>
                            </div>
                            <p className="w-full" id="chapter_name"></p>
                            <div className="flex">
                                <img src="{% static 'eye.svg' %}" alt="views" className="w-4 h-4 mx-2"/>

                            </div>
                            </a>

                        </div>
                        </div>




                    </div>

                    </div>
                </div>
                </div>

                {/* <!-- Recommendation  --> */}
                <div className="flex lg:flex-col max-w-[250px] mr-5 max-lg:hidden">
                <div id="author" className="w-full mb-10">
                    <h2 className=" text-xl mb-5">Страница автора</h2>
                    <a href="#!" className="flex flex-nowrap">
                        <img src="https://placehold.co/56x56" alt="" className="w-14 h-14 mr-3 rounded-md"/>
                        <div className="flex flex-wrap">
                        <p className=" text-base">Nikita Salam</p>
                        </div>
                    </a>
                </div>


                <div id="addition" className="w-full">
                    <h2 className=" text-xl mb-5">Похожее</h2>
                    <div className="">

                    <a href="" className="mb-5 flex flex-nowrap">
                        <img src="https://placehold.co/70x105" alt="Cover" className=" h-[105px] w-[70px] mr-3 rounded-lg"/>
                        <div className="">
                        <p className="text-base break-all truncate">Test2</p>
                        <p className="text-base text-text-secondary-dark break-all">Похож по жанрам</p>
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            {/* MD right menu */}
            <div className="flex flex-col flex-nowrap w-full lg:hidden text-primary-dark dark:text-primary">
                <div id="author" className="w-full ml-5 mb-10">
                <h2 className="text-xl mb-5">Страница автора</h2>
                    <a href="#!" className="flex flex-nowrap">
                    <img src="https://placehold.co/56x56" alt="" className="w-14 h-14 mr-3 rounded-md"/>
                    <div className="flex flex-wrap">
                        <p className=" text-base">Nikita Salam</p>
                    </div>
                    </a>
                </div>

                <h2 className="text-xl mb-5 ml-5">Похожее</h2>
                <div id="addition" className="w-full bg-zinc-800 bg-opacity-50 text-primary-dark dark:text-primary">
                <div className="flex flex-row items-center ml-5 my-5">

                    <a href="" className="mr-5 flex flex-nowrap">
                    <img src="https://placehold.co/70x105" alt="Cover" className=" h-[105px] w-[70px] mr-3 rounded-lg"/>
                    <div className="">
                        <p className="text-base break-all">Test 2</p>
                        <p className="text-base text-text-secondary-dark break-all">Похож по жанрам</p>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </>
    );
}