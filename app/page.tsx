import Image from "next/image";

export default function Home() {
  return (
    <div className={"relative"}>
      <img
        src={"/images/site_long_final_new_2_1280.jpg"}
        className={"absolute left-0 top-0 -z-10 opacity-30"}
      />
      <header className={"h-banner bg-green-50"}>
        <nav className={"flex justify-between py-5 px-16"}>
          <div className={"w-60 ml-24 mt-1"}>
            <img src={"/images/logo-2.png"} className={"w-full h-full"} />
          </div>
          <ul
            className={
              "w-full flex flex-row justify-end pt-6 uppercase font-proxima-extra-bold text-sm tracking-widest text-main"
            }
          >
            <li className={""}>
              <a href="#">где приобрести</a>
            </li>
            <li className={"ml-6"}>
              <a href="#">рекомендации по применению</a>
            </li>
            <li className={"ml-6"}>
              <a href="#">производитель</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        {/* About */}
        <section className={"relative bg-top bg-no-repeat"}>
          <div className={"w-full flex justify-around mb-56"}>
            <img
              src={"/images/drop.png"}
              className={"absolute -top-20 z-10 w-44"}
            />
          </div>
          <div className={"flex flex-row w-2/3 m-auto"}>
            <div className={"w-5/12 text-gray-600"}>
              <h4 className={"italic font-proxima-regular text-3xl "}>
                <span className={"text-main"}>Цитролюкс</span> - забота о себе и
                близких каждый день.
              </h4>
              <h5 className={"font-proxima-regular text-main text-xl mt-4"}>
                О продукте:
              </h5>
              <p className={"mt-2 font-proxima-regular text-md leading-tight"}>
                Цитролюкс создан на основе экстракта из семян грейпфрута и
                обогащен витамином С.{" "}
              </p>
              <p className={"mt-2 font-proxima-regular text-md leading-tight"}>
                Экстракт из семня грейпфрута содержит биофлаваноид - нарингин,
                обладающий уникальными свойствами "природного антибиотика" и
                антиоксиданта.
              </p>
              <p className={"mt-2 font-proxima-regular text-md leading-tight"}>
                Цитролюкс - натуральный продукт немецкого качества для взрослых
                и детей старше 12 лет.
              </p>
            </div>
            <div className={"w-3/12 flex items-center"}>
              <img src={"/images/citrolux.png"} className={""} />
            </div>
            <div className={"w-5/12 flex flex-col font-proxima-regular text-gray-600"}>
              <div className={"self-end"}>
                <a href="" className={"flex flex-col items-center self-end "}>
                  <img src="/images/pdf.png" alt="" className={"w-16"} />
                  <p
                    className={
                      "w-40 text-md text-center underline text-main leading-tight"
                    }
                  >
                    Скачать рекомендации по применению
                  </p>
                </a>
              </div>
              <h5 className={"text-xl text-main"}>Состав:</h5>
              <p>-Экстракт семян грейфрута</p>
              <p>-Аскорбиновая кислота</p>
              <h5 className={"text-xl text-main mt-2"}>
                Содержание активных компонентов в 1 мл раствора:
              </h5>
              <p>-Цитрусовые биофлаваноиды (нарингин) - не менее 8мг/мл</p>
              <p>-Витамин С 30 мг/мл</p>
              <h5 className={"text-xl text-main mt-2"}>Форма выпуска:</h5>
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
      </main>
      <footer></footer>
    </div>
  );
}
