import { FC } from "react";
import Image from "next/image";

const Immunity: FC = () => {
  return (
    <section
      className={
        "mt-12 md:mt-20 border-b-4 border-white bg-immunity-background bg-cover bg-no-repeat"
      }
    >
      <div className={"flex flex-col lg:flex-row items-center lg:items-start w-11/12 m-auto"}>
        <div className={"hidden md:flex w-8/12 lg:w-7/12 items-center mt-10 lg:mt-0"}>
          <Image width={0} height={0} sizes={"100vw"} src="/images/citrolux-oranges.webp" alt="" className={"w-full"} />
        </div>
        <div className={"w-11/12 lg:w-9/12 flex lg:pb-6 xl:py-8"}>
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div className={"flex flex-row md:flex-row items-center justify-between mt-4 md:mt-0"}>
              <div className={"pt-4"}>
                <p
                  className={
                    "text-main font-open-sans-semibold md:font-open-sans-light text-xl md:text-3xl text-center"
                  }
                >
                  Нарингин
                </p>
                <div className={"flex items-center m-4"}>
                  <Image width={0} height={0} sizes={"100vw"}
                    src="/images/naringin.svg"
                    alt="naringin"
                    className={"h-32 md:h-40 lg:h-32 xl:h-40 w-full"}
                  />
                </div>
              </div>
              <div className={"w-6 m-2 mt-12"}>
                <Image width={0} height={0} sizes={"100vw"} src="/images/plus_wide.svg" alt="plus_icon" />
              </div>
              <div className={"pt-4"}>
                <p
                  className={
                    "text-main font-open-sans-semibold md:font-open-sans-light text-xl md:text-3xl text-center"
                  }
                >
                  Витамин С
                </p>
                <div className={"flex items-center m-4"}>
                  <Image width={0} height={0} sizes={"100vw"}
                    src="/images/vitamin-c.svg"
                    alt="vitamin_c"
                    className={"h-32 md:h-40 lg:h-32 xl:h-40 w-full"}
                  />
                </div>
              </div>
            </div>
            <div className={"flex flex-col item-center"}>
              <div className={"w-full h-5 mt-4"}>
                <Image width={0} height={0} sizes={"100vw"}
                  src="/images/arrow-loose.svg"
                  alt="arrow_loose_icon"
                  className={"w-full h-full"}
                />
              </div>
              <div className="h-2 mt-2 bg-wave-bold bg-repeat-x" />
              <h4
                className={
                  "my-2 font-open-sans-light uppercase text-main text-xl md:text-3xl lg:text-2xl xl:text-3xl text-center tracking-wider"
                }
              >
                усиление иммунной защиты
              </h4>
              <div className="h-2 bg-wave-bold bg-repeat-x" />
              <div className={"mt-4 md:mb-10 lg:mb-0 flex flex-col md:flex-row items-center justify-around"}>
                <div className={"mx-2 flex flex-col items-center "}>
                  <Image width={0} height={0} sizes={"100vw"}
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"hidden md:block w-16"}
                  />
                  <p
                    className={
                      "p-2 mt-2 md:w-48 lg:w-36 xl:w-44 md:aspect-square flex items-center text-center md:rounded-full md:bg-white text-main font-open-sans-semibold lg:text-xs xl:text-md leading-5"
                    }
                  >
                    Регуляция иммунологических реакций
                  </p>
                </div>
                <div className={"lg:mx-4 xl:mx-8 flex flex-col items-center "}>
                  <Image width={0} height={0} sizes={"100vw"} src="/images/arrow_down.svg" alt="" className={"hidden md:block w-16"} />

                  <p
                    className={
                      "p-2 mt-2 md:w-48 lg:w-36 xl:w-44 md:aspect-square flex items-center text-center md:rounded-full md:bg-white text-main font-open-sans-semibold lg:text-xs xl:text-md leading-5"
                    }
                  >
                    Усиление активности иммуных клеток
                  </p>
                </div>
                <div className={"mx-2 flex flex-col items-center"}>
                  <Image width={0} height={0} sizes={"100vw"}
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"hidden md:block w-16"}
                  />
                  <p
                    className={
                      "mb-8 md:mb-0 p-2 mt-2 md:w-48 lg:w-36 xl:w-44 md:aspect-square flex items-center text-center md:rounded-full md:bg-white text-main font-open-sans-semibold lg:text-xs xl:text-md leading-5"
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
