import Image from "next/image";
import { FC } from "react";
import { fetchAboutContent } from "../api/aboutApi";
import apiConfig from "../api-config";
import { data } from "autoprefixer";

const About: FC = async () => {
  const content = await fetchAboutContent();

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
          src={
            apiConfig.base_url +
            content.data.data.blokOProdukte.data.attributes.drop_image.data
              .attributes.url
          }
          alt={
            content.data.data.blokOProdukte.data.attributes.drop_image.data
              .attributes.alternativeText
          }
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
        <span
          className={
            "row-start-2 col-span-3 md:col-auto md:row-auto mt-0 lg:mt-4 xl:mt-14 2xl:mt-40 lg:mb-10"
          }
          dangerouslySetInnerHTML={{
            __html:
              content.data.data.blokOProdukte.data.attributes.product_title,
          }}
        ></span>
        <div
          className={
            "row-start-1 md:row-span-2 col-span-3 md:col-auto flex flex-col items-center justify-start w-2/3 md:w-full mt-8 md:mt-0 m-auto"
          }
        >
          <Image
            src={
              apiConfig.base_url +
              content.data.data.blokOProdukte.data.attributes.product_image.data
                .attributes.url
            }
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
              src={
                apiConfig.base_url +
                content.data.data.blokOProdukte.data.attributes.icon.data
                  .attributes.url
              }
              alt={
                content.data.data.blokOProdukte.data.attributes.icon.data
                  .attributes.alternativeText
              }
              className={"w-16"}
              width={0}
              height={0}
              sizes={"100vw"}
            />
            <span dangerouslySetInnerHTML={{__html:content.data.data.blokOProdukte.data.attributes.icon_description}} />
          </a>
        </div>
        <div className={"col-span-3 md:col-auto text-gray-600 flex flex-col"}>
          <span
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokOProdukte.data.attributes.about_product,
            }}
          ></span>
        </div>
        <div
          className={
            "col-span-3 md:col-auto flex flex-col font-open-snans-regular text-black"
          }
        >
          {
            <span
              dangerouslySetInnerHTML={{
                __html:
                  content.data.data.blokOProdukte.data.attributes
                    .product_description,
              }}
            ></span>
          }
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
            src={
              apiConfig.base_url +
              content.data.data.blokOProdukte.data.attributes.left_icon.icon
                .data.attributes.url
            }
            alt={
              content.data.data.blokOProdukte.data.attributes.left_icon.icon
                .data.attributes.alternativeText
            }
            className={"w-12 md:w-24"}
          />

          <span
            className={"mt-2 "}
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokOProdukte.data.attributes.left_icon
                  .description,
            }}
          />
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
            src={
              apiConfig.base_url +
              content.data.data.blokOProdukte.data.attributes.center_icon.icon
                .data.attributes.url
            }
            alt={
              content.data.data.blokOProdukte.data.attributes.center_icon.icon
                .data.attributes.alternativeText
            }
            className={"w-12 md:w-24"}
          />
          <span
            className={"mt-2 "}
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokOProdukte.data.attributes.center_icon
                  .description,
            }}
          />
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
            src={
              apiConfig.base_url +
              content.data.data.blokOProdukte.data.attributes.right_icon.icon
                .data.attributes.url
            }
            alt={
              content.data.data.blokOProdukte.data.attributes.right_icon.icon
                .data.attributes.alternativeText
            }
            className={"w-12 md:w-24"}
          />
          <span
            className={"mt-2 "}
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokOProdukte.data.attributes.right_icon
                  .description,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export { About };
