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
      {/* 英雄區塊 */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-violet-100 py-24 md:py-32 lg:py-40 dark:from-blue-950/40 dark:to-violet-950/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  {t("title")}
                </h1>
                <h2 className="text-xl font-medium text-gray-500 md:text-2xl dark:text-gray-400">
                  {t("subtitle")}
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                  {t("description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/events">{t("Common.learnMore")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://discord.gg/realtw" target="_blank">
                    加入 Discord
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使命和簡介 */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("about")}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-bold">{t("mission")}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("mission_text")}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold">{t("whatWeDo")}</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="bg-primary mr-2 h-1 w-1 rounded-full"></div>
                  <span>{t("whatWeDo_item1")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary mr-2 h-1 w-1 rounded-full"></div>
                  <span>{t("whatWeDo_item2")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary mr-2 h-1 w-1 rounded-full"></div>
                  <span>{t("whatWeDo_item3")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary mr-2 h-1 w-1 rounded-full"></div>
                  <span>{t("whatWeDo_item4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 近期活動預覽 */}
      <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("upcomingEvents")}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="compact" />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/events">{t("viewAllEvents")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
