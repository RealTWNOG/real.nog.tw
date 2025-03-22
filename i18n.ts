export const locales = ["en", "zh-TW"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = "zh-TW" as const;

// 載入翻譯檔案
export const loadMessages = async (locale: Locale) => {
  return (await import(`./messages/${locale}.json`)).default;
};
