"use client";

import Link from "next/link";
import { useTranslation } from "./hooks/useTranslation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EventCard, type Event } from "@/components/EventCard";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useTranslation("Index");

  // 假設的近期活動 (placeholder)
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "TWNOG 14 研討會",
      date: "2024-06-18",
      location: "台北市",
      type: "conference",
      description:
        "一年一度的網路營運技術研討會，聚焦於 RPKI、路由安全與 IPv6 部署",
    },
    {
      id: 2,
      title: "網路安全工作坊",
      date: "2024-07-22",
      location: "線上",
      type: "workshop",
      description: "針對 DDoS 防禦與緩解策略的實務工作坊，包含實機演練",
    },
    {
      id: 3,
      title: "網路工程師聚會",
      date: "2024-08-15",
      location: "台中市",
      type: "meetup",
      description: "非正式聚會，討論日常營運挑戰與經驗分享",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* 幾何裝飾元素 - 固定在頁面各處 */}
      <div className="pointer-events-none fixed z-10 h-full w-full overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] h-12 w-12 rounded-full bg-yellow-300 opacity-80"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-[20%] right-[8%] h-16 w-16 rounded-none border-4 border-pink-400 opacity-70"
          initial={{ rotate: 45, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[15%] h-5 w-20 rounded-full bg-indigo-400 opacity-60"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
        <motion.div
          className="absolute right-[12%] bottom-[25%] h-8 w-8 rounded-full border-2 border-green-400 opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, #4ade80 70%, #4ade80 100%)",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </div>

      {/* 英雄區塊 */}
      <section className="relative w-full overflow-hidden border-b border-gray-100 bg-white py-24 md:py-32 lg:py-40 dark:border-gray-800 dark:bg-gray-950">
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
                className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 font-medium text-white hover:bg-cyan-700"
                >
                  <Link href="/events">{t("Common.learnMore")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/60"
                >
                  <Link
                    href="https://discord.gg/realtw"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    加入 Discord
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

      {/* 使命和簡介 */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* 簡單背景 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"></div>

        <div className="relative z-10 container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl dark:text-cyan-400"
              >
                {t("about")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400"
              >
                {t("description")}
              </motion.p>
            </div>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:gap-16">
            {/* 使命區塊 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-cyan-600 dark:text-cyan-400">•</span>
                {t("mission")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t("mission_text")}
              </p>
            </motion.div>

            {/* 我們做什麼區塊 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                <span className="mr-2 text-fuchsia-600 dark:text-fuchsia-400">
                  •
                </span>
                {t("whatWeDo")}
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[1, 2, 3, 4].map((i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="mr-2 font-medium text-amber-600 dark:text-amber-400">
                      {i}.
                    </span>
                    <span>{t(`whatWeDo_item${i}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 近期活動預覽 */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* 淡色背景 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 container px-4 md:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl dark:text-cyan-400">
                {t("upcomingEvents")}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                {t("description")}
              </p>
            </div>
          </motion.div>

          {/* 顯示最近的活動 */}
          <div className="container mb-16 px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <EventCard event={event} variant="homepage" />
                </motion.div>
              ))}
            </div>

            {/* 按鈕顯示更多活動 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <Button
                asChild
                className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
              >
                <Link href="/events" className="group">
                  查看所有活動
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
