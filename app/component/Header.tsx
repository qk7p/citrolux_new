import { FC } from "react";
import { NavMenu } from "./NavMenu";
import { Navbar } from "./Navbar";

const Header: FC = () => {
  return (
    <header className={"lg:relative"}>
      <Navbar className={"sm:static lg:absolute lg:z-10 lg:w-full"} />
      <div
        className={
          "bg-main md:h-banner md:bg-banner-background bg-cover bg-no-repeat bg-top md:relative"
        }
      >
        <div
          className={
            "hidden md:block md:absolute md:w-60 md:-right-4 lg:right-20 xl:right-56 bottom-3 "
          }
        >
          <img
            src="/images/citrolux-pack.png"
            alt="citrolux_pack"
            className={"w-40 m-auto"}
          />
        </div>
      </div>
    </header>
  );
};

export { Header };
