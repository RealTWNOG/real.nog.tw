"use client";

import { useTranslation } from "../hooks/useTranslation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCard, type Event } from "@/components/EventCard";
import { motion } from "motion/react";
import { PageHero } from "@/app/components/PageHero";

export default function EventsPage() {
  const { t } = useTranslation("Events");

  // 假設的近期活動 (placeholder)
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "源來這才是真正的網路維運",
      date: "2025-xx-xx",
      location: "台北市",
      type: "conference",
      description:
        "[籌辦中] 一年一度的網路營運技術研討會，聚焦於網路維運的基礎知識，包含各個面向如 BGP、DNS、DHCP、NTP 等，並邀請資深網路專家分享實務經驗。",
    },
  ];

  // 假設的過去活動 (placeholder)
  const pastEvents: Event[] = [];

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

                  <TabsList className="relative z-10 grid h-auto w-auto max-w-[90vw] min-w-[280px] grid-cols-2 overflow-hidden rounded-xl border border-cyan-200/80 bg-white/90 p-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:border-cyan-800/30 dark:bg-gray-900/80 dark:shadow-cyan-900/20">
                    <TabsTrigger
                      value="upcoming"
                      className="relative flex h-10 items-center justify-center rounded-lg px-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white sm:px-6 dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
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
                      className="relative flex h-10 items-center justify-center rounded-lg px-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white sm:px-6 dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
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
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      {t("noUpcomingEvents")}
                    </div>
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
                  {pastEvents.length > 0 ? (
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
                  ) : (
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      {t("noPastEvents")}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
