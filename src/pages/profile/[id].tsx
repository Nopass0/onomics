import { useState, useEffect } from "react";
import Head from "next/head";
import { api } from "../../utils/api";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router';
import { IoCheckmark } from "react-icons/io5";

export default function UserProfile() {
  const [user, setUser] = useState<any | null>(null);
  const [lang, setLang] = useState<any | null>(null);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const context = api.useContext();
  const router = useRouter();
  const id : string = router.query.id;
  const [isComicsExists, setIsComicsExists] = useState(false);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    // context.users
    //   .getMyProfile.fetch({ token: window.localStorage.getItem("token") || "" })
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user profile:", error);
    //     setLoading(false);
    //   });
    console.log(id);
    
    if (router.isReady) {
      context.users.getUserById.fetch({ id: id })
      .then((data) => {
        console.log(data)
        setUser(data);
        context.users.getMyProfile.fetch({ token: window.localStorage.getItem("token")}).then((user) => {
          data?.id == user?.id ? setIsMyProfile(true) : setIsMyProfile(false);
        })
      })
    }

    // context.locale.getLang.fetch({country: "ru"})
    //   .then((data) => {
    //     setLang(data);
    //   })


  }, [id, setUser]);

  const handleLogout = async () => {
    try {
      await context.auth.logout.fetch({ token: window.localStorage.getItem("token") || "" });
      window.localStorage.removeItem("token");
      // Redirect to the login page after logout
      window.location.href = "/auth/signin";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
    <div className="mx-0 w-full xl:w-auto xl:mx-24 2xl:mx-64 backdrop-blur-xl bg-opacity-80 bg-primary dark:bg-primary-dark">
  <div className="md:container md:mx-auto flex md:pt-6 md:pb-2 md:px-4 max-md:justify-center">
    <div className="md:flex md:h-52 md:justify-between max-md:justify-center">
      <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
        <Image src={`/${ user?.avatar }`} width={208} height={208} className="h-52 w-52 rounded-md max-md:mb-3" alt="Avatar"/>
        <div className="flex md:flex-wrap md:ml-4 md:h-52 md:w-2/3">
          <div className="flex max-md:flex-col max-md:items-center md:flex-wrap w-full md:w-auto md:h-52">

            <div className="md:h-28 md:w-full  max-md:flex max-md:justify-center  max-md:items-center max-md:flex-col">
              <h1 className="text-2xl font-bold text-primary-dark dark:text-primary md:flex md:w-full md:items-center max-md:mb-3">
                <p className="md:mr-2 md:w-full md:flex md:items-center ">{ user?.username } 

                  {/* {% if user_page.profile.isVerified %}
                  <span className="items-center ml-2"><IoCheckmark color="#eee"/></span>
                  {% endif %} */}
 
                </p>
              </h1>
              <div className="text-sm text-secondary-dark dark:text-secondary max-md:mb-3">@{user?.username}</div>
              <div className="text-primary-dark dark:text-primary text-md max-md:mb-3 max-md:text-center">
                {/* {% if user.profile.description %}
                {{ user_page.profile.description }}
                {% else %}
                Очень красочное описание профиля.<br>Тут
                можно многое рассказать о себе!
                {% endif %} */}
                {user?.description ? user?.description : "Очень красочное описание профиля. Тут можно многое рассказать о себе!"}
              </div>
            </div>

            <div className="grid max-sm:grid-cols-2 max-sm:mb-36 grid-cols-4 gap-4 h-16 max-md:mb-16">
              <div
                className="max-md:flex max-md:flex-col text-center bg-gray-300 mdbackdrop-blur-sm bg-opacity-20 rounded-lg p-4">
                <h1 className="text-2xl font-bold text-primary-dark dark:text-primary">12</h1>
                <h2 className="text-sm text-secondary-dark dark:text-secondary">Прочитанные главы</h2>
              </div>
              <div className="text-center bg-gray-300 backdrop-blur-sm bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-dark dark:text-primary">12</div>
                <div className="text-sm text-secondary-dark dark:text-secondary">Работы</div>
              </div>
              <div className="text-center bg-gray-300 backdrop-blur-sm bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-dark dark:text-primary">12</div>
                <div className="text-sm text-secondary-dark dark:text-secondary">Подписчики</div>
              </div>
              <div className="text-center bg-gray-300 backdrop-blur-sm bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary-dark dark:text-primary">12</div>
                <div className="text-sm text-secondary-dark dark:text-secondary">Подписки</div>
              </div>
            </div>

          </div>

        </div>
      </div>
{/* 
      <!-- <div className="w-1/3 flex flex-wrap">
        <p className="text-gray-200 text-lg mt-4 w-full h-4">Уровень <span className="text-md rounded-full border-2 p-1 border-yellow-500">36</span></p>
        <div className="bg-primary dark:bg-primary-dark backdrop-blur-sm bg-opacity-20 px-2 py-4 mb-2 rounded-md w-auto flex h-20 items-center" id="main_pin">
          <div className="w-10 h-10 items-center my-2 ml-2">
            {% bs_icon 'alarm' size='2.4em' color='red' %}
          </div>
          <div className="h-10 flex flex-wrap ml-4 items-center justify-center">
            <p className="text-gray-200 text-lg w-full">Значок</p>
            <p className="text-gray-300 text-sm w-full">3,600 ед. опыта</p>
          </div>
        </div>
      </div> --> */}

    </div>

  </div>

  <div className="md:container mx-auto md:px-4 md:pb-4 max-sm:flex max-sm:justify-center max-sm:items-center">
    {/* <!--Button 'Редактировать' if isMyProfile--> */}

    { isMyProfile ? <Link href="/edit_profile" id="edit_profile"
      className="bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary sm:w-auto text-center px-[6px] py-2 mr-0.5 rounded-sm duration-300 hover:bg-btn-secondary hover:text-primary hover:dark:text-primary hover:dark:bg-btn-secondary active:bg-[#5fa9c1] max-md:bg-[#5fa9c1] text-md">Редактировать
      профиль</Link> : 
          <button id="follow_btn" className="bg-primary dark:bg-primary-dark text-primary py-2 ml-0.5 rounded-sm hover:bg-blue-500 text-md">
          {/* {% if isFollower %} */}
          Отслеживать изменения
          {/* {% else %} */}
          {/* Перестать отслеживать */}
          {/* {% endif %} */}
        </button>
      }

  </div>

  <div className="mx-auto px-4 flex container my-2">
    <div className="mx-auto w-0 sm:w-2/3">

    </div>
    <div className="w-full sm:w-1/3 justify-center sm:justify-normal">
      {/* {% if isMyProfile and user.profile.email_confirmed == False %}
      <div className="text-center bg-red-500 py-2 w-full rounded-md">
        <a className="text-primary dark:text-primary-dark py-2 px-4" href="{% url 'confirm_email' %}">Подтвердите почту</a>
      </div>
      {% endif %} */}
    </div>
  </div>

  <div className="mx-auto px-4 flex flex-wrap-reverse sm:flex-none container">
    <div className="mx-auto w-full sm:w-2/3">
      {/* <!--My comics if exists--> */}
      <h2 className="text-primary-dark dark:text-primary text-2xl mt-2 ml-4">

        { isMyProfile ? <p>Мои работы</p> : <p>Работы автора</p> }


      </h2>
      {/* {% if comics %}
      <div className=" mt-2 flex flex-wrap mx-auto">
        {% for comic in comics %}
        <!--Создать карточку комикса с названем снизу и картинкой 144x216 сверху-->
        <a className="py-4" href="{{ comic.get_absolute_url }}">
          <div className="slider-item-image">
            <img src="{{ comic.image.url }}" alt="Comics" className="h-56 w-40 mx-2 rounded-md" />
          </div>
          <div className="slider-item-title mx-2">
            <h3 className="text-gray-200">{{ comic.title }}</h3>
          </div>
        </a>
        <!--End-->
        {% endfor %}
      </div>
      {% endif %} */}
      <div className={ isComicsExists ? `` : `h-[600px] flex justify-center items-center text-primary-dark dark:text-primary` }>
        { isComicsExists ? `` : `
        У пользователя нет работ.
        ` }
      </div>
    </div>

    <div className="w-full sm:w-1/3 h-auto bg-primary dark:bg-primary-dark rounded-md backdrop-blur-xl bg-opacity-20r">
      <div className="w-full flex">
        {/* <!-- sm:w-2/3 sm:pt-2 sm:px-4 --> */}
        {/* <p className="text-lg text-blue-300">В сети</p> */}
        <p className="text-lg flex- items-center text-blue-300 w-1/3 py-2 px-4 hidden">
          {/* {% bs_icon 'telegram' color='white' %}
          {% bs_icon 'discord' color='white' %} */}
        </p>
      </div>
      {/* <!-- sm:w-2/3 sm:pt-2 sm:px-4 --> */}
      {/* <p className="text-md text-blue-100">Подписчики</p> */}
      <div
        className="w-full mt-1 mb-2 py-2 flex flex-wrap bg-zinc-700 backdrop-blur-xl bg-opacity-20 items-center justify-center">

        <div className="flex flex-wrap w-auto mx-4">
          {/* {% if followers %}

          {% for follower in followers %}
          <a className="flex flex-wrap text-center h-20 w-20 m-1 rounded-lg justify-center hover:bg-zinc-700"
            href="{% url 'user_profile' %}?id={{ follower.id }}">
            <img src="{% static follower.profile.avatar %}" className="h-14 w-14 rounded-full" alt="Avatar">
            <p className="w-full text-blue-100 truncate">{{ follower.username }}</p>
          </a>
          {% endfor %}
          {% else %}
          <p className="text-blue-100 text-center w-full py-4 ">Нет подписчиков</p>
          {% endif %} */}
        </div>

      </div>
    </div>

  </div>


</div>
    </>
  );
}
