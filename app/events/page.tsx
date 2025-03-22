"use client";

import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { EventCard, type Event } from "@/components/EventCard";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/app/components/PageHero";

export default function EventsPage() {
  const { t } = useTranslation("Events");

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

  // 假設的過去活動 (placeholder)
  const pastEvents: Event[] = [
    {
      id: 101,
      title: "TWNOG 13 研討會",
      date: "2023-06-20",
      location: "台北市",
      type: "conference",
      description: "網路營運技術研討會，主題包含網路安全、自動化與雲端網路",
    },
    {
      id: 102,
      title: "BGP 路由安全工作坊",
      date: "2023-09-15",
      location: "線上",
      type: "workshop",
      description: "專注於 BGP 安全實踐、RPKI 部署與 ROA 配置的實務工作坊",
    },
    {
      id: 103,
      title: "網路監控工具介紹",
      date: "2023-11-10",
      location: "台北市",
      type: "meetup",
      description: "分享各種開源網路監控工具的使用經驗與設定方法",
    },
    {
      id: 104,
      title: "IPv6 部署經驗分享",
      date: "2024-01-25",
      location: "台中市",
      type: "meetup",
      description: "IPv6 部署實務分享，包含各種常見問題與解決方案",
    },
    {
      id: 105,
      title: "DNS 安全研討會",
      date: "2024-03-18",
      location: "線上",
      type: "workshop",
      description: "探討 DNS 安全威脅與防護策略，包含 DNSSEC 部署實務",
    },
  ];

  return (
    <div className="w-full">
      {/* 使用可重用的 PageHero 組件 */}
      <PageHero
        title={t("title")}
        description={t("description")}
        tag="events"
      />

      {/* 活動列表區塊 */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            {/* 標籤切換控制器 */}
            <div className="mb-12 flex flex-col items-center justify-center">
              <Tabs defaultValue="upcoming" className="w-full">
                <div className="relative mx-auto mb-8 flex justify-center">
                  {/* 背景光暈效果 */}
                  <div className="absolute inset-0 flex items-center">
                    <motion.div
                      className="h-12 w-full rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/30 to-amber-400/30 blur-xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [0.97, 1.01, 0.97],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </div>

                  <TabsList className="relative z-10 grid w-auto min-w-[300px] grid-cols-2 overflow-hidden rounded-xl border border-cyan-200/80 bg-white/90 p-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:border-cyan-800/30 dark:bg-gray-900/80 dark:shadow-cyan-900/20">
                    <TabsTrigger
                      value="upcoming"
                      className="relative flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
                    >
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-0 z-10 rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                        style={{
                          opacity: 0,
                          boxShadow: "0 0 15px 2px rgba(14, 165, 233, 0.3)",
                        }}
                      />
                      <span className="relative z-20">
                        {t("upcomingEvents")}
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="past"
                      className="relative flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
                    >
                      <motion.span className="relative z-20">
                        {t("pastEvents")}
                      </motion.span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="upcoming" className="w-full">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {t("upcomingEvents")}
                  </motion.h2>
                  {upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {upcomingEvents.map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -8, transition: { duration: 0.2 } }}
                          className="h-full"
                        >
                          <EventCard event={event} variant="homepage" />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg border-2 border-black/80 bg-white p-8 text-center shadow-md dark:border-white/20 dark:bg-gray-900"
                    >
                      <div className="mb-4 inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        通知！
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        {t("noUpcomingEvents")}
                      </h3>
                      <p className="mb-6 text-gray-600 dark:text-gray-400">
                        {t("joinDiscord")}
                      </p>
                      <Button
                        asChild
                        className="border-2 border-black/80 bg-cyan-500 font-medium text-white transition-all hover:bg-cyan-600 dark:border-white/20"
                      >
                        <Link
                          href="https://discord.gg/realtw"
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          加入 Discord
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              repeat: Infinity,
                              repeatDelay: 1.5,
                              duration: 0.8,
                            }}
                          >
                            <ArrowUpRight className="h-4 w-4 text-white" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </TabsContent>

                <TabsContent value="past" className="w-full">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {t("pastEvents")}
                  </motion.h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pastEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="h-full"
                      >
                        <EventCard event={event} isPast variant="homepage" />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
