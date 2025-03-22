"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "motion/react";
import { PageHero } from "@/app/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UserRound, Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MembersPage() {
  const { t } = useTranslation("Members");

  // 假設的個人成員列表
  const individualMembers = [
    {
      id: 1,
      name: "林志明",
      role: "資深網路工程師",
      organization: "中華電信",
      type: "founding",
      expertise: ["IPv6", "BGP", "RPKI"],
      imageUrl: "/avatars/member1.jpg",
    },
    {
      id: 2,
      name: "陳雅婷",
      role: "網路安全分析師",
      organization: "台灣大哥大",
      type: "regular",
      expertise: ["資安防護", "DDoS 緩解", "威脅分析"],
      imageUrl: "/avatars/member2.jpg",
    },
    {
      id: 3,
      name: "王建國",
      role: "基礎設施架構師",
      organization: "遠傳電信",
      type: "founding",
      expertise: ["SDN", "網路自動化", "雲端互連"],
      imageUrl: "/avatars/member3.jpg",
    },
    {
      id: 4,
      name: "李美玲",
      role: "數據中心運維專家",
      organization: "台灣之星",
      type: "regular",
      expertise: ["數據中心", "網路監控", "故障排除"],
      imageUrl: "/avatars/member4.jpg",
    },
    {
      id: 5,
      name: "張智傑",
      role: "網路自動化工程師",
      organization: "台灣網路資訊中心",
      type: "regular",
      expertise: ["自動化", "Python", "網路監控"],
      imageUrl: "/avatars/member5.jpg",
    },
    {
      id: 6,
      name: "吳佳蓉",
      role: "網路安全顧問",
      organization: "資安業者",
      type: "associate",
      expertise: ["資安稽核", "滲透測試", "弱點掃描"],
      imageUrl: "/avatars/member6.jpg",
    },
  ];

  // 假設的組織成員列表
  const organizationMembers = [
    {
      id: 1,
      name: "中華電信",
      type: "founding",
      description: "台灣最大的電信業者，提供全方位的網路與通訊服務。",
      imageUrl: "/orgs/org1.jpg",
    },
    {
      id: 2,
      name: "台灣大哥大",
      type: "founding",
      description: "領先的行動通訊服務提供商，專注於 5G 與數位轉型。",
      imageUrl: "/orgs/org2.jpg",
    },
    {
      id: 3,
      name: "台灣網路資訊中心 (TWNIC)",
      type: "founding",
      description: "負責台灣網域名稱與 IP 位址管理的非營利組織。",
      imageUrl: "/orgs/org3.jpg",
    },
    {
      id: 4,
      name: "遠傳電信",
      type: "regular",
      description: "創新的電信與數位服務提供商，致力於物聯網與智慧城市。",
      imageUrl: "/orgs/org4.jpg",
    },
    {
      id: 5,
      name: "台灣學術網路 (TANet)",
      type: "associate",
      description: "連接台灣各大學與研究機構的學術網路。",
      imageUrl: "/orgs/org5.jpg",
    },
  ];

  // 取得成員類型的 badge 樣式
  const getMemberTypeBadge = (type: string) => {
    switch (type) {
      case "founding":
        return (
          <Badge
            variant="outline"
            className="border-amber-500 bg-amber-100/50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
          >
            {t("founding")}
          </Badge>
        );
      case "regular":
        return (
          <Badge
            variant="outline"
            className="border-cyan-500 bg-cyan-100/50 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300"
          >
            {t("regular")}
          </Badge>
        );
      case "associate":
        return (
          <Badge
            variant="outline"
            className="border-fuchsia-500 bg-fuchsia-100/50 text-fuchsia-800 dark:bg-fuchsia-900/20 dark:text-fuchsia-300"
          >
            {t("associate")}
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* 頁面標題區塊 */}
      <PageHero
        title={t("title")}
        description={t("description")}
        tag="members"
      />

      {/* 成員列表頁籤區塊 */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="individual" className="w-full">
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

                <TabsList className="relative z-10 grid w-auto max-w-[90vw] min-w-[280px] grid-cols-2 overflow-hidden rounded-xl border border-cyan-200/80 bg-white/90 p-1 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:border-cyan-800/30 dark:bg-gray-900/80 dark:shadow-cyan-900/20">
                  <TabsTrigger
                    value="individual"
                    className="relative flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white sm:px-6 dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
                  >
                    <motion.div
                      layoutId="tab-indicator-members"
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
                    <UserRound className="h-4 w-4" />
                    <span className="relative z-20">{t("individual")}</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="organization"
                    className="relative flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium tracking-wide transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-400 data-[state=active]:text-white sm:px-6 dark:data-[state=active]:from-cyan-600 dark:data-[state=active]:to-cyan-500"
                  >
                    <Building2 className="h-4 w-4" />
                    <span className="relative z-20">{t("organization")}</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* 個人成員列表 */}
              <TabsContent value="individual" className="w-full">
                <div className="mb-8 flex items-center justify-between">
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {t("individual")}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-900/50">
                      {t("count_members", {
                        count: String(individualMembers.length),
                      })}
                    </Badge>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {individualMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="overflow-hidden border-2 border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700">
                        <CardContent className="p-0">
                          <div className="relative">
                            <div className="absolute top-0 right-0 z-10 p-2">
                              {getMemberTypeBadge(member.type)}
                            </div>
                            <div className="flex h-28 items-center justify-center overflow-hidden bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20">
                              <div className="h-full w-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <div className="absolute -bottom-12 left-4">
                              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-800">
                                <div className="h-full w-full bg-gray-300 dark:bg-gray-600"></div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-14 p-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {member.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {member.role} · {member.organization}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {member.expertise.map((skill, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* 組織成員列表 */}
              <TabsContent value="organization" className="w-full">
                <div className="mb-8 flex items-center justify-between">
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {t("organization")}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-900/50">
                      {t("count_orgs", {
                        count: String(organizationMembers.length),
                      })}
                    </Badge>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  {organizationMembers.map((org, index) => (
                    <motion.div
                      key={org.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border-2 border-gray-200 transition-all duration-300 hover:shadow-lg dark:border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex flex-col gap-4 md:flex-row md:items-center">
                            <div className="flex-shrink-0">
                              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                <div className="h-full w-full bg-gray-200 dark:bg-gray-700"></div>
                              </div>
                            </div>

                            <div className="flex-grow">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  {org.name}
                                </h3>
                                {getMemberTypeBadge(org.type)}
                              </div>
                              <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {org.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 成為會員區塊 */}
      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border-2 border-black/10 bg-gradient-to-b from-cyan-50 to-white p-8 shadow-xl dark:border-white/10 dark:from-cyan-950/30 dark:to-gray-900">
              <div className="grid gap-10 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                    {t("becomeMember")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t("memberBenefits")}
                  </h2>
                  <Separator className="my-4 bg-black/10 dark:bg-white/10" />

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("benefit1")}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("benefit2")}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("benefit3")}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("benefit4")}
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="max-w-md space-y-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {t("interested")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("join_discord")}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full border-2 border-black/80 bg-cyan-500 font-medium text-white transition-all hover:bg-cyan-600 dark:border-white/20"
                    >
                      <Link
                        href="https://discord.gg/realtw"
                        target="_blank"
                        className="flex items-center justify-center gap-2"
                      >
                        {t("becomeMember")}
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
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
