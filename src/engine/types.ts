import { Db } from "mongodb";
import { Collection, Config } from "../config/types";

export type Dependencies = {
  config: Config;
  db: Db
};

export type Engine = {
  find: (args: FindArgs) => Promise<Array<Document>>;
  create: (args: CreateArgs) => Promise<void>;
};

export type BuildFunc = (d: Dependencies) => Promise<Engine>;

export type FindArgs = {
  collection: Collection;
};

export type CreateArgs = {
  collection: Collection;
  data: Document;
};

export type Document = Record<string, unknown>;
