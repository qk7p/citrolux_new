import { FC } from "react";

const Immunity: FC = () => {
  return (
    <section
      className={
        "mt-20 border-b-4 border-white bg-immunity-background bg-cover bg-no-repeat"
      }
    >
      <div className={"flex w-11/12 m-auto"}>
        <div className={"flex w-7/12 items-center"}>
          <img src="/images/citrolux-oranges.png" alt="" className={"w-full"} />
        </div>
        <div className={"w-9/12 flex py-8"}>
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div className={"flex flex-row items-center justify-between"}>
              <div className={"pt-4"}>
                <p
                  className={
                    "text-main font-open-sans-light text-3xl text-center"
                  }
                >
                  Нарингин
                </p>
                <div className={"flex items-center m-4"}>
                  <img
                    src="/images/naringin.svg"
                    alt="naringin"
                    className={"h-40"}
                  />
                </div>
              </div>
              <div className={"w-6 m-2 mt-12"}>
                <img src="/images/plus_wide.svg" alt="plus_icon" />
              </div>
              <div className={"pt-4"}>
                <p
                  className={
                    "text-main font-open-sans-light text-3xl text-center"
                  }
                >
                  Витамин С
                </p>
                <div className={"flex items-center m-4"}>
                  <img
                    src="/images/vitamin-c.svg"
                    alt="vitamin_c"
                    className={"h-40"}
                  />
                </div>
              </div>
            </div>
            <div className={"flex flex-col item-center"}>
              <div className={"w-full h-5 mt-4"}>
                <img
                  src="/images/arrow-loose.svg"
                  alt="arrow_loose_icon"
                  className={"w-full h-full"}
                />
              </div>
              <div className="h-2 mt-2 bg-wave-bold bg-repeat-x" />
              <h4
                className={
                  "my-2 font-open-sans-light uppercase text-main text-3xl text-center tracking-wider"
                }
              >
                усиление иммунной защиты
              </h4>
              <div className="h-2 bg-wave-bold bg-repeat-x" />
              <div className={"mt-4 flex flex-row items-center"}>
                <div className={"mx-2 flex flex-col items-center "}>
                  <img
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"w-16"}
                  />
                  <p
                    className={
                      "p-2 mt-2 w-44 aspect-square flex items-center text-center rounded-full bg-white font-open-sans-semibold text-md leading-5"
                    }
                  >
                    Регуляция иммунологических реакций
                  </p>
                </div>
                <div className={"mx-8 flex flex-col items-center "}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />

                  <p
                    className={
                      "p-2 mt-2 w-44 aspect-square flex items-center text-center rounded-full bg-white font-open-sans-semibold text-md leading-5"
                    }
                  >
                    Усиление активности иммуных клеток
                  </p>
                </div>
                <div className={"mx-2 flex flex-col items-center"}>
                  <img
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"w-16"}
                  />
                  <p
                    className={
                      "p-2 mt-2 w-44 aspect-square flex items-center text-center rounded-full bg-white font-open-sans-semibold text-md leading-5"
                    }
                  >
                    Повышение сопротивляемости организма инфекциям
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Immunity };
