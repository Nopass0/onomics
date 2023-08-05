import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark")
  }, [])

  return (
    <footer id="themed" className="lg:text-left max-w-full  backdrop-blur-xl font-light " data-mode={theme}>
      <div className="text-primary-dark dark:text-primary bg-primary dark:bg-primary-dark">
        <div className="flex items-center justify-center border-b-[2px] dark:border-b-[3px] border-[#f1f1f1] dark:border-[#171717] bg-opacity-60 p-6  lg:justify-between"></div>

        <div className="lg:flex lg:justify-center mx-auto py-10 md:text-left max-w-full max-lg:ml-8 max-xl:ml-5 items-center">
          <div className="grid-1 grid gap-10 lg:gap-44 max-md:grid-cols-1 lg:grid-cols-3">
            <div className="text-sm">
              <h6 className="mb-4 flex items-center font-semibold uppercase md:justify-start ">
                <img src="/images/other/logo.svg" alt="Logo" className="w-8 h-8 mr-3 logo" />
                Onomics
              </h6>
              <p className="">Читать комиксы онлайн на русском!</p>
              <p className="mb-4">Мы всегда готовы ответить на ваши вопросы!</p>
              <a href="#!" className="hover:text-[#5fa9c1] duration-150">Задать вопрос</a>
            </div>
            <div className="uppercase text-xs">
              <h6 className="mb-4 flex text-sm font-semibold uppercase md:justify-start">Информация</h6>
              <p className="mb-4">
                <a href="" className=" hover:text-[#5fa9c1] duration-150 text-opacity-60">
                  Пользовательское соглашение
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" hover:text-[#5fa9c1] duration-150">
                  Агентский договор
                </a>
              </p>
              <p className="mb-4">
                <a href="" className=" hover:text-[#5fa9c1] duration-150">
                  Соглашение о конфиденциальности
                </a>
              </p>
              <p>
                <a href="#!" className=" hover:text-[#5fa9c1] duration-150">
                  FAQ
                </a>
              </p>
            </div>
            <div className="text-sm">
              <h6 className="mb-4 flex font-semibold uppercase md:justify-start">Контакты</h6>
              <p className="mb-4 flex items-center md:justify-start">
                <a href="" className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="w-8 h-8 hover:text-[#5fa9c1] duration-300" viewBox="0 0 50 50">
                    <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"></path>
                  </svg>
                </a>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telegram w-8 h-7 hover:text-[#5fa9c1] duration-300" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center lg:justify-start">
                <small className="text-xs">Onomics.ru © 2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
