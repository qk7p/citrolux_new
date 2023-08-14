import graphqlApi from "./grapqlInstance";

export type HeaderContentResponse = {
  data: {
    data: {
      heder: {
        data: {
          attributes: {
            site_logo: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            site_logo_mobile: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            product_image: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            menu_item_1: string;
            menu_item_2: string;
            menu_item_3: string;
            menu_item_4: string;
          };
        };
      };
    };
  };
};

const query = `
query Header {
    heder {
      data {
        attributes {
          site_logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          site_logo_mobile {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          product_image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          menu_item_1
          menu_item_2
          menu_item_3
          menu_item_4
        }
      }
    }
  }
`;

export function fetchHeaderContent() {
  return graphqlApi.post<any, HeaderContentResponse>("", {
    query: query,
  });
}
