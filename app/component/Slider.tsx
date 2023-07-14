"use client";

import { FC, useState, MouseEvent } from "react";

type SliderItem = {
  img: string;
  title: string;
  description: string[];
};

const sliders: SliderItem[] = [
  {
    img: "/images/slide-1.jpeg",
    title: "Хотите, чтобы Ваш ребенок меньше болел?",
    description: [
      "Цитролюкс - правильное средство для здоровья с детства! Заведи правильную привычку",
      "Цитролюкс по 28 капель 2 раза в день поможет забыть о простудах",
    ],
  },
  {
    img: "/images/slide-2.jpg",
    title: "Хотите, чтобы отпуск прошел без забот?",
    description: [
      "Принимайте Цитролюкс!",
      "Лето - самое время прислушаться к здоровью!",
      "Заведи полезную привычку!",
      "Цитролюкс по 28 капель 2 раза в день для здорового отдыха качества люкс!",
    ],
  },
  {
    img: "/images/slide-3.jpg",
    title: "Зима не в радость? Одолевают простуды?",
    description: [
      "Принимайте Цитролюкс!",
      "Зима не повод ставить крест на здоровье!",
      "Заведи полезную привычку!",
      "Цитролюкс по 28 капель 2 раза в день поможет наслаждаться здоровьем всю зиму!",
    ],
  },
  {
    img: "/images/slide-4.jpg",
    title: "Нет времени, чтобы болеть?",
    description: [
      "Принимайте Цитролюкс!",
      "И здоровье пусть работает на Вас каждый день и час!",
      "Заведи полезную привычку!",
      "Цитролюкс по 28 капель 2 раза в день поможет иммунитету заработать за двоих, а Вам безболезненно зарабатывать деньги!",
    ],
  },
  {
    img: "/images/slide-5.jpg",
    title: "Хотите, чтобы ребенок меньше болел?",
    description: [
      "Цитролюкс - правильное средство для здоровья с детства!",
      "Заведи полезную привычку!",
      "Цитролюкс по 28 капель поможет забыть о простудах!",
    ],
  },
];

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <section className={"mt-20"}>
      <div
        className={
          "relative  flex flex-row items-center w-full h-slider overflow-hidden"
        }
      >
        <div
          className={
            "absolute w-8 2xl:w-12 hover:scale-110 ease-in duration-300"
          }
        >
          <button onClick={handlePreviousSlide} className={"w-full"}>
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
        <div
          className={
            "absolute w-8 2xl:w-12 right-0 rotate-180 hover:scale-110 ease-in duration-300"
          }
        >
          <button onClick={handleNextSlider} className={"w-full"}>
            <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
        <div
          className={
            "w-full h-full bg-top bg-cover bg-no-repeat flex flex-row items-end"
          }
          style={{ backgroundImage: `url(${sliders[activeSlide].img})` }}
        >
          <div
            className={"w-1/2 h-1/2 flex flex-col items-center justify-center"}
          >
            <div className={"font-open-sans-regular px-8 "}>
              <h3 className={"text-white text-2xl text-shadow-sm shadow-black"}>
                {sliders[activeSlide].title}
              </h3>
              {sliders[activeSlide].description.map((element, index) => (
                <p
                  key={index}
                  className={
                    "text-white text-xl mt-2 text-shadow-sm shadow-black"
                  }
                >
                  {element}
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
