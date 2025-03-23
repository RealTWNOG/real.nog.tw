"use client";

import Link from "next/link";
import { useTranslation } from "./hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { GeometricDecorations } from "./components/GeometricDecorations";

export default function Home() {
  const { t } = useTranslation("Index");

  return (
    <div className="flex flex-col items-center">
      <GeometricDecorations />

      {/* 英雄區塊 */}
      <section className="relative w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40 dark:border-gray-800 dark:bg-gray-950">
        <div className="relative z-10 container px-4 md:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* 左側文字內容 */}
            <div className="w-full max-w-xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6"
              >
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  {t("title")}
                </h1>
                <h2 className="text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-300">
                  {t("subtitle")}
                </h2>
              </motion.div>

              {/* 描述區塊 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-8 text-gray-600 dark:text-gray-300"
              >
                <p className="text-lg">{t("description")}</p>
              </motion.div>

              {/* 按鈕組 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 font-medium text-white hover:bg-cyan-700"
                >
                  <Link href="/about">{t("Common.learnMore")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/60"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    {t("Common.contactUs")}
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gray-700 dark:text-gray-300"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        duration: 0.8,
                      }}
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* 右側 Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex w-full max-w-sm items-center justify-center lg:max-w-md"
            >
              <img
                src="/logo.svg"
                alt="RealTWNOG Logo"
                className="h-auto w-full max-w-xs lg:max-w-sm dark:brightness-110"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
