"use client";

import { FC, useState, MouseEvent } from "react";

type SliderItem = {
  img: string;
  description: DescriptionItem[];
  position: ItemPosition;
};

type DescriptionItem = {
  text: string;
  textStyle: string;
};

type ItemPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const sliders: SliderItem[] = [
  {
    position: "bottom-left",
    img: "/images/slide-1.jpeg",
    description: [
      {
        text: "Хотите, чтобы Ваш ребенок меньше болел?",
        textStyle:
          "text-2xl font-proxima-bold text-white text-shadow-sm shadow-black",
      },
      {
        text: "Цитролюкс - правильное средство для здоровья с детства! Заведи правильную привычку",
        textStyle:
          "text-white text-lg font-open-sans-regular text-shadow-sm shadow-black mt-2",
      },
      {
        text: "Цитролюкс по 28 капель 2 раза в день поможет забыть о простудах",
        textStyle:
          "text-white text-lg font-open-sans-regular text-shadow-sm shadow-black mt-2",
      },
    ],
  },
  {
    position: "top-right",
    img: "/images/slide-2.jpg",
    description: [
      {
        text: "Хотите, чтобы отпуск прошел без забот?",
        textStyle: "text-3xl font-open-sans-light text-red-500",
      },
      {
        text: "Принимайте Цитролюкс!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl mt-2",
      },
      {
        text: "Лето - самое время прислушаться к здоровью!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl",
      },
      {
        text: "Заведи полезную привычку!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl",
      },
      {
        text: "Цитролюкс по 28 капель 2 раза в день для здорового отдыха качества люкс!",
        textStyle: "text-gray-600 text-xl font-open-sans-semibold mt-2",
      },
    ],
  },
  {
    position: "bottom-right",
    img: "/images/slide-3.jpg",
    description: [
      {
        text: "Зима не в радость? Одолевают простуды?",
        textStyle:
          "text-3xl font-open-sans-regular text-red-500 text-shadow-default shadow-white",
      },
      {
        text: "Принимайте Цитролюкс!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl mt-2",
      },
      {
        text: "Зима не повод ставить крест на здоровье!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl",
      },
      {
        text: "Заведи полезную привычку!",
        textStyle: "text-sky-900 font-open-sans-bold text-xl",
      },
      {
        text: "Цитролюкс по 28 капель 2 раза в день поможет наслаждаться здоровьем всю зиму!",
        textStyle: "text-gray-600 text-xl font-open-sans-semibold mt-2",
      },
    ],
  },
  {
    position: "top-right",
    img: "/images/slide-4.jpg",
    description: [
      {
        text: "Нет времени, чтобы болеть?",
        textStyle: "text-3xl font-open-sans-light text-gray-600 text-shadow-sm",
      },
      {
        text: "Принимайте Цитролюкс!",
        textStyle: `text-red-800 font-open-sans-semibold text-lg mt-2`,
      },
      {
        text: "И здоровье пусть работает на Вас каждый день и час!",
        textStyle: "text-red-800 font-open-sans-semibold text-lg",
      },
      {
        text: "Заведи полезную привычку!",
        textStyle: "text-red-800 font-open-sans-semibold text-lg",
      },
      {
        text: "Цитролюкс по 28 капель 2 раза в день поможет иммунитету заработать за двоих, а Вам безболезненно зарабатывать деньги!",
        textStyle: "text-gray-600 text-xl font-open-sans-regular mt-2",
      },
    ],
  },
  {
    position: "top-right",
    img: "/images/slide-5.jpg",
    description: [
      {
        text: "Хотите, чтобы ребенок меньше болел?",
        textStyle: "text-3xl font-open-sans-light text-white ",
      },
      {
        text: "Цитролюкс - правильное средство для здоровья с детства!",
        textStyle: "text-yellow-200 font-open-sans-regular text-xl mt-2",
      },
      {
        text: "Заведи полезную привычку!",
        textStyle: "text-yellow-200 font-open-sans-regular text-xl",
      },
      {
        text: "Цитролюкс по 28 капель поможет забыть о простудах!",
        textStyle: "text-white font-open-sans-regular text-xl mt-2",
      },
    ],
  },
];

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  function handlePosition(postion: ItemPosition): string {
    switch (postion) {
      case "top-left":
        return "items-start justify-start";

      case "top-right":
        return "items-start justify-end";

      case "bottom-left":
        return "items-end justify-start";

      case "bottom-right":
        return "items-end justify-end";

      default:
        return "items-end justify-start";
    }
  }

  const handlePreviousSlide = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    } else {
      console.log(sliders.length);

      setActiveSlide(sliders.length - 1);
    }
  };

  const handleNextSlider = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (activeSlide < sliders.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else [setActiveSlide(0)];
  };

  return (
    <section className={"hidden md:block mt-20"}>
      <div
        className={
          "relative flex flex-row items-center w-full min-h-slider overflow-hidden"
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
        <div
          className={`w-full min-h-slider bg-top bg-cover bg-no-repeat flex flex-row ${handlePosition(
            sliders[activeSlide].position
          )}`}
          style={{ backgroundImage: `url(${sliders[activeSlide].img})` }}
        >
          <div
            className={"w-1/2 h-1/2 flex flex-col items-center justify-center"}
          >
            <div className={"p-8"}>
              {sliders[activeSlide].description.map((element, index) => (
                <p key={index} className={`${element.textStyle}`}>
                  {element.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Slider };
