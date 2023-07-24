import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div
        className={
          "p-8 py-12 bg-gradient-to-b from-footer-start to-footer-end "
        }
      >
        <div className={"flex justify-between items-center w-10/12 m-auto"}>
          <div className={"flex items-center"}>
            <div className={"w-24 mx-4"}>
              <img src="/images/pf-white.svg" alt="pik_farma_white_logo" />
            </div>
            <div
              className={
                "ml-4 flex flex-col text-white font-proxima-regular leading-5"
              }
            >
              <p>© 2016 ООО «ПИК-ФАРМА»</p>
              <p>
                Адрес: Россия, 125047, г. Москва, пер. Оружейный, д. 25, стр. 1,
                помещение I, этаж 1.
              </p>
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
        </div>
      </div>
      <h2
        className={
          "text-5xl md:text-6xl 2xl:text-7xl text-center font-open-sans-light text-alert"
        }
      >
        БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРТСВЕННЫМ СРЕДСТВОМ
      </h2>
    </footer>
  );
};

export { Footer };
