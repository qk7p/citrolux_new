import { FC } from "react";

const About: FC = () => {
  return (
    <section
      className={"relative bg-about-background bg-contain bg-top bg-no-repeat"}
      id={"about"}
    >
      <div
        className={
          "hidden w-full md:flex flex-col items-center md:mb-56 2xl:mb-56"
        }
      >
        <img
          src={"/images/purple-drop.png"}
          alt={"drop_image"}
          className={"md:absolute w-44 -top-20 z-10"}
        />
      </div>
      <div
        className={
          "flex flex-col md:grid grid-rows-about-rows grid-cols-about-cols w-2/3 m-auto"
        }
      >
        <h4
          className={
            "mt-0 lg:mt-4 xl:mt-14 2xl:mt-40 italic font-open-sans-light-italic text-3xl text-gray-600 leading-8"
          }
        >
          <span className={"text-main"}>Цитролюкс</span> &ndash; забота о себе и
          близких каждый день.
        </h4>
        <div className={"row-span-2 flex flex-col items-center justify-start"}>
          <img src={"/images/citrolux-flakon.png"} alt={"citrolux_flakon"} />
        </div>
        <div className={"mt-0 lg:mt-4 xl:mt-14 2xl:mt-40 flex justify-end"}>
          <a
            href="/files/citrolux.pdf"
            target={"_blank"}
            className={"flex flex-col items-center hover:opacity-70"}
          >
            <img src="/images/pdf.png" alt="pdf_logo" className={"w-16"} />
            <p
              className={
                "w-40 text-sm text-center underline text-main leading-tight tracking-tight"
              }
            >
              Скачать рекомендации по применению
            </p>
          </a>
        </div>
        <div className={" text-gray-600 flex flex-col"}>
          <h5 className={"font-open-sans-light text-main text-xl mt-3"}>
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
        <div className={"flex flex-col font-open-snans-regular text-black"}>
          <h5 className={"mt-3 text-xl text-main font-open-sans-light"}>
            Состав:
          </h5>
          <p>&ndash; Экстракт семян грейфрута</p>
          <p>&ndash; Аскорбиновая кислота</p>
          <h5 className={"pr-12 text-xl text-main font-open-sans-light"}>
            Содержание активных компонентов в 1 мл раствора:
          </h5>
          <p>&ndash; Цитрусовые биофлаваноиды (нарингин) - не менее 8мг/мл</p>
          <p>&ndash; Витамин С 30 мг/мл</p>
          <h5 className={"text-xl text-main font-open-sans-light"}>
            Форма выпуска:
          </h5>
          <p>&ndash; Раствор по 50 мл во флаконе</p>
        </div>
        <div
          className={"mt-14 place-self-start justify-self-end flex flex-col items-center w-fit"}
        >
          <img
            src="/images/eco-product-v2.png"
            alt="eco_product_logo"
            className={"w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-lg text-center leading-tight tracking-wide text-gray-600"
            }
          >
            Натуральный
            <br />
            продукт
          </p>
        </div>
        <div
          className={"mt-14 place-self-start justify-self-center  flex flex-col items-center w-fit"}
        >
          <img
            src="/images/high-naringin.png"
            alt="eco_product_logo"
            className={"w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-lg text-center leading-tight tracking-wide text-gray-600"
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
          className={"mt-14 place-self-start justify-self-start flex flex-col items-center w-fit"}
        >
          <img
            src="/images/eco-sources-v2.png"
            alt="eco_sources_logo"
            className={"w-24"}
          />
          <p
            className={
              "mt-2 font-open-sans-semibold uppercase text-lg text-center leading-tight tracking-wide text-gray-600"
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
