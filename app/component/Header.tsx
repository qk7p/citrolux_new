import { FC } from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";
import { fetchHeaderContent } from "../api/headerApi";
import apiConfig from "../api-config";

const Header: FC = async () => {
  const content = await fetchHeaderContent();

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
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src={
              apiConfig.base_url +
              content.data.data.heder.data.attributes.product_image.data
                .attributes.url
            }
            alt={
              content.data.data.heder.data.attributes.product_image.data
                .attributes.alternativeText ||
              content.data.data.heder.data.attributes.product_image.data
                .attributes.url
            }
            className={"w-40 m-auto"}
          />
        </div>
      </div>
    </header>
  );
};

export { Header };
