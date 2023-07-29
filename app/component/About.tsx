import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <section
      className={
        "relative md:bg-about-background md:bg-contain md:bg-top md:bg-no-repeat"
      }
      id={"about"}
    >
      <div
        className={
          "hidden w-full md:flex flex-col items-center md:mb-80 lg:mb-56 2xl:mb-56"
        }
      >
        <Image
          src={"/images/purple-drop.webp"}
          alt={"drop_image"}
          className={"md:absolute w-44 md:top-4 lg:-top-20 z-10"}
          width={0}
          height={0}
          sizes={"100vw"}
        />
      </div>
      <div
        className={
          "grid grid-rows-about-rows grid-cols-about-cols w-11/12 lg:w-2/3 m-auto"
        }
      >
        <h4
          className={
            "row-start-2 col-span-3 md:col-auto md:row-auto mt-0 lg:mt-4 xl:mt-14 2xl:mt-40 lg:mb-10 font-open-sans-light uppercase text-3xl text-gray-600 leading-8"
          }
        >
          <span className={"text-main"}>Цитролюкс</span> &ndash; забота о себе и
          близких каждый день.
        </h4>
        <div
          className={
            "row-start-1 md:row-span-2 col-span-3 md:col-auto flex flex-col items-center justify-start w-2/3 md:w-full mt-8 md:mt-0 m-auto"
          }
        >
          <Image
            src={"/images/citrolux-flakon.webp"}
            alt={"citrolux_flakon"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-full"}
          />
        </div>
        <div
          className={
            "mt-0 lg:mt-4 xl:mt-14 2xl:mt-40 hidden md:flex justify-end"
          }
        >
          <a
            href="/files/citrolux.pdf"
            target={"_blank"}
            className={"flex flex-col items-center hover:opacity-70"}
          >
            <Image
              src="/images/pdf.webp"
              alt="pdf_logo"
              className={"w-16"}
              width={0}
              height={0}
              sizes={"100vw"}
            />
            <p
              className={
                "w-40 text-sm text-center underline text-main leading-tight tracking-tight"
              }
            >
              Скачать рекомендации по применению
            </p>
          </a>
        </div>
        <div className={"col-span-3 md:col-auto text-gray-600 flex flex-col"}>
          <h5 className={"font-open-sans-light text-main text-xl mt-8 md:mt-3"}>
            О продукте:
          </h5>
          <p
            className={
              "font-open-sans-regular text-md leading-normal text-black"
            }
          >
            Цитролюкс создан на основе экстракта из семян грейпфрута и обогащен
            витамином С.{" "}
          </p>
          <p
            className={
              "mt-2 font-open-sans-regular text-md leading-normal text-black"
            }
          >
            Экстракт из семня грейпфрута содержит биофлаваноид - нарингин,
            обладающий уникальными свойствами &quot;природного антибиотика&quot;
            и антиоксиданта.
          </p>
          <p
            className={
              "mt-2 font-open-sans-regular text-md leading-normal text-black"
            }
          >
            Цитролюкс - натуральный продукт немецкого качества для взрослых и
            детей старше 12 лет.
          </p>
        </div>
        <div
          className={
            "col-span-3 md:col-auto flex flex-col font-open-snans-regular text-black"
          }
        >
          <h5 className={"mt-3 text-xl text-main font-open-sans-light"}>
            Состав:
          </h5>
          <p>&ndash; Экстракт семян грейфрута</p>
          <p>&ndash; Аскорбиновая кислота</p>
          <h5
            className={
              "pr-12 text-xl text-main font-open-sans-light break-words mt-4 md:mt-0"
            }
          >
            Содержание активных компонентов в 1 мл раствора:
          </h5>
          <p>&ndash; Цитрусовые биофлаваноиды (нарингин) - не менее 8 мг/мл</p>
          <p>&ndash; Витамин С 30 мг/мл</p>
          <h5 className={"text-xl text-main font-open-sans-light mt-4 md:mt-0"}>
            Форма выпуска:
          </h5>
          <p>&ndash; Раствор по 50 мл во флаконе</p>
        </div>
        <div
          className={
            "mt-14 place-self-start justify-self-center md:justify-self-end flex flex-col items-center w-fit"
          }
        >
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src="/images/eco-product-v2.webp"
            alt="eco_product_logo"
            className={"w-12 md:w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-xs md:text-lg text-center leading-tight tracking-wide text-gray-600"
            }
          >
            Натуральный
            <br />
            продукт
          </p>
        </div>
        <div
          className={
            "mt-14 place-self-start justify-self-center  flex flex-col items-center w-fit"
          }
        >
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src="/images/high-naringin.webp"
            alt="eco_product_logo"
            className={"w-12 md:w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-xs md:text-lg text-center leading-tight tracking-wide text-gray-600"
            }
          >
            Высокая
            <br />
            Концентрация
            <br />
            Нарингина
          </p>
        </div>
        <div
          className={
            "mt-14 place-self-start justify-self-center md:justify-self-start flex flex-col items-center w-fit"
          }
        >
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src="/images/eco-sources-v2.webp"
            alt="eco_sources_logo"
            className={"w-12 md:w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-xs md:text-lg text-center leading-tight tracking-wide text-gray-600"
            }
          >
            Экологически <br /> чистое сырье
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };
