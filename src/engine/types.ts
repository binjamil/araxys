import { Config } from "../config/types";

export type Dependencies = {
  config: Config;
};

export type Engine = {
  find: <T>() => Promise<T>;
  create: <T>(data: T) => Promise<void>;
};

export type BuildFunc = (d: Dependencies) => Promise<Engine>;
