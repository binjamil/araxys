import * as engine from "./engine";
import config from "./araxys.config";

const main = async () => {
  console.log("Hello via Bun!");

  const e = await engine.build({ config });
};

main();
