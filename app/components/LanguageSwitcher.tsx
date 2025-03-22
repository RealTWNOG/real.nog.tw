"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { locales } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  // 取得語言顯示名稱
  const getLanguageLabel = (localeCode: string) => {
    switch (localeCode) {
      case "zh-TW":
        return "繁體中文";
      case "en":
        return "English";
      default:
        return localeCode;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">切換語言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => setLocale(l)}
            className="flex cursor-pointer items-center justify-between"
          >
            <span>{getLanguageLabel(l)}</span>
            {locale === l && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
