import graphqlApi from "./grapqlInstance";

export type SliderImageResponse = {
  data: {
    data: {
      slider: {
        data: {
          attributes: {
            Image: {
              data: [{ attributes: { url: string } }];
            };
          };
        };
      };
    };
  };
};

const query = `
query Slider {
    slider {
      data {
        attributes {
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
}
`;

export function fetchSliderImages() {
  return graphqlApi.post<any, SliderImageResponse>("", {
    query: query,
  });
}

export function getSliderImages() {
  return fetchSliderImages().then((response) => {

    const parsedArray: string[] = [];
    response.data.data.slider.data.attributes.Image.data.map((element) =>
      parsedArray.push(element.attributes.url)
    );
    return parsedArray;
  });
}
