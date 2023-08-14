import graphqlApi from "./grapqlInstance";

type ImmunityResponse = {
  data: {
    data: {
      blokUsilenieImuunnojZashhity: {
        data: {
          attributes: {
            title: string;
            image: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            molecule_1: string;
            molecule_2: string;
            molecule_1_image: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            molecule_2_image: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            description_item_1: string;
            description_item_2: string;
            description_item_3: string;
          };
        };
      };
    };
  };
};

const query = `
query Immunity {
    blokUsilenieImuunnojZashhity {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          molecule_1
          molecule_2
          molecule_1_image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          molecule_2_image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          description_item_1
          description_item_2
          description_item_3
        }
      }
    }
  }
  `;

export function fetchImmunityContent() {
  return graphqlApi.post<any, ImmunityResponse>("", {
    query: query,
  });
}
