export type Config = {
  collections: Array<Collection>;
};

export type Collection = {
  name: string;
  slug: string;
  fields: Array<Field>;
};

export type Field = {
  name: string;
  type: FieldType;
};

export const fieldTypes = {
  Integer: 1,
  Text: 2,
} as const;

export type FieldType = keyof typeof fieldTypes;
