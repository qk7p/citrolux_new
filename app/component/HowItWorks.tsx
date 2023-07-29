import { FC } from "react";
import Image from "next/image";

const HowItWorks: FC = () => {
  return (
    <section className={"mt-10 lg:mt-20"} id={"how-it-works"}>
      <div className={"flex flex-col-reverse md:flex-col lg:flex-row md:items-center lg:items-start w-10/12 m-auto"}>
        <div className={"flex flex-col md:w-11/12 lg:w-1/2 font-open-sans-regular"}>
          <h4
            className={
              "text-main font-open-sans-light uppercase text-xl md:text-3xl md:leading-8"
            }
          >
            Цитролюкс создан на основе экстракта из семян грейпфрута и обогащен
            витамином с
          </h4>
          <p className={"mt-8 lg:mt-20 text-gray-600 md:pr-20 leading-6"}>
            Экстракт получают из семян, мякоти и белых мембран грейпфрута. Он
            содержит биофлаваноид - нарингин, обладающий уникальными свойствами
            &quot;природного антибиотика&quot; и антиоксиданта.
          </p>
          <p className={"mt-4 text-gray-600 md:pr-20 leading-6"}>
            Нарингин способствует укреплению иммунитета и помогает защитить
            организм от вирусов, бактерий, грибов, позволяя оставаться здоровым
            и бодрым во время работы и отдыха даже в сезон простуд!
          </p>
          <p className={"mt-4 text-gray-600 md:pr-20 leading-6"}>
            Витамин С усиливает способность нарингина повышать иммунитет.
          </p>
        </div>
        <div className={"flex flex-col items-center md:w-11/12 lg:w-1/2 md:mt-10 lg:mt-0"}>
          <p
            className={
              "mb-4 md:px-8 text-center font-open-sans-regular text-lg text-gray-500 leading-5 tracking-wide"
            }
          >
            Нарингин обладает свойствами &quot;природного антибиотика&quot; и антиоксиданта
          </p>
          <div className="">
            <Image width={0} height={0} sizes={"100vw"} className={"w-full"} src="/images/grapefruit.webp" alt="grapefruit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
