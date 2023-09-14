export type ValidationRules = {
  [key: string]: { value: boolean | string | RegExp; message: string };
};
