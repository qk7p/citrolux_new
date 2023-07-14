import { FC } from "react";

const WhereToBuy: FC = () => {
  type WhereToBuyItem = {
    imgURL: string;
    storeURL: string;
  };

  const pharmacyList: WhereToBuyItem[] = [
    {
      imgURL: "/images/logo/apteka_dlya_bereglivih.png",
      storeURL:
        "https://aptekaeconom.com/catalog/lekarstva-i-bady/obshcheukreplyayushchie-i-toniziruyushchie-preparaty/114995/",
    },
    {
      imgURL: "/images/logo/stolichki.png",
      storeURL: "https://stolichki.ru/drugs/citrolyuks-r-r-vnutr-50ml",
    },
    {
      imgURL: "/images/logo/zdorov.ru.png",
      storeURL: "https://zdorov.ru/catalog/344/852/853/citrolyuks-107263",
    },
    {
      imgURL: "/images/logo/lekopttorg.png",
      storeURL:
        "https://lekopttorg.ru/catalog/lekarstva_i_bady/obshheukreplajushhije_i_tonizirujushhije_preparaty9/citroluks_fl-kap_50ml.html",
    },
    {
      imgURL: "/images/logo/maksavit.png",
      storeURL: "https://maksavit.ru/catalog/98479/",
    },
    {
      imgURL: "/images/logo/nevis.svg",
      storeURL:
        "https://aptekanevis.ru/catalog/product/tsitrolyuks_r_r_50ml_obshcheukreplyayushchee_bad_/#ostatki",
    },
    {
      imgURL: "/images/logo/neopharm.svg",
      storeURL: "https://neopharm.ru/drugs/14672",
    },
    {
      imgURL: "/images/logo/platena-zdorovya.svg",
      storeURL:
        "https://planetazdorovo.ru/catalog/lekarstva-i-bad/prostuda-i-gripp/protivovirusnye-immunokorrektory/citrolyuks-rastvor-dlya-priema-v-2927311/",
    },
    {
      imgURL: "/images/logo/ico-rigla_1.png",
      storeURL: "https://www.rigla.ru/product/100686",
    },
    {
      imgURL: "/images/logo/ico-sber-eapteka.png",
      storeURL: "https://www.eapteka.ru/goods/id224158/",
    },
    {
      imgURL: "/images/logo/ico-social-apteka.png",
      storeURL:
        "https://social-apteka.ru/catalog/bad-vitaminno-mineralnye-kompleksy/citrolyuks-r-r-50ml-bad-48_19908/",
    },
    {
      imgURL: "/images/logo/farmakopeika.svg",
      storeURL: "https://farmakopeika.ru/katalog/2458/1280370/",
    },
    {
      imgURL: "/images/logo/farmlend.png",
      storeURL: "https://farmlend.ru/product/218133",
    },
  ];

  const marketplaceList: WhereToBuyItem[] = [
    {
      imgURL: "/images/logo/yandex.market.png",
      storeURL:
        "https://pokupki.market.yandex.ru/search?cvredirect=2&text=%D1%86%D0%B8%D1%82%D1%80%D0%BE%D0%BB%D1%8E%D0%BA%D1%81",
    },
  ];

  const ePharmacyList: WhereToBuyItem[] = [
    {
      imgURL: "/images/logo/apteka.ru.png",
      storeURL:
        "https://apteka.ru/product/5e3274ed6df8020001929cbb/?q=%D1%86%D0%B8%D1%82%D1%80%D0%BE%D0%BB%D1%8E%D0%BA%D1%81",
    },
    {
      imgURL: "/images/logo/zdravcity.png",
      storeURL: "https://zdravcity.ru/p_citroljuks-r-r-vnutr-50ml-0001477.html",
    },
  ];

  return (
    <section id={"where-to-buy"} className={"px-8 mt-20"}>
      <h3
        className={
          "my-8 font-open-sans-regular text-main text-4xl md:text-5xl text-center text-textGray uppercase"
        }
      >
        Где купить?
      </h3>
      <h4
        className={
          "mb-12 font-proxima-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Аптечные сети
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {pharmacyList.map((element, index) => (
          <a
            href={element.storeURL}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <img src={element.imgURL} className={"w-full"} />
          </a>
        ))}
      </div>
      <h4
        className={
          "mb-2 font-proxima-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Маркетплейсы
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {marketplaceList.map((element, index) => (
          <a
            href={element.storeURL}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <img src={element.imgURL} className={"w-full"} />
          </a>
        ))}
      </div>
      <h4
        className={
          "mb-2 font-proxima-open-sans-regular text-gray-600 text-3xl text-center"
        }
      >
        Интернет-аптеки
      </h4>
      <div className={"px-4 grid grid-cols-2 md:grid-cols-5 gap-12"}>
        {ePharmacyList.map((element, index) => (
          <a
            href={element.storeURL}
            className={
              "aspect-square flex items-center hover:scale-110 ease-in duration-200"
            }
            key={index}
            target={"_blank"}
          >
            <img src={element.imgURL} className={"w-full"} />
          </a>
        ))}
      </div>
    </section>
  );
};

export { WhereToBuy };
