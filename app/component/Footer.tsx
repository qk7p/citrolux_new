import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className={"bg-gradient-to-b from-footer-start to-footer-end p-8 py-12"}>
        <div
          className={"flex justify-between items-center  w-10/12 m-auto"}
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
              <img src="/images/old_fb.png" alt="" className={"w-10 mx-1"} />
            </a>
            <a
              href="http://citrolux.ru/#"
              target={"_blank"}
              className={"hover:opacity-70"}
            >
              <img src="/images/old_tw.png" alt="" className={"w-10 mx-1"} />
            </a>
            <a
              href="http://youtube.com/pikfarma"
              target={"_blank"}
              className={"hover:opacity-70"}
            >
              {" "}
              <img src="/images/old_yt.png" alt="" className={"w-10 mx-1"} />
            </a>
          </div>
        </div>
      </div>
      <h2
        className={
          "text-5xl md:text-6xl 2xl:text-7xl text-center font-open-sans-light text-alert"
        }
      >
        БАД. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ
      </h2>
    </footer>
  );
};

export { Footer };
