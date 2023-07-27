"use client";

import { FC, useState, MouseEvent } from "react";

type SliderItem = {
  img: string;
};

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderImages: SliderItem[] = [
    { img: "/images/slide-1-plashka.jpg" },
    { img: "/images/slide-2-plashka.jpg" },
    { img: "/images/slide-3-plashka.jpg" },
    { img: "/images/slide-4-plashka.jpg" },
    { img: "/images/slide-5-plashka.jpg" },
  ];

  const handlePreviousSlide = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    } else {
      console.log(sliderImages.length);

      setActiveSlide(sliderImages.length - 1);
    }
  };

  const handleNextSlider = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (activeSlide < sliderImages.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else [setActiveSlide(0)];
  };

  return (
    <section className={"hidden md:block mt-20"}>
      <div
        className={
          "relative flex flex-row items-center w-full overflow-hidden"
        }
      >
        <div
          className={
            "absolute w-8 2xl:w-12 hover:scale-110 ease-in duration-300"
          }
        >
          <button onClick={handlePreviousSlide} className={"w-full"}>
            <img src="/images/arrow.svg" alt="arrow_left" />
          </button>
        </div>
        <div
          className={
            "absolute w-8 2xl:w-12 right-0 rotate-180 hover:scale-110 ease-in duration-300"
          }
        >
          <button onClick={handleNextSlider} className={"w-full"}>
            <img src="/images/arrow.svg" alt="arrow_right" />
          </button>
        </div>
        <div className={`w-full`}>
          <img
            src={sliderImages[activeSlide].img}
            className={"w-full h-full"}
          />
        </div>
      </div>
    </section>
  );
};

export { Slider };
