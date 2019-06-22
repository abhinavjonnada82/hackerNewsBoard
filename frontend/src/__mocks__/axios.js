"use strict";
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          by: "zeristor",
          title: "YInMn Blue",
          url: "https://en.wikipedia.org/wiki/YInMn_Blue",
          score: 178
        },
        {
          by: "bjourne",
          title:
            "It's the Effect Size, Stupid: What effect size is and why it is important (2002)",
          url: "https://www.leeds.ac.uk/educol/documents/00002182.htm",
          score: 38
        }
      ]
    });
  }
};
