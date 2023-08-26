import React from "react";
import { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu'


const Edit_profile: React.FC = () => {
    return (
        <>

                        {/* Settings   */}
                        <div id="Div_Settings" className=" rounded-r-3xl ">
                        {/* Profile Edit */}
                        <div className="flex flex-col max-sm:justify-center ml-6 max-sm:ml-2">
                            <h1 className="text-3xl mb-6 mr-12">Информация об аккаунте</h1>

                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center mb-6">
                                    <h2 className="text-xl mb-2">Аватар</h2>
                                    <img src="https://placehold.co/150x150" alt="" className="h-52 w-52 max-md:h-32 max-md:w-32 mb-2 rounded-lg"/>
                                    <input type="file" name="avatar" id="avatar"
                                    className="relative m-0 block min-w-0 w-[300px] flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] hover:file:text-btn dark:hover:file:text-btn text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-primary  file:px-3 file:py-[0.32rem] file:text-primary-dark file:transition
                                    file:duration-150 file:ease-in-out  file:[margin-inline-end:0.75rem] hover:file:bg-zinc-600 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"></input>
                                </div>
                                
                                <div className="flex flex-col flex-nowrap">
                                    <div className="mt-4 flex flex-col text-primary-dark dark:text-primary" id="content_wrapper">
                                        <div className="flex mb-6 max-md:flex-col ">
                                            <div id="nickname" className="flex flex-col mr-3">
                                                <label htmlFor="nickname" className="ml-1 max-md:ml-[6px] max-md:mb-1 mb-2 ">Прозвище:</label>
                                                <input type="text" name="nickname" id="nickname" placeholder="Прозвище"  className="outline-0 border-none
                                            bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                                            </div>
                                            <div id="first_name" className="flex flex-col mr-3">
                                                <label htmlFor="first_name" className="ml-1 max-md:ml-[6px] max-md:mb-1 mb-2">Имя:</label>
                                                <input type="text" name="first_name" id="first_name" placeholder="Имя"  className="outline-0 border-none
                                            bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                                            </div>
                                            <div id="last_name" className="flex flex-col mr-3">
                                                <label htmlFor="last_name" className="ml-1 max-md:ml-[6px] max-md:mb-1 mb-2">Фамилия:</label>
                                                <input type="text" name="last_name" id="last_name" placeholder="Фамилия"  className="outline-0 border-none
                                            bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none max-md:mb-3"/>
                                            </div>
                                        </div>
    
                                        <div className="flex flex-col max-md:flex-wrap">
                                            <div id="last_name" className="flex  mb-6 max-md:flex-col">
                                                <label htmlFor="select_naming" className=" mr-3 max-md:ml-[6px] max-md:mb-2">Выберите как к вам
                                                обращатся:</label>
                                                <input type="checkbox" name="isNickname" id="isNickname" className="hidden"/>
                                                <select name="select_naming" id="select_naming" className="outline-0 border-none
                                                bg-secondary dark:bg-primary-dark px-2 py-2 rounded-md  outline-none">
                                                    <option value="nickname">По прозвищу</option>
                                                    <option value="first_name_last_name">По имени и фамилии</option>
                                                    <option value="first_name_last_name">По имени и фамилии</option>
                                                    <option value="nickname">По прозвищу</option>
                                                </select>
                                            </div>
                                            <div id="description" className="flex flex-col mb-6">
                                                <label htmlFor="description" className=" ml-1 mb-3">Описание профиля:</label>
                                                <textarea type="text" name="description" id="description" placeholder="Описание" className="outline-0 border-none
                                            bg-secondary dark:bg-primary-dark px-2 rounded-md  outline-none resize-y max-h-[200px] min-h-[50px]"></textarea>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="">
                            <input type="submit" name="save" id="save_btn" value="Сохранить"
                            className="cursor-pointer text-md px-3 py-2 rounded-md text-primary duration-300 hover:bg-btn-secondary active:bg-btn-secondary bg-btn dark:bg-btn-secondary dark:active:bg-btn dark:hover:bg-btn"/>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Edit_profile;