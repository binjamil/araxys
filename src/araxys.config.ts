import { Config } from "./config/types";

const config: Config = {
  collections: [
    {
      name: "Person",
      fields: [
        { name: "first_name", type: "Text" },
        { name: "last_name", type: "Text" },
        { name: "age", type: "Integer" },
      ],
    },
  ],
};

export default config;
