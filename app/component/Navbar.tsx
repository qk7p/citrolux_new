"use client";

import clsx from "clsx";
import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { HeaderContentResponse, fetchHeaderContent } from "../api/headerApi";
import apiConfig from "../api-config";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setIsExpanded((prev) => !prev);
  };

  const [content, setContent] = useState<HeaderContentResponse>();
  useEffect(() => {
    fetchHeaderContent().then((res) => setContent(res));
  }, []);

  return (
    <nav
      className={clsx(
        className,
        isExpanded
          ? "grid-rows-expand-hack-opened"
          : "grid-rows-expand-hack-closed",
        "bg-main lg:bg-transparent lg:flex lg:justify-between items-center md:items-start md:py-2 lg:px-4 xl:px-8 2xl:px-16"
      )}
    >
      <div>
        <div className={"flex items-center justify-between pt-4 lg:pt-0"}>
          <a
            className={
              "h-16 p-2 px-4 lg:h-auto lg:w-60 xl:ml-20 2xl:ml-24 mt-1"
            }
            href={"#"}
          >
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              src={
                content
                  ? apiConfig.base_url +
                    content.data.data.heder.data.attributes.site_logo.data
                      .attributes.url
                  : ""
              }
              alt={
                content
                  ? content.data.data.heder.data.attributes.site_logo.data
                      .attributes.alternativeText ||
                    content.data.data.heder.data.attributes.site_logo.data
                      .attributes.url
                  : ""
              }
              className={
                "hidden lg:block lg:w-40 lg:m-auto xl:w-full xl:h-full"
              }
            />
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              src={
                content
                  ? apiConfig.base_url +
                    content.data.data.heder.data.attributes.site_logo_mobile
                      .data.attributes.url
                  : ""
              }
              alt={
                content
                  ? content.data.data.heder.data.attributes.site_logo_mobile
                      .data.attributes.alternativeText ||
                    content.data.data.heder.data.attributes.site_logo_mobile
                      .data.attributes.url
                  : ""
              }
              className={"lg:hidden h-full ml-4 md:ml-12 w-full"}
            />
          </a>
          <button
            className={"mr-8 md:mr-12 lg:hidden border rounded-md"}
            onClick={handleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "overflow-hidden lg:overflow-visible  grid ease-in duration-500 lg:flex",
          isExpanded ? "grid-rows-opened" : "grid-rows-0"
        )}
      >
        <ul
          className={clsx(
            "min-h-0 lg:min-h-full lg:w-full lg:bg-transparent flex flex-col lg:flex-row lg:justify-end lg:pt-6 uppercase font-open-sans-bold lg:text-xs xl:text-sm tracking-wide text-wide text-white mt-4 lg:mt-0 lg:text-main"
          )}
        >
          <li className={"ml-8 md:ml-16 lg:ml-0 overflow-visible"}>
            <a
              href="#about"
              className={"lg:nav_link__hover lg:nav_link__hover mt-4 lg:mt-0"}
            >
              {content
                ? content.data.data.heder.data.attributes.menu_item_1
                : ""}
            </a>
          </li>
          <li className={"ml-8 md:ml-16 lg:ml-6 mt-2 lg:mt-0"}>
            <a
              href="#how-it-works"
              className={"lg:nav_link__hover lg:nav_link__hover mt-4 lg:mt-0"}
            >
              {content
                ? content.data.data.heder.data.attributes.menu_item_2
                : ""}
            </a>
          </li>
          <li className={"ml-8 md:ml-16 lg:ml-6 mt-2 lg:mt-0"}>
            <a
              href="/files/citrolux.pdf"
              target={"_blank"}
              className={"lg:nav_link__hover lg:nav_link__hover mt-4 lg:mt-0"}
            >
              {content
                ? content.data.data.heder.data.attributes.menu_item_3
                : ""}
            </a>
          </li>
          <li className={"ml-8 md:ml-16 lg:ml-6 mt-2 mb-4 lg:mb-0 lg:mt-0"}>
            <a
              href="#where-to-buy"
              className={"lg:nav_link__hover lg:nav_link__hover mt-4 lg:mt-0"}
            >
              {content
                ? content.data.data.heder.data.attributes.menu_item_4
                : ""}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
