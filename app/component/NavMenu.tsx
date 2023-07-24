"use client";

import { FC, useState, MouseEvent } from "react";
import { clsx } from "clsx";

const NavMenu: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={"relative px-4"}>
      <button onClick={handleMenu} className={"flex md:hidden"}>
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

      <ul
        className={clsx(
          " md:w-full md:bg-transparent flex flex-col md:flex-row md:justify-end md:pt-6 uppercase font-open-sans-bold text-sm tracking-wide text-wide md:text-main"
        )}
      >
        <li>
          <a href="#about" className={"md:nav_link__hover lg:nav_link__hover"}>
            О продукте
          </a>
        </li>
        <li className={"md:ml-6"}>
          <a
            href="#how-it-works"
            className={"md:nav_link__hover lg:nav_link__hover"}
          >
            Как работает Цитролюкс?
          </a>
        </li>
        <li className={"md:ml-6"}>
          <a
            href="/files/citrolux.pdf"
            target={"_blank"}
            className={"md:nav_link__hover lg:nav_link__hover"}
          >
            Рекомендации по применению
          </a>
        </li>
        <li className={"md:ml-6"}>
          <a
            href="#where-to-buy"
            className={"md:nav_link__hover lg:nav_link__hover"}
          >
            Где купить?
          </a>
        </li>
      </ul>
    </div>
  );
};

export { NavMenu };
