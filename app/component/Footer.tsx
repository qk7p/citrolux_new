import Image from "next/image";
import { FC } from "react";
import { fetchFooterContent } from "../api/footerApi";
import apiConfig from "../api-config";

const Footer: FC = async () => {
  const content = await fetchFooterContent();

  return (
    <footer>
      <div
        className={
          "p-4 md:p-8 md:py-12 bg-gradient-to-b from-footer-start to-footer-end "
        }
      >
        <div className={"flex justify-between items-center 2xl:w-10/12 m-auto"}>
          <div className={"flex flex-col md:flex-row items-center"}>
            <div className={"w-24 mx-4 mb-6 md:mb-0"}>
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className={"w-full"}
                src={
                  apiConfig.base_url +
                  content.data.data.futer.data.attributes.company_logo.data
                    .attributes.url
                }
                alt={
                  content.data.data.futer.data.attributes.company_logo.data
                    .attributes.alternativeText
                }
              />
            </div>
            <div
              className={
                "ml-4 flex flex-col text-white font-open-sans-regular leading-5"
              }
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: content.data.data.futer.data.attributes.company_name,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    content.data.data.futer.data.attributes.company_adress,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    content.data.data.futer.data.attributes.company_number,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: content.data.data.futer.data.attributes.company_site,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <span
        dangerouslySetInnerHTML={{
          __html: content.data.data.futer.data.attributes.desclaimer,
        }}
      />
    </footer>
  );
};

export { Footer };
