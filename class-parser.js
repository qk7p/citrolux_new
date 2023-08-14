const { default: axios } = require("axios");
const apiConfig = require("./api-config.js");
const fs = require("fs");

const aboutQuery = `
query About {
    blokOProdukte {
      data {
        attributes {    
          product_title
          about_product
          product_description
          icon_description
          left_icon {
            description
          }
          center_icon {
            description
          }
          right_icon {
            description
          }
        }
      }
    }
  }
`;

const footerQuery = `
query Footer {
    futer {
     data {
       attributes {
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

const howItWorksQuery = `
query WhereToBuy {
    blokKakEtoRabotaet {
     data {
        attributes {
         title
         description
         image_description
       }
     }
   }
   }
`;

const immunityQuery = `
query Immunity {
  blokUsilenieImuunnojZashhity {
    data {
      attributes {
        title
        molecule_1
        molecule_2
        description_item_1
        description_item_2
        description_item_3
      }
    }
  }
}
`

const regexp = /(?<=class=\\\")(.*?)(?=\\\")/g;

function fetchdata(query) {
  return axios.post(
    apiConfig.graphql_url,
    { query: query },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function parseData(data) {
  const matchedData = JSON.stringify(data).match(regexp);
  return matchedData.join(" ").split(" ");
}

async function generateSafeList() {
  const aboutResponse = await fetchdata(aboutQuery);
  const aboutStyles = parseData(aboutResponse.data);

  const footerResponse = await fetchdata(footerQuery);
  const footerStyles = parseData(footerResponse.data);

  const howItWorksResponse = await fetchdata(howItWorksQuery);
  const howItWorksStyles = parseData(howItWorksResponse.data);

  const immunityResponse = await fetchdata(immunityQuery);
  const immunityStyles = parseData(immunityResponse.data);

  const combinedStyles = [...aboutStyles, ...footerStyles, ...howItWorksStyles, ...immunityStyles];

  return [...new Set(combinedStyles)];
}

fs.readFile("tailwind.config.js", "utf8", async (err, data) => {
  const regexp = /(?<=safelist: \[)([.\n\s\S]*?)(?=\]\,)/gm;

  const replace = await generateSafeList();

  const tempArray = [];
  replace.map((item) => tempArray.push(`\n\"${item}\"`));
  const outputFile = data.replace(regexp, tempArray);

  fs.writeFile("tailwind.config.js", outputFile, (err) => {
    if (err) throw err;
  });
});
