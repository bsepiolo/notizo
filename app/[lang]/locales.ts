import "server-only";

const locales: any = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  pl: () => import("@/locales/pl.json").then((module) => module.default),
};

export const getLocale = async (locale: string = "pl") => locales[locale]();
