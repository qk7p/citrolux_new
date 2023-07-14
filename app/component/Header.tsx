import { FC } from "react";

const Header: FC = () => {
  return (
    <header
      className={
        "h-banner bg-banner-background bg-cover bg-no-repeat bg-top relative"
      }
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
            <a href="#where-to-buy" className={"nav_link__hover"}>
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
      <div className={"absolute right-56 bottom-3 w-60"}>
        <img src="/images/citrolux-vs-pack.png" alt="" />
      </div>
    </header>
  );
};

export { Header };
