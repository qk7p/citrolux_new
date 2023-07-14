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
                  <img src="/images/naringin.svg" alt="" className={"h-40"} />
                </div>
              </div>
              <div className={"w-6 m-2 mt-12"}>
                <img src="/images/plus_wide.svg" alt="" />
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
                  <img src="/images/vitamin-c.svg" alt="" className={"h-40"} />
                </div>
              </div>
            </div>
            <div className={"flex flex-col item-center"}>
              <div className={"w-full h-5 mt-4"}>
                <img
                  src="/images/arrow-loose.svg"
                  alt=""
                  className={"w-full h-full"}
                />
              </div>
              <div className="h-2 bg-wave-bold bg-repeat-x mt-2" />
              <h4
                className={
                  "font-open-sans-light uppercase text-main text-3xl text-center my-2 tracking-wider"
                }
              >
                усиление иммунной защиты
              </h4>
              <div className="h-2 bg-wave-bold bg-repeat-x" />
              <div className={"flex flex-row items-center mt-4"}>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-open-sans-semibold text-sm leading-5 mt-2"
                    }
                  >
                    Регуляция иммунологических реакций
                  </p>
                </div>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-open-sans-semibold text-sm leading-5 mt-2"
                    }
                  >
                    Улучшение фагоцитоза
                  </p>
                </div>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-open-sans-semibold text-sm leading-5 mt-2"
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
