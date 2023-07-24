import { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <section className={"mt-20"} id={"how-it-works"}>
      <div className={"flex w-10/12 m-auto"}>
        <div className={"flex flex-col w-1/2 font-open-sans-regular"}>
          <h4
            className={
              "text-main font-open-sans-light uppercase text-3xl leading-8"
            }
          >
            Цитролюкс создан на основе экстракта из семян грейпфрута и обогащен
            витамином с
          </h4>
          <p className={"mt-20 text-gray-600 pr-20 leading-6"}>
            Экстракт получают из семян, мякоти и белых мембран грейпфрута. Он
            содержит биофлаваноид - нарингин, обладающий уникальными свойствами
            &quot;природного антибиотика&quot; и антиоксиданта.
          </p>
          <p className={"mt-4 text-gray-600 pr-20 leading-6"}>
            Нарингин способствует укреплению иммунитета и помогает защитить
            организм от вирусов, бактерий, грибов, позволяя оставаться здоровым
            и бодрым во время работы и отдыха даже в сезон простуд!
          </p>
          <p className={"mt-4 text-gray-600 pr-20 leading-6"}>
            Витамин С усиливает способность нарингина повышать иммунитет.
          </p>
        </div>
        <div className={"flex flex-col items-center w-1/2"}>
          <p
            className={
              "mb-4 px-8 text-center font-open-sans-regular text-lg text-gray-500 leading-5 tracking-wide"
            }
          >
            Нарингин обладает свойствами "природного антибиотика" и антиоксиданта
          </p>
          <div className="">
            <img src="/images/grapefruit.png" alt="grapefruit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
