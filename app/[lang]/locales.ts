import "server-only";

const locales = {
  en: () => import("@/locales/en").then((module) => module.default),
  pl: () => import("@/locales/pl").then((module) => module.default),
};

export type Locales = keyof typeof locales;

export const getLocale = async (locale: Locales) => locales[locale]();
