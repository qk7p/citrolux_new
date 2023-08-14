import graphqlApi from "./grapqlInstance";

type HowItWorksResponse = {
  data: {
    data: {
      blokKakEtoRabotaet: {
        data: {
          attributes: {
            title: string;
            description: string;
            image: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            image_description: string;
          };
        };
      };
    };
  };
};

const query = `
query WhereToBuy {
    blokKakEtoRabotaet {
     data {
        attributes {
         title
         description
         image {
           data {
             attributes {
               url
               alternativeText
             }
           }
         }
         image_description
       }
     }
   }
   }
`;

export function fetchHowItWorksContent() {
  return graphqlApi.post<any, HowItWorksResponse>("", {
    query: query,
  });
}
