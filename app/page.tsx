export default function Home() {
  return (
    <div className={"relative ease-in duration-200"}>
      <header
        className={"h-banner bg-banner-background bg-cover bg-no-repeat bg-top"}
      >
        <nav className={"flex justify-between py-5 px-16"}>
          <div className={"w-60 ml-24 mt-1"}>
            <a href="#">
              <img
                src={"/images/logo-2.png"}
                className={"w-full h-full"}
                alt={""}
              />
            </a>
          </div>
          <ul
            className={
              "w-full flex flex-row justify-end pt-6 uppercase font-open-sans-bold text-sm tracking-wide text-main"
            }
          >
            <li>
              <a href="#" className={"nav_link__hover"}>
                где приобрести
              </a>
            </li>
            <li className={"ml-6"}>
              <a href="#" className={"nav_link__hover"}>
                рекомендации по применению
              </a>
            </li>
            <li className={"ml-6"}>
              <a href="#" className={"nav_link__hover"}>
                производитель
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        {/* About */}
        <section
          className={
            "relative bg-about-background bg-contain bg-top bg-no-repeat"
          }
        >
          <div className={"w-full flex justify-around mb-56 2xl:mb-80"}>
            <img
              src={"/images/drop.png"}
              alt={""}
              className={"absolute -top-20 z-10 w-44"}
            />
          </div>
          <div
            className={
              "grid grid-rows-about-rows grid-cols-about-cols w-2/3 m-auto"
            }
          >
            <h4
              className={
                "italic font-open-sans-light-italic text-3xl text-gray-600 leading-8"
              }
            >
              <span className={"text-main"}>Цитролюкс</span> &ndash; забота о
              себе и близких каждый день.
            </h4>
            <div className={"row-span-2 flex items-center"}>
              <img src={"/images/citrolux-flakon.png"} alt={""} />
            </div>
            <div className={"flex justify-end"}>
              <a
                href=""
                className={"flex flex-col items-center hover:opacity-70"}
              >
                <img src="/images/pdf.png" alt="" className={"w-16"} />
                <p
                  className={
                    "w-40 text-sm text-center underline text-main leading-tight tracking-tight"
                  }
                >
                  Скачать рекомендации по применению
                </p>
              </a>
            </div>
            <div className={" text-gray-600"}>
              <h5 className={"font-open-sans-light text-main text-xl mt-3"}>
                О продукте:
              </h5>
              <p
                className={
                  "font-open-sans-regular text-md leading-normal text-black"
                }
              >
                Цитролюкс создан на основе экстракта из семян грейпфрута и
                обогащен витамином С.{" "}
              </p>
              <p
                className={
                  "mt-2 font-open-sans-regular text-md leading-normal text-black"
                }
              >
                Экстракт из семня грейпфрута содержит биофлаваноид - нарингин,
                обладающий уникальными свойствами &quot;природного
                антибиотика&quot; и антиоксиданта.
              </p>
              <p
                className={
                  "mt-2 font-open-sans-regular text-md leading-normal text-black"
                }
              >
                Цитролюкс - натуральный продукт немецкого качества для взрослых
                и детей старше 12 лет.
              </p>
            </div>
            <div
              className={" flex flex-col font-open-snans-regular text-black"}
            >
              <h5 className={"text-xl text-main font-open-sans-light mt-3"}>
                Состав:
              </h5>
              <p>&ndash; Экстракт семян грейфрута</p>
              <p>&ndash; Аскорбиновая кислота</p>
              <h5 className={"text-xl text-main font-open-sans-light pr-12"}>
                Содержание активных компонентов в 1 мл раствора:
              </h5>
              <p>
                &ndash; Цитрусовые биофлаваноиды (нарингин) - не менее 8мг/мл
              </p>
              <p>&ndash; Витамин С 30 мг/мл</p>
              <h5 className={"text-xl text-main font-open-sans-light "}>
                Форма выпуска:
              </h5>
              <p>&ndash; Раствор по 20 мл или 50 мл во флаконе</p>
            </div>
          </div>
          <div className={"w-full flex justify-around p-10"}>
            <div className={"flex flex-col items-center w-28"}>
              <img src="/images/eco-product.png" alt="" className={"w-24"} />
              <p
                className={
                  "mt-2 font-open-sans-semibold uppercase text-lg text-center leading-tight tracking-wide text-gray-600"
                }
              >
                Натуральный продукт
              </p>
            </div>
            <div className={"flex flex-col items-center w-28"}>
              <img src="/images/eco-sources.png" alt="" className={"w-24"} />
              <p
                className={
                  "mt-2 font-open-sans-semibold uppercase text-lg text-center leading-tight tracking-wide text-gray-600"
                }
              >
                Экологически чистое сырье
              </p>
            </div>
          </div>
        </section>
        {/* Slider */}
        <section>
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
                className={
                  "w-1/2 h-1/2 flex flex-col items-center justify-center"
                }
              >
                <div className={"font-open-sans-regular px-36 "}>
                  <h3 className={"text-white text-2xl text-shadow-sm shadow-black"}>
                    Хотите, чтобы ребенок меньше болел?
                  </h3>
                  <h4 className={"text-white font-open-sans-semibold text-xl mt-2 text-shadow-sm shadow-black"}>
                    Цитролюкс &nbsp; правильное средство для здоровья с детства!
                    <br /> Зведи правильную привычку
                  </h4>
                  <p className={"text-white text-xl mt-2 text-shadow-sm shadow-black"}>
                    Цитролюкс по 28 капель 2 раза в день поможет забыть о
                    простудах
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Grapefruit */}
        <section className={"mt-20"}>
          <div className={"flex w-10/12 m-auto"}>
            <div className={"flex flex-col w-1/2 font-open-sans-regular"}>
              <h4
                className={
                  "text-main font-open-sans-light uppercase text-3xl leading-8"
                }
              >
                Цитролюкс создан на основе экстракта из семян грейпфрута и
                обогащен витамином с
              </h4>
              <p className={"mt-20 text-gray-600 pr-20 leading-6"}>
                Экстракт получают из семян, мякоти и белых мембран грейпфрута.
                Он содержит биофлаваноид - нарингин, обладающий уникальными
                свойствами &quot;природного антибиотика&quot; и антиоксиданта.
              </p>
              <p className={"mt-4 text-gray-600 pr-20 leading-6"}>
                Нарингин способствует укреплению иммунитета и помогает защитить
                организм от вирусов, бактерий, грибов, позволяя оставаться
                здоровым и бодрым во время работы и отдыха даже в сезон простуд!
              </p>
              <p className={"mt-4 text-gray-600 pr-20 leading-6"}>
                Витамин С усиливает способность нарингина повышать иммунитет.
              </p>
            </div>
            <div className={"w-1/2 flex flex-col items-center"}>
              <p
                className={
                  "text-center font-open-sans-regular text-lg text-gray-500 leading-5 px-8 tracking-wide mb-4"
                }
              >
                Нарингин обладает свойствами природного антибиотика и
                антиоксиданта
              </p>
              <div className="">
                <img src="/images/grapefruit.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Immunity */}
        <section
          className={
            "mt-20 py-6 border-b-4 border-white bg-immunity-background bg-cover bg-no-repeat"
          }
        >
          <div className={"flex w-11/12 m-auto"}>
            <div className={"flex w-7/12 items-center"}>
              <img
                src="/images/citrolux-oranges.png"
                alt=""
                className={"w-full"}
              />
            </div>
            <div className={"w-9/12 flex items-start"}>
              <div className={"flex flex-col items-center w-full"}>
                <div className={"flex flex-row items-center justify-between"}>
                  <div className={"pt-4"}>
                    <p
                      className={
                        "text-main font-open-sans-light text-3xl text-center"
                      }
                    >
                      Нарингин
                    </p>
                    <div className={"w-60 h-28 bg-gray-400 mt-4"}></div>
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
                    <div className={"w-40 h-28 bg-gray-400 mt-4"}></div>
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
                  <h4
                    className={
                      "font-open-sans-light uppercase text-main text-3xl text-center my-2 tracking-wider"
                    }
                  >
                    усиление иммунной защиты
                  </h4>
                </div>
                <div className={"flex flex-row items-center mt-4"}>
                  <div className={"flex flex-col items-center mx-2"}>
                    <img
                      src="/images/arrow_down.svg"
                      alt=""
                      className={"w-16"}
                    />
                    <p
                      className={
                        "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-open-sans-semibold text-sm leading-5 mt-2"
                      }
                    >
                      Регуляция иммунологических реакций
                    </p>
                  </div>
                  <div className={"flex flex-col items-center mx-2"}>
                    <img
                      src="/images/arrow_down.svg"
                      alt=""
                      className={"w-16"}
                    />
                    <p
                      className={
                        "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-open-sans-semibold text-sm leading-5 mt-2"
                      }
                    >
                      Улучшение фагоцитоза
                    </p>
                  </div>
                  <div className={"flex flex-col items-center mx-2"}>
                    <img
                      src="/images/arrow_down.svg"
                      alt=""
                      className={"w-16"}
                    />
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
        </section>
      </main>
      <footer className={"bg-footer-background bg-repeat-x"}>
        <div
          className={"flex justify-between items-center h-40 w-10/12 m-auto"}
        >
          <div className={"flex items-center"}>
            <div className={"w-24 mx-4"}>
              <img src="/images/pf-white.svg" alt="" />
            </div>
            <div
              className={
                "text-white font-proxima-regular leading-5 flex flex-col ml-4"
              }
            >
              <p>© 2016 ООО «ПИК-ФАРМА»</p>
              <p>Адрес: Москва, Оружейный пер., д. 25, стр. 1.</p>
              <a href={"tel:+74959255700"} className={"hover:underline"}>
                Тел.: (495) 925-57-00
              </a>
              <a
                href={"https://www.pikfarma.ru"}
                target={"_blank"}
                className={"hover:underline"}
              >
                www.pikfarma.ru
              </a>
            </div>
          </div>
          <div className={"flex items-center"}>
            <a
              href="http://citrolux.ru/#"
              target={"_blank"}
              className={"hover:opacity-70"}
            >
              {" "}
              <img src="/images/fb.svg" alt="" className={"w-10 mx-1"} />
            </a>
            <a
              href="http://citrolux.ru/#"
              target={"_blank"}
              className={"hover:opacity-70"}
            >
              <img src="/images/tw.svg" alt="" className={"w-10 mx-1"} />
            </a>
            <a
              href="http://youtube.com/pikfarma"
              target={"_blank"}
              className={"hover:opacity-70"}
            >
              {" "}
              <img src="/images/yt.svg" alt="" className={"w-10 mx-1"} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
