import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { IUser } from "./api/interfaces";
import Slider from "~/Slider/Slider";

export default function Home() {
  const [user, setUser] = useState({} as IUser);
  const [isAuth, setIsAuth] = useState(false);
  const [theme, setTheme] = useState("dark");

  const context = api.useContext();

  // const getUserInfo = useCallback(async () => {
  //   try {
  //     const response = await context.users.getMyProfile.fetch({
  //       token: window.localStorage.getItem("token") || "",
  //     });
  //     setUser(response);
  //   } catch (error) {
  //     console.error("Error fetching user info:", error);
  //   }
  // }, [context.users]);

  // const logout = useCallback(async () => {
  //   try {
  //     await context.auth.logout.fetch({
  //       token: window.localStorage.getItem("token") || "",
  //     });
  //     setIsAuth(false);
  //     window.localStorage.removeItem("token");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // }, [context.auth]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      // getUserInfo();
    }
    setTheme(localStorage.getItem("theme") || "dark");

  }, []);

  return (
    <>
      <main id="themed" data-mode={theme} className="w-screen flex">
        <div className="w-full h-full">
          <Slider/>

          {/* Main Menu With Recommendation */}
           <div className="sm:max-w-[1070px] mx-auto flex flex-row flex-nowrap pt-10 overflow-hidden max-sm:flex-col max-sm:ml-6 mb-44">
        
            {/* Recommendation */}
            <div className="flex sm:max-w-[680px] sm:ml-12 mr-12">
              <div className="flex flex-col w-full">
                <div id="headline" className="flex flex-row items-center justify-between mb-4">
                  <h2 className="text-2xl text-primary-dark dark:text-primary">Ваша подборка</h2>
                  <p className="text-sm text-btn hover:text-btn-secondary duration-150 cursor-pointer">Ещё</p>
                </div>
                <div id="content-wrapper" className="flex flex-col w-full">
                  <div className="link_comCatalog--index flex flex-col mb-3">
                    <a draggable="false" className="slider-item flex flex-row" href="{{ request.path }}comics/{{ comic.id }}">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[64px] h-[96px] rounded-md" />

                      <div className="flex flex-col flex-wrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-4">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>
                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                            <div className="flex flex-wrap">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet consequuntur dicta </p>
                            </div>
                      </div>
                    </a>
                  </div>

                  
                  <div className="link_comCatalog--index flex flex-col mb-3">
                    <a draggable="false" className="slider-item flex flex-row" href="{{ request.path }}comics/{{ comic.id }}">

                    <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[64px] h-[96px] rounded-md" />

                      <div className="flex flex-col flex-nowrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-4">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>
                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet consequuntur dicta </p>
                      </div>
                    </a>
                  </div>
                  
            

                </div>
              </div>
            </div>

            {/* Right menu */}
            <div className="max-w-[390px] flex flex-col max-md:mr-4">
              <div className="flex flex-col w-full mb-4">
                <h1 className="text-primary-dark dark:text-primary mb-4 text-xl">Популярно сегодня</h1>
                <div className="flex flex-col mb-3 w-full h-full">
                    <a draggable="false" className="slider-item flex flex-row mb-3" href="{{ request.path }}comics/{{ comic.id }}">

                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[60px] h-[90px] rounded-md" />

                      <div className="flex flex-col flex-nowrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-1">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>

                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                      </div>
                    </a>

                    <a draggable="false" className="slider-item flex flex-row mb-3" href="{{ request.path }}comics/{{ comic.id }}">

                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[60px] h-[90px] rounded-md" />

                      <div className="flex flex-col flex-nowrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-1">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>

                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                      </div>
                    </a>

                    <a href="#!" className="text-btn hover:text-btn-secondary duration-150 text-sm">Показать ещё</a>
                  </div>
                </div>
  
                <div className="flex flex-col w-full">
                  <h1 className="text-primary-dark dark:text-primary mb-4 text-xl">Топ месяца</h1>

                  <div className="flex flex-col w-full h-full mb-3">
                    <a draggable="false" className="slider-item flex flex-row mb-3" href="{{ request.path }}comics/{{ comic.id }}">

                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[60px] h-[90px] rounded-md" />

                      <div className="flex flex-col flex-nowrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-1">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>

                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                      </div>
                    </a>

                    <a draggable="false" className="slider-item flex flex-row mb-3" href="{{ request.path }}comics/{{ comic.id }}">

                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="w-[60px] h-[90px] rounded-md" />

                      <div className="flex flex-col flex-nowrap text-[#919191] font-semibold text-xs ml-2">
                        <div className="slider-item-title mb-1">
                            <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                        </div>

                          <div className="flex flex-row flex-nowrap">
                            <p className="mr-2">Комикс</p>
                            <p className="mr-1">1K</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                          </div>
                      </div>
                    </a>


                  <a href="#!" className="text-btn hover:text-btn-secondary duration-150 text-sm">Показать ещё</a>

                  </div>
                </div>



            </div>
           </div>

           {/* Slider Authors */}
           <div className="max-w-[1070px] w-full mx-auto flex flex-col flex-nowrap text-primary-dark dark:text-primary">
            <h1 className="text-2xl mb-4 max-xl:ml-2">Авторы месяца</h1>
            <div className="h-[120px] flex flex-row bg-secondary dark:bg-secondary-dark rounded-xl">
              <div className="flex flex-row rounded-none">
                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>

                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>
                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>
                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>
                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>
                
                <div className="flex flex-col justify-center items-center ml-4">
                  <img src="https://placehold.co/60x60" alt="Avatar" className="rounded-full mb-1" />
                  <h3 className="text-xs font-light">Nikita G.</h3>
                </div>
              </div>
            </div>
           </div>
        </div>
      </main>
    </>
  );
}
