import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
// import { IUser } from "./api/interfaces";

const Slider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleMouseWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY;
      const scrollStep = 1; // Change this value as needed for scrolling speed
      setSliderPosition((prevPosition) => prevPosition + delta * scrollStep);
    },
    []
  );

  const handleMouseDown = useCallback(() => {
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (dragging) {
        const deltaX = event.movementX;
        setSliderPosition((prevPosition) => prevPosition + deltaX);
      }
    },
    [dragging]
  );

  useEffect(() => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.addEventListener("wheel", handleMouseWheel);
      slider.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        slider.removeEventListener("wheel", handleMouseWheel);
        slider.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [handleMouseWheel, handleMouseDown, handleMouseUp, handleMouseMove]);

  return (
    <>
      <div
        id="slider"
        className="slider h-[350px] w-[9999px] overflow-y-hidden flex flex-row flex-nowrap bg-secondary dark:bg-secondary-dark"
      >
        <div
          id="slider-wrapper"
          className="w-auto h-auto flex flex-row flex-nowrap"
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
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
    </>
  );
};

export default Slider;
