import { BuildFunc, CreateArgs, Document, FindArgs } from "./types";

export const build: BuildFunc = async ({ config, db }) => {
  const find = async (args: FindArgs) => {
    const { collection } = args;
    const results: Array<Document> = await db
      .collection(collection.slug)
      .find()
      .toArray();
    return results;
  };

  const create = async (args: CreateArgs) => {
    const { collection, data } = args;
  };

  return {
    find,
    create,
  };
};
