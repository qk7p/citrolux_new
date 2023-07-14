import { FC } from "react";

const Slider: FC = () => {
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
          <a href="">
            <img src="/images/arrow.svg" alt="" />
          </a>
        </div>
        <div
          className={
            "absolute w-8 2xl:w-12 right-0 rotate-180 hover:scale-110 ease-in duration-300"
          }
        >
          <a href="">
            <img src="/images/arrow.svg" alt="" />
          </a>
        </div>
        <div
          className={
            "w-full h-full bg-slide-1 bg-top bg-cover bg-no-repeat flex flex-row items-end"
          }
        >
          <div
            className={"w-1/2 h-1/2 flex flex-col items-center justify-center"}
          >
            <div className={"font-open-sans-regular px-8 "}>
              <h3 className={"text-white text-2xl text-shadow-sm shadow-black"}>
                Хотите, чтобы ребенок меньше болел?
              </h3>
              <h4
                className={
                  "text-white font-open-sans-semibold text-xl mt-2 text-shadow-sm shadow-black"
                }
              >
                Цитролюкс &nbsp; правильное средство для здоровья с детства!
                <br /> Зведи правильную привычку
              </h4>
              <p
                className={
                  "text-white text-xl mt-2 text-shadow-sm shadow-black"
                }
              >
                Цитролюкс по 28 капель 2 раза в день поможет забыть о простудах
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Slider };
