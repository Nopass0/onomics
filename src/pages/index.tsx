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

  const getUserInfo = useCallback(async () => {
    try {
      const response = await context.users.getMyProfile.fetch({
        token: window.localStorage.getItem("token") || "",
      });
      setUser(response);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }, [context.users]);

  const logout = useCallback(async () => {
    try {
      await context.auth.logout.fetch({
        token: window.localStorage.getItem("token") || "",
      });
      setIsAuth(false);
      window.localStorage.removeItem("token");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, [context.auth]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      getUserInfo();
    }
    setTheme(localStorage.getItem("theme") || "dark");

  }, [getUserInfo]);

  return (
    <>
      <main id="themed" data-mode={theme} className="w-screen h-screen flex">
        <div className="w-full h-full">
          <Slider/>
           <div className="mt-4 mx-10 lg:mx-24 container flex overflow-hidden">
            <div className="w-2/3">
              <div id="headline" className="flex float-row items-center justify-between">
                <h2 className="text-xl text-primary-dark dark:text-primary">Ваша подборка</h2>
                <p className="text-sm text-btn-secondary">Ещё</p>
              </div>
              <div id="content-wrapper" className="flex flex-wrap overflow-hidden">

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

                <a draggable="false" className="slider-item ml-2 pt-4 pb-1 flex flex-col max-w-[180px] mr-2" href="{{ request.path }}comics/{{ comic.id }}">
                  <div className="slider-item-image mb-2">
                      <img src="https://placehold.jp/180x270.png" alt="Comics" className="h-[270px] w-40 rounded-lg" />
                  </div>
                  <div className="flex mx-1 flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
                      <p className="mr-2">Комикс</p>

                      <p className="mr-1">1K</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                      </svg>

                  </div>
                  <div className="slider-item-title mx-1">
                      <h3 className="text-primary-dark dark:text-primary leading-5">Test</h3>
                  </div>
                </a>

              </div>
            </div>
           </div>
        </div>
      </main>
    </>
  );
}
