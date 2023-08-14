import { FC } from "react";
import Image from "next/image";
import { fetchHowItWorksContent } from "../api/howItWorksApi";
import apiConfig from "../api-config";

const HowItWorks: FC = async () => {
  const content = await fetchHowItWorksContent();

  return (
    <section className={"mt-10 lg:mt-20"} id={"how-it-works"}>
      <div
        className={
          "flex flex-col-reverse md:flex-col lg:flex-row items-center lg:items-start w-full lg:w-10/12 m-auto"
        }
      >
        <div
          className={"flex flex-col w-11/12 lg:w-1/2 font-open-sans-regular"}
        >
          <span
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokKakEtoRabotaet.data.attributes.title,
            }}
          />
          <span
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokKakEtoRabotaet.data.attributes
                  .description,
            }}
          />
        </div>
        <div
          className={
            "flex flex-col items-center w-11/12 lg:w-1/2 md:mt-10 lg:mt-0"
          }
        >
          <span
            dangerouslySetInnerHTML={{
              __html:
                content.data.data.blokKakEtoRabotaet.data.attributes
                  .image_description,
            }}
          />
          <div className="w-2/3">
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={"w-full"}
              src={
                apiConfig.base_url +
                content.data.data.blokKakEtoRabotaet.data.attributes.image.data
                  .attributes.url
              }
              alt={
                content.data.data.blokKakEtoRabotaet.data.attributes.image.data
                  .attributes.alternativeText ||
                content.data.data.blokKakEtoRabotaet.data.attributes.image.data
                  .attributes.url
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
