import React, { Component } from 'react'
import { render } from "react-dom"

export function CatalogPage() {
    
    return (

      <div className="flex flex-wrap md:flex-row md:float-left w-full">
       <div className="md:w-1/3 w-full">
        <div className="px-2">
            <input type="text" className="w-full my-1 bg-zinc-800 text-gray-100 rounded-lg px-2 py-2" placeholder="🔎 Поиск" />
              <div className="bg-zinc-800 rounded-lg px-4 py-2 my-4">
                  <h4 className="text-gray-200 mb-2 my-2">Жанры</h4>
                  
                  <div className="my-2"> 
                      <div className="bg-zinc-800 rounded-lg px-4 py-2 mb-4 h-24 overflow-y-auto">
                          <div className="flex items-center">
                              <input id="check" type="checkbox" className="mr-2"/>
                              <label className="text-gray-200 mx-2">Экшен</label> 
                          </div>
                          <div className="flex items-center">
                              <input id="check" type="checkbox" className="mr-2"/>
                              <label className="text-gray-200 mx-2">Драма</label> 
                          </div>
                          <div className="flex items-center">
                              <input id="check" type="checkbox" className="mr-2"/>
                              <label className="text-gray-200 mx-2">Триллер</label> 
                          </div>
                          <div className="flex items-center">
                              <input id="check" type="checkbox" className="mr-2"/>
                              <label className="text-gray-200 mx-2">Приключение</label> 
                          </div>
                          <div className="flex items-center">
                              <input id="check" type="checkbox" className="mr-2"/>
                              <label className="text-gray-200 mx-2">Ещё что-то</label> 
                          </div>
                      </div>
                  </div>
          </div>
  
          <div className="bg-zinc-800 rounded-lg px-4 py-2 my-4">
              <h4 className="text-gray-200 mb-2 my-2">Тэги</h4>
              
              <div className="my-2"> 
                  <div className="bg-zinc-800 rounded-lg px-4 py-2 mb-4 h-24 overflow-y-auto">
                      <div className="flex items-center">
                          <input id="check" type="checkbox" className="mr-2"/>
                          <label className="text-gray-200 mx-2 truncate">ГГ Женщина</label>
                      </div>
                      <div className="flex items-center">
                          <input id="check" type="checkbox" className="mr-2"/>
                          <label className="text-gray-200 mx-2 truncate">ГГ Мужчина</label>
                      </div>
                      <div className="flex items-center">
                          <input id="check" type="checkbox" className="mr-2"/>
                          <label className="text-gray-200 mx-2 truncate">ГГ Овощь</label>
                      </div>
                      <div className="flex items-center">
                          <input id="check" type="checkbox" className="mr-2"/>
                          <label className="text-gray-200 mx-2 truncate">ГГ кто-то</label>
                      </div>
                      <div className="flex items-center">
                          <input id="check" type="checkbox" className="mr-2"/>
                          <label className="text-gray-200 mx-2 truncate">Ёще что-то</label>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-zinc-800 rounded-lg px-4 py-2 my-4">
              <h4 className="text-gray-200 mb-2 my-2">Кол-во глав</h4>
              
              <div className="my-2 flex flex-wrap items-center justify-between"> 
                  <span className="text-gray-200 mx-2 rounded-xl hover:bg-sky-600 p-2 cursor-pointer">50</span>
                  <span className="text-gray-200 mx-2 rounded-xl hover:bg-sky-600 p-2 cursor-pointer">50-100</span>
                  <span className="text-gray-200 mx-2 rounded-xl hover:bg-sky-600 p-2 cursor-pointer">100-200</span>
                  <span className="text-gray-200 mx-2 rounded-xl hover:bg-sky-600 p-2 cursor-pointer">200+</span>
              </div>
          </div>
  
          <div className="bg-zinc-800 rounded-lg px-4 py-2 my-4">
              <h4 className="text-gray-200 mb-2 my-2">Год</h4>
              
              <div className="my-2 flex flex-wrap items-center justify-between"> 
                  <select className="bg-zinc-800 text-gray-200 rounded-xl hover:bg-sky-600 p-2 cursor-pointer">
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                  </select>
              </div>
          </div>
        </div>
       </div>
        <div className="md:w-2/3 sm:w-full px-2 flex flex-wrap">
          <div className="flex flex-wrap sm:h-72 items-center justify-center sm:justify-normal ">
            {/* {% for comic in comics %}
              <!--Создать карточку комикса с названем снизу и картинкой 144x216 сверху--> 
              <a className="my-2 " href="{{ comic.get_absolute_url }}">
                <div className="slider-item-image flex justify-center">
                  <img src="{{ comic.image.url }}" alt="Comics" className="h-96 w-72 mx-4 sm:h-56 sm:w-40 sm:mx-2 rounded-md" />
                </div>
                <div className="slider-item-title mx-2">
                  <h3 className="text-gray-200 truncate text-lg text-center py-2">{{ comic.title }}</h3>
                </div>
            </a>
              <!--End-->
            {% endfor %} */}
            </div>
        </div>
      </div>

    )
}