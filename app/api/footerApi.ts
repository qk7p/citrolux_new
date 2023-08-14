import graphqlApi from "./grapqlInstance";

type FooterContentResponse = {
  data: {
    data: {
      futer: {
        data: {
          attributes: {
            company_logo: {
              data: {
                attributes: {
                  url: string;
                  alternativeText: string;
                };
              };
            };
            company_name: string;
            company_adress: string;
            company_number: string;
            company_site: string;
            desclaimer: string;
          };
        };
      };
    };
  };
};

const query = `
query Footer {
    futer {
     data {
       attributes {
         company_logo {
           data {
             attributes {
               url
               alternativeText
             }
           }
         }
         company_name
         company_adress
         company_number
         company_site
         desclaimer
       }
     }
   }
   }
`;

export function fetchFooterContent() {
  return graphqlApi.post<any, FooterContentResponse>("", {
    query: query,
  });
}
