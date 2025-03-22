"use client";

import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { EventCard, type Event } from "@/components/EventCard";

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
    <div className="flex flex-col items-center">
      {/* 活動頁面標題 */}
      <section className="w-full bg-gradient-to-r from-blue-100 to-violet-100 py-12 md:py-16 lg:py-20 dark:from-blue-950/40 dark:to-violet-950/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* 活動列表 */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">{t("upcomingEvents")}</TabsTrigger>
              <TabsTrigger value="past">{t("pastEvents")}</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <TabsContent value="upcoming" className="space-y-8">
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                    <p className="text-lg font-medium">
                      {t("noUpcomingEvents")}
                    </p>
                    <p className="mt-2 text-gray-500">
                      請關注我們的 Discord 以獲取最新活動資訊。
                    </p>
                    <Button asChild variant="outline" className="mt-6">
                      <Link href="https://discord.gg/realtw" target="_blank">
                        加入 Discord
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="past" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} isPast={true} />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
