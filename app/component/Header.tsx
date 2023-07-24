import { FC } from "react";
import { NavMenu } from "./NavMenu";

const Header: FC = () => {
  return (
    <header
      className={
        "bg-main md:h-banner md:bg-banner-background bg-cover bg-no-repeat bg-top md:relative"
      }
    >
      <nav
        className={
          "flex flex-row justify-between items-center md:items-start md:py-5 md:px-16"
        }
      >
        <div className={"h-16 p-2 px-4 md:h-auto md:w-60 md:ml-24 mt-1"}>
          <a href="#">
            <img
              src={"/images/logo-glow.png"}
              className={"hidden md:block w-full h-full"}
              alt={"citrolux_logo"}
            />
            <img
              src={"/images/citrolux-logo-white.png"}
              className={"md:hidden w-full h-full"}
              alt={"citrolux_logo_white"}
            />
          </a>
        </div>
        <NavMenu />
      </nav>
      <div className={"hidden md:block md:absolute md:w-60 right-56 bottom-3 "}>
        <img src="/images/citrolux-pack.png" alt="citrolux_pack" className={"w-40 m-auto"} />
      </div>
    </header>
  );
};

export { Header };
