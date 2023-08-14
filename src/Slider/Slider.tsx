import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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

  let arr = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9]

  return (
    <>
      <div
        id="slider"
        className="slider h-[310px] w-[99999px] overflow-y-hidden flex flex-row flex-nowrap bg-secondary dark:bg-secondary-dark"
      >
        <div
          id="slider-wrapper"
          className="w-auto h-auto flex flex-row flex-nowrap"
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >

                <p className="mr-1">1K</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>

        </div>
      </div>
    </>
  );
};

export default Slider;
