"use client";

import { useLanguage } from "../LanguageProvider";

// 定義翻譯參數的類型
type TranslationParams = Record<string, string>;

export function useTranslation(defaultNamespace: string) {
  const { messages, locale } = useLanguage();

  const t = (key: string, params?: TranslationParams) => {
    // 判斷是否含有命名空間
    const hasNamespace = key.includes(".");
    const [namespace, translationKey] = hasNamespace
      ? [key.split(".")[0], key.split(".")[1]]
      : [defaultNamespace, key];

    // 檢查命名空間是否存在
    if (!messages[namespace]) {
      console.warn(`Namespace "${namespace}" not found in messages`);
      return key;
    }

    // 檢查翻譯鍵是否存在
    if (!messages[namespace][translationKey]) {
      console.warn(
        `Key "${translationKey}" not found in namespace "${namespace}"`
      );
      return translationKey;
    }

    let text = messages[namespace][translationKey];

    // 處理插值參數
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(new RegExp(`{${paramKey}}`, "g"), value);
      });
    }

    return text;
  };

  return {
    t,
    locale,
  };
}
