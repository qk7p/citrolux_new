export default function Home() {
  return (
    <div className={"relative"}>
      {/* <img
        src={"/images/site_long_final_new_2_1280.jpg"}
        className={"absolute left-0 top-0 -z-10 opacity-30"}
        alt={""}
      /> */}
      <header className={"h-banner bg-green-50"}>
        <nav className={"flex justify-between py-5 px-16"}>
          <div className={"w-60 ml-24 mt-1"}>
            <img
              src={"/images/logo-2.png"}
              className={"w-full h-full"}
              alt={""}
            />
          </div>
          <ul
            className={
              "w-full flex flex-row justify-end pt-6 uppercase font-proxima-extra-bold text-sm tracking-widest text-main"
            }
          >
            <li>
              <a href="#" className={"nav_link__hover"}>где приобрести</a>
            </li>
            <li className={"ml-6"}>
              <a href="#" className={"nav_link__hover"}>рекомендации по применению</a>
            </li>
            <li className={"ml-6"}>
              <a href="#" className={"nav_link__hover"}>производитель</a>
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
                "italic font-proxima-regular text-4xl text-gray-600 leading-8"
              }
            >
              <span className={"text-main"}>Цитролюкс</span> - забота о себе и
              близких каждый день.
            </h4>
            <div className={"row-span-2 flex items-center"}>
              <img src={"/images/citrolux.png"} alt={""} />
            </div>
            <div className={"flex justify-end"}>
              <a href="" className={"flex flex-col items-center hover:opacity-70"}>
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
              <h5 className={"font-proxima-regular text-main text-xl mt-3"}>
                О продукте:
              </h5>
              <p className={"font-proxima-regular text-md leading-tight"}>
                Цитролюкс создан на основе экстракта из семян грейпфрута и
                обогащен витамином С.{" "}
              </p>
              <p className={"mt-2 font-proxima-regular text-md leading-tight"}>
                Экстракт из семня грейпфрута содержит биофлаваноид - нарингин,
                обладающий уникальными свойствами &quot;природного
                антибиотика&quot; и антиоксиданта.
              </p>
              <p className={"mt-2 font-proxima-regular text-md leading-tight"}>
                Цитролюкс - натуральный продукт немецкого качества для взрослых
                и детей старше 12 лет.
              </p>
            </div>
            <div
              className={" flex flex-col font-proxima-regular text-gray-600"}
            >
              <h5 className={"text-xl text-main"}>Состав:</h5>
              <p>-Экстракт семян грейфрута</p>
              <p>-Аскорбиновая кислота</p>
              <h5 className={"text-xl text-main pr-12"}>
                Содержание активных компонентов в 1 мл раствора:
              </h5>
              <p>-Цитрусовые биофлаваноиды (нарингин) - не менее 8мг/мл</p>
              <p>-Витамин С 30 мг/мл</p>
              <h5 className={"text-xl text-main "}>Форма выпуска:</h5>
              <p>-Раствор по 20 мл или 50 мл во флаконе</p>
            </div>
          </div>
          <div className={"w-full flex justify-around p-10"}>
            <div className={"flex flex-col items-center w-24"}>
              <img src="/images/eco-product.png" alt="" className={"w-24"} />
              <p
                className={
                  "mt-2 font-proxima-extra-bold uppercase text-xl text-center leading-tight tracking-wide text-gray-600"
                }
              >
                Натуральный продукт
              </p>
            </div>
            <div className={"flex flex-col items-center w-24"}>
              <img src="/images/eco-sources.png" alt="" className={"w-24"} />
              <p
                className={
                  "mt-2 font-proxima-extra-bold uppercase text-xl text-center leading-tight tracking-wide text-gray-600"
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
            className={"relative  flex flex-row items-center w-full h-slider"}
          >
            <div className={"absolute w-8"}>
              <a href="">
                <img src="/images/arrow.svg" alt="" />
              </a>
            </div>
            <div className={"absolute w-8 right-0 rotate-180"}>
              <a href="">
                <img src="/images/arrow.svg" alt="" />
              </a>
            </div>
            <div className={"w-full h-full bg-green-500"}>
              <a href=""></a>
            </div>
          </div>
        </section>
        {/* Grapefruit */}
        <section className={"mt-20"}>
          <div className={"flex w-2/3 m-auto"}>
            <div className={"flex flex-col w-1/2 font-proxima-regular"}>
              <h4 className={"text-main uppercase text-3xl leading-7"}>
                Цитролюкс создан на основе экстракта из семян грейпфрута и
                обогащен витамином с
              </h4>
              <p className={"mt-8 text-gray-600 pr-20 leading-6"}>
                Экстракт получают из семян, мякоти и белых мембран грейпфрута.
                Он содержит биофлаваноид - нарингин, обладающий уникальными
                свойствами &quot;природного антибиотика&quot; и антиоксиданта.
              </p>
              <p className={"mt-2 text-gray-600 pr-20 leading-6"}>
                Нарингин способствует укреплению иммунитета и помогает защитить
                организм от вирусов, бактерий, грибов, позволяя оставаться
                здоровым и бодрым во время работы и отдыха даже в сезон простуд!
              </p>
              <p className={"mt-2 text-gray-600 pr-20 leading-6"}>
                Витамин С усиливает способность нарингина повышать иммунитет.
              </p>
            </div>
            <div className={"w-1/2 flex flex-col items-center"}>
              <p
                className={
                  "text-center font-proxima-regular text-xl text-gray-500 leading-5 px-8 tracking-wide"
                }
              >
                Нарингин обладает свойствами природного антибиотика и
                антиоксиданта
              </p>
              <div className="w-grape h-grape bg-red-500 mt-8"></div>
            </div>
          </div>
        </section>
        {/* Immunity */}
        <section className={"mt-4 bg-green-300 py-6 border-b-2 border-white"}>
          <div className={"flex w-10/12 m-auto "}>
            <div className={"flex w-5/12 items-center"}>
              <div className="w-citro h-citro bg-yellow-300"></div>
            </div>
            <div className={"flex flex-col items-center w-full"}>
              <div className={"flex flex-row items-center justify-between"}>
                <div className={"pt-4"}>
                  <p
                    className={
                      "text-main font-proxima-regular text-3xl text-center"
                    }
                  >
                    Нарингин
                  </p>
                  <div className={"w-60 h-28 bg-gray-400"}></div>
                </div>
                <div className={"w-6 m-2 mt-12"}>
                  <img src="/images/plus_wide.svg" alt="" />
                </div>
                <div className={"pt-4"}>
                  <p
                    className={
                      "text-main font-proxima-regular text-3xl text-center"
                    }
                  >
                    Витамин С
                  </p>
                  <div className={"w-40 h-28 bg-gray-400"}></div>
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
                    "font-proxima-regular text-main text-4xl text-center my-2 tracking-wider"
                  }
                >
                  усиление иммунной защиты
                </h4>
              </div>
              <div className={"flex flex-row items-center mt-4"}>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-proxima-regular text-lg leading-5 mt-2"
                    }
                  >
                    Регуляция иммунологических реакций
                  </p>
                </div>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-proxima-regular text-lg leading-5 mt-2"
                    }
                  >
                    Улучшение фагоцитоза
                  </p>
                </div>
                <div className={"flex flex-col items-center mx-2"}>
                  <img src="/images/arrow_down.svg" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 h-40 text-center flex items-center p-2  rounded-full bg-white font-proxima-regular text-lg leading-5 mt-2"
                    }
                  >
                    Повышение сопротивляемости организма инфекциям
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={"bg-gradient-to-br from-footer-start to-footer-end"}>
        <div className={"flex justify-between items-center h-40 w-2/3 m-auto"}>
          <div className={"flex items-center"}>
            <div className={"w-24 mx-4"}>
              <img src="/images/pf-white.svg" alt="" />
            </div>
            <div className={"text-white font-proxima-regular leading-4"}>
              <p>© 2016 ООО «ПИК-ФАРМА»</p>
              <p>Адрес: Москва, Оружейный пер., д. 25, стр. 1.</p>
              <p>Тел.: (495) 925-57-00</p>
              <p>www.pikfarma.ru</p>
            </div>
          </div>
          <div className={"flex items-center"}>
            <img src="/images/fb.svg" alt="" className={"w-10 mx-1"} />
            <img src="/images/tw.svg" alt="" className={"w-10 mx-1"} />
            <img src="/images/yt.svg" alt="" className={"w-10 mx-1"} />
          </div>
        </div>
      </footer>
    </div>
  );
}
