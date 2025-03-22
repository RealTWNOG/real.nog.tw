"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const { t } = useTranslation("Menu");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/events", label: t("events") },
    { href: "/about", label: t("about") },
    { href: "/members", label: t("members") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="RealTWNOG Logo"
              width={48}
              height={48}
              className="h-12 w-12"
              priority
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-primary text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden text-xs md:flex"
          >
            <Link href="https://discord.gg/realtw" target="_blank">
              Discord
            </Link>
          </Button>
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:hidden"
                aria-label="開啟選單"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex justify-center">
                  <Image
                    src="/logo.svg"
                    alt="RealTWNOG Logo"
                    width={64}
                    height={64}
                    className="my-2 h-16 w-16"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "hover:text-primary rounded-md p-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="outline" className="mt-2">
                  <Link href="https://discord.gg/realtw" target="_blank">
                    Discord
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
