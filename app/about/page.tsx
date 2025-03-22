"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "motion/react";
import { PageHero } from "@/app/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Users, Heart, Share2, Code } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { t } = useTranslation("About");

  // 假設的團隊成員（僅示例）
  const teamMembers = [
    {
      name: "張家瑋",
      role: "創始人 / 技術總監",
      avatar: "/avatars/member1.jpg",
    },
    {
      name: "林宏明",
      role: "共同創始人 / 活動協調",
      avatar: "/avatars/member2.jpg",
    },
    {
      name: "陳美玲",
      role: "社群經理",
      avatar: "/avatars/member3.jpg",
    },
    {
      name: "王大維",
      role: "網路安全顧問",
      avatar: "/avatars/member4.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* 頁面標題區塊 */}
      <PageHero title={t("title")} description={t("description")} tag="about" />

      {/* 歷史與使命 */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* 歷史 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                  {t("history")}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {t("history")}
                </h2>
                <div className="relative mt-6">
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-fuchsia-500"></div>
                  <div className="space-y-8 pl-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        2020
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {t("history_2020")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        2021
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {t("history_2021")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        2022
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {t("history_2022")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        2023 - {t("year_to_present")}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {t("history_2023")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 使命 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  {t("mission")}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {t("mission")}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("mission_text")}
                </p>

                <div className="relative rounded-xl border-2 border-black/10 bg-gray-50 p-6 shadow-md dark:border-white/10 dark:bg-gray-800">
                  <div className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-70 blur-xl"></div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("committed_to")}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <Share2 className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("commitment_1")}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <Code className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("commitment_2")}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t("commitment_3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心價值 */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-2xl"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                {t("values")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("values_description")}
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* 核心價值 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-black/10 transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:hover:shadow-cyan-900/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-cyan-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="flex h-20 items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                        <Share2 className="h-7 w-7 text-cyan-600 dark:text-cyan-300" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xl">
                      {t("value1_title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                      {t("value1_text")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 核心價值 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-black/10 transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:hover:shadow-cyan-900/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/20 to-fuchsia-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="flex h-20 items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30">
                        <Code className="h-7 w-7 text-fuchsia-600 dark:text-fuchsia-300" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xl">
                      {t("value2_title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                      {t("value2_text")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 核心價值 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-black/10 transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:hover:shadow-cyan-900/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="flex h-20 items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                        <Heart className="h-7 w-7 text-amber-600 dark:text-amber-300" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xl">
                      {t("value3_title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                      {t("value3_text")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 團隊成員 */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                {t("team")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t("team_description")}
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800"
                >
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-300/20 to-fuchsia-300/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-700">
                    <div className="h-full w-full bg-gray-300 dark:bg-gray-600"></div>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <Button
                asChild
                className="group border-2 border-black/80 bg-cyan-500 font-medium text-white transition-all hover:bg-cyan-600 dark:border-white/20"
              >
                <Link
                  href="https://discord.gg/realtw"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {t("joinUs")}
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
          </div>
        </div>
      </section>
    </div>
  );
}
