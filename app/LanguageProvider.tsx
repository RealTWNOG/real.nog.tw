"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, defaultLocale, loadMessages } from "@/i18n";

// 定義翻譯訊息的結構類型
type TranslationMessages = {
  [namespace: string]: {
    [key: string]: string;
  };
};

type LanguageContextType = {
  locale: Locale;
  messages: TranslationMessages;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<TranslationMessages>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 檢查 localStorage 是否有儲存的語言設定
    const savedLocale = localStorage.getItem("locale") as Locale | null;

    // 如果有儲存的語言設定就使用，否則使用預設語言
    const currentLocale = savedLocale || defaultLocale;

    // 載入翻譯檔案
    loadMessages(currentLocale).then((msgs) => {
      setMessages(msgs as TranslationMessages);
      setLocaleState(currentLocale);
      setIsLoading(false);
    });
  }, []);

  // 切換語言時更新 HTML lang 屬性
  useEffect(() => {
    if (document.documentElement) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // 切換語言
  const setLocale = (newLocale: Locale) => {
    setIsLoading(true);
    loadMessages(newLocale).then((msgs) => {
      setMessages(msgs as TranslationMessages);
      setLocaleState(newLocale);
      localStorage.setItem("locale", newLocale);
      setIsLoading(false);
    });
  };

  if (isLoading) {
    // 等待翻譯資料載入完成
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        載入中...
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, messages, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
