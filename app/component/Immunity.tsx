import { FC } from "react";
import Image from "next/image";
import { fetchImmunityContent } from "../api/immunityApi";
import apiConfig from "../api-config";

const Immunity: FC = async () => {
  const content = await fetchImmunityContent();

  return (
    <section
      className={
        "mt-12 md:mt-20 border-b-4 border-white bg-immunity-background bg-cover bg-no-repeat"
      }
    >
      <div
        className={
          "flex flex-col lg:flex-row items-center lg:items-start w-11/12 m-auto"
        }
      >
        <div
          className={
            "hidden md:flex w-8/12 lg:w-7/12 items-center mt-10 lg:mt-0"
          }
        >
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            src={
              apiConfig.base_url +
              content.data.data.blokUsilenieImuunnojZashhity.data.attributes
                .image.data.attributes.url
            }
            alt={
              content.data.data.blokUsilenieImuunnojZashhity.data.attributes
                .image.data.attributes.alternativeText ||
              content.data.data.blokUsilenieImuunnojZashhity.data.attributes
                .image.data.attributes.url
            }
            className={"w-full"}
          />
        </div>
        <div className={"w-11/12 lg:w-9/12 flex lg:pb-6 xl:py-8"}>
          <div className={"flex flex-col items-center justify-center w-full"}>
            <div
              className={
                "flex flex-row md:flex-row items-center justify-between mt-4 md:mt-0"
              }
            >
              <div className={"pt-4"}>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_1,
                  }}
                />
                <div className={"flex items-center m-4"}>
                  <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src={
                      apiConfig.base_url +
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_1_image.data.attributes.url
                    }
                    alt={
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_1_image.data.attributes
                        .alternativeText ||
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_1_image.data.attributes.url
                    }
                    className={"h-32 md:h-40 lg:h-32 xl:h-40 w-full"}
                  />
                </div>
              </div>
              <div className={"w-6 m-2 mt-12 aspect-square"}>
                <Image
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  src="/images/plus_wide.svg"
                  alt="plus_icon"
                />
              </div>
              <div className={"pt-4"}>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_2,
                  }}
                />
                <div className={"flex items-center m-4"}>
                  <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src={
                      apiConfig.base_url +
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_2_image.data.attributes.url
                    }
                    alt={
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_2_image.data.attributes
                        .alternativeText ||
                      content.data.data.blokUsilenieImuunnojZashhity.data
                        .attributes.molecule_2_image.data.attributes.url
                    }
                    className={"h-32 md:h-40 lg:h-32 xl:h-40 w-full"}
                  />
                </div>
              </div>
            </div>
            <div className={"flex flex-col item-center"}>
              <div className={"w-full h-5 mt-4"}>
                <Image
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  src="/images/arrow-loose.svg"
                  alt="arrow_loose_icon"
                  className={"w-full h-full"}
                />
              </div>
              <div className="h-2 mt-2 bg-wave-bold bg-repeat-x" />
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    content.data.data.blokUsilenieImuunnojZashhity.data
                      .attributes.title,
                }}
              />
              <div className="h-2 bg-wave-bold bg-repeat-x" />
              <div
                className={
                  "mt-4 md:mb-10 lg:mb-0 flex flex-col md:flex-row items-center justify-around"
                }
              >
                <div className={"mx-2 flex flex-col items-center "}>
                  <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"hidden md:block w-16"}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        content.data.data.blokUsilenieImuunnojZashhity.data
                          .attributes.description_item_1,
                    }}
                  />
                </div>
                <div className={"lg:mx-4 xl:mx-8 flex flex-col items-center "}>
                  <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src="/images/arrow_down.svg"
                    alt=""
                    className={"hidden md:block w-16"}
                  />

                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        content.data.data.blokUsilenieImuunnojZashhity.data
                          .attributes.description_item_2,
                    }}
                  />
                </div>
                <div className={"mx-2 flex flex-col items-center"}>
                  <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src="/images/arrow_down.svg"
                    alt="arrow_icon"
                    className={"hidden md:block w-16"}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        content.data.data.blokUsilenieImuunnojZashhity.data
                          .attributes.description_item_3,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Immunity };
