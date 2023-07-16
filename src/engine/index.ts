import { BuildFunc } from "./types";

export const build: BuildFunc = async ({ config }) => {
  const find = async <T>() => {
    return {} as T;
  };

  const create = async <T>(data: T) => {};

  return {
    find,
    create,
  };
};
