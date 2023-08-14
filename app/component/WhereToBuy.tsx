import { FC } from "react";
import Image from "next/image";
import {
  fetchWhereToBuyContent,
  parseWhereToBuyResponse,
} from "../api/whereToBuyApi";

const WhereToBuy: FC = async () => {
  type WhereToBuyItem = {
    imgURL: string;
    storeURL: string;
  };

  const content = await parseWhereToBuyResponse();

  return (
    <section id={"where-to-buy"} className={"px-8 mt-20"}>
      <h3
        className={
          "my-8 font-open-sans-regular text-main text-4xl md:text-5xl text-center uppercase"
        }
      >
        Где купить?
      </h3>
      <h4
        className={
          "mb-12 font-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Аптечные сети
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {content.pharmacy_list.map((element, index) => (
          <a
            href={element.site_url}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              alt={element.image_alt || element.image_url}
              src={element.image_url}
              className={"w-full"}
            />
          </a>
        ))}
      </div>
      <h4
        className={
          "mb-2 font-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Маркетплейсы
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {content.marketplace_list.map((element, index) => (
          <a
            href={element.site_url}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              alt={element.image_alt || element.image_url}
              src={element.image_url}
              className={"w-full"}
            />
          </a>
        ))}
      </div>
      <h4
        className={
          "mb-2 font-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Интернет-аптеки
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {content.ePharmacy_list.map((element, index) => (
          <a
            href={element.site_url}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              alt={element.image_alt || element.image_url}
              src={element.image_url}
              className={"w-full"}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export { WhereToBuy };
