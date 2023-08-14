import apiConfig from "../api-config";
import graphqlApi from "./grapqlInstance";

type WhereToBuyContent = {
  data: {
    data: {
      blokGdeKupit: {
        data: {
          attributes: {
            pharmacy_list: [
              {
                logo: {
                  data: {
                    attributes: {
                      url: string;
                      alternativeText: string;
                    };
                  };
                };
                url: string;
              }
            ];
            epharmacy_list: [
              {
                logo: {
                  data: {
                    attributes: {
                      url: string;
                      alternativeText: string;
                    };
                  };
                };
                url: string;
              }
            ];
            marketplace_list: [
              {
                logo: {
                  data: {
                    attributes: {
                      url: string;
                      alternativeText: string;
                    };
                  };
                };
                url: string;
              }
            ];
          };
        };
      };
    };
  };
};

const query = `
query WhereToBuy {
    blokGdeKupit {
      data {
        attributes {
          pharmacy_list(pagination: { start: 0, limit: -1 }) {
            logo {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            url
          }
          epharmacy_list {
            logo {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            url
          }
          marketplace_list {
            logo {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            url
          }
        }
      }
    }
  }
  
`;

type WhereToBuyItem = {
  image_url: string;
  image_alt: string;
  site_url: string;
};

export async function parseWhereToBuyResponse() {
  const data = await fetchWhereToBuyContent();

  const pharmacy_list: WhereToBuyItem[] = [];
  const ePharmacy_list: WhereToBuyItem[] = [];
  const marketplace_list: WhereToBuyItem[] = [];

  data.data.data.blokGdeKupit.data.attributes.pharmacy_list.map((element) =>
    pharmacy_list.push({
      image_url: apiConfig.base_url + element.logo.data.attributes.url,
      image_alt: element.logo.data.attributes.alternativeText || element.logo.data.attributes.url,
      site_url: element.url,
    })
  );

  data.data.data.blokGdeKupit.data.attributes.epharmacy_list.map((element) =>
    ePharmacy_list.push({
      image_url: apiConfig.base_url + element.logo.data.attributes.url,
      image_alt: element.logo.data.attributes.alternativeText || element.logo.data.attributes.url,
      site_url: element.url,
    })
  );

  data.data.data.blokGdeKupit.data.attributes.marketplace_list.map((element) =>
    marketplace_list.push({
      image_url: apiConfig.base_url + element.logo.data.attributes.url,
      image_alt: element.logo.data.attributes.alternativeText || element.logo.data.attributes.url,
      site_url: element.url,
    })
  );

  return { pharmacy_list, ePharmacy_list, marketplace_list };
}

export function fetchWhereToBuyContent() {
  return graphqlApi.post<any, WhereToBuyContent>("", {
    query: query,
  });
}
