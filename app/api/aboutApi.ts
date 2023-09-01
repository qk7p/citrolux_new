import graphqlApi from "./grapqlInstance";

export type AboutContentResponse = {
  data: {
    data: {
      blokOProdukte: {
        data: {
          attributes: {
            product_title: string;
            about_product: string;
            product_description: string;
            icon_description: string;
            product_image: {
              data: {
                attributes: {
                  alternativeText: string;
                  url: string;
                };
              };
            };
            drop_image: {
              data: {
                attributes: {
                  alternativeText: string;
                  url: string;
                };
              };
            };
            icon: {
              data: {
                attributes: {
                  alternativeText: string;
                  url: string;
                };
              };
            };
            left_icon: {
              icon: {
                data: {
                  attributes: {
                    alternativeText: string;
                    url: string;
                  };
                };
              };
              description: string;
            };
            center_icon: {
              icon: {
                data: {
                  attributes: {
                    alternativeText: string;
                    url: string;
                  };
                };
              };
              description: string;
            };
            right_icon: {
              icon: {
                data: {
                  attributes: {
                    alternativeText: string;
                    url: string;
                  };
                };
              };
              description: string;
            };
          };
        };
      };
    };
  };
};

const query = `
query About {
  blokOProdukte {
    data {
      attributes {
        drop_image {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        product_title
        about_product
        product_image {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        product_description
        icon {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        icon_description
        left_icon {
          icon {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          description
        }
        center_icon {
          icon {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          description
        }
        right_icon {
          icon {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          description
        }
      }
    }
  }
}
`;

export function fetchAboutContent() {
  return graphqlApi.post<any, AboutContentResponse>(
    "",
    {
      query: query,
    },
  );
}
