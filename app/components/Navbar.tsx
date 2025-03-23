"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "motion/react";

export default function Navbar() {
  const { t } = useTranslation("Menu");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/events", label: t("events") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="sticky top-0 z-50 w-full border-b border-cyan-100 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 dark:border-slate-800 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/90"
    >
      {/* 頂部細線 */}
      <div className="absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400"></div>

      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-cyan-100 to-fuchsia-100 opacity-0 dark:from-cyan-900/20 dark:to-fuchsia-900/20"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src="/logo.svg"
                  alt="RealTWNOG Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            </Link>
          </motion.div>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group relative"
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[1px] h-[2px] w-full rounded-full bg-cyan-600"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      originY: "0px",
                    }}
                  />
                )}
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    pathname === item.href
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  )}
                >
                  {pathname !== item.href && (
                    <motion.span
                      className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gray-200 opacity-0 dark:bg-gray-700"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 px-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block"
          >
            <Button
              asChild
              size="sm"
              variant="outline"
              className="relative overflow-hidden border-cyan-500 bg-transparent font-medium text-cyan-600 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-700 dark:text-cyan-400 dark:hover:bg-cyan-950 dark:hover:text-cyan-300"
            >
              <Link
                href="https://t.me/twnog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                {t("quickaction")}
                <motion.div
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    duration: 0.8,
                  }}
                >
                  <ArrowUpRight className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <LanguageSwitcher />
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  aria-label="開啟選單"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-l-gray-200 bg-white/98 backdrop-blur-lg dark:border-l-gray-800 dark:bg-gray-950/98"
            >
              <SheetHeader>
                <SheetTitle className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src="/logo.svg"
                      alt="RealTWNOG Logo"
                      width={48}
                      height={48}
                      className="my-2 h-12 w-12"
                    />
                  </motion.div>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md p-2 px-4 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-300"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900/50 dark:hover:text-white"
                      )}
                    >
                      {pathname === item.href && (
                        <div className="mr-1 -ml-2 h-1 w-1 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                      )}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-4"
                >
                  <Button
                    asChild
                    className="w-full bg-cyan-600 font-medium text-white hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600"
                  >
                    <Link
                      href="https://t.me/realtwnog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      {t("quickaction")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* 底部指示器 - 僅在滾動時顯示 */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.header>
  );
}
