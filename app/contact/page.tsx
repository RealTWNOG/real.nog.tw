"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "motion/react";
import { PageHero } from "@/app/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Send, AtSign, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useTranslation("Contact");

  return (
    <div className="w-full">
      {/* 頁面標題區塊 */}
      <PageHero
        title={t("title")}
        description={t("description")}
        tag="contact"
      />

      {/* 聯絡表單區塊 */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white"
              >
                {t("getInTouch")}
              </motion.h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* 聯絡表單 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl border-2 border-gray-200 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800/50"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl"></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-full space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("name")}
                      </label>
                      <Input
                        className="border-2 border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                        placeholder={t("placeholder_name")}
                      />
                    </div>
                    <div className="w-full space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("email")}
                      </label>
                      <Input
                        className="border-2 border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                        placeholder={t("placeholder_email")}
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("subject")}
                    </label>
                    <Input
                      className="border-2 border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                      placeholder={t("placeholder_subject")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t("message")}
                    </label>
                    <Textarea
                      className="min-h-[150px] border-2 border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                      placeholder={t("placeholder_message")}
                    />
                  </div>

                  <Button className="group w-full border-2 border-black/80 bg-cyan-500 font-medium text-white transition-all hover:bg-cyan-600 dark:border-white/20">
                    <div className="flex items-center gap-2">
                      {t("send")}
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          repeatDelay: 1.5,
                          duration: 0.8,
                        }}
                      >
                        <Send className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                  </Button>
                </div>
              </motion.div>

              {/* 其他聯絡方式 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("orContact")}
                  </h3>

                  <div className="space-y-4">
                    <Card className="border-2 border-gray-200 transition-all hover:border-cyan-200 hover:shadow-md dark:border-gray-700 dark:hover:border-cyan-800">
                      <CardContent className="p-4">
                        <Link
                          href="https://discord.gg/realtw"
                          target="_blank"
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                              <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {t("discord")}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                discord.gg/realtw
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-gray-400" />
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-gray-200 transition-all hover:border-cyan-200 hover:shadow-md dark:border-gray-700 dark:hover:border-cyan-800">
                      <CardContent className="p-4">
                        <Link
                          href="mailto:contact@realtw.org"
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                              <AtSign className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {t("email_address")}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                contact@realtw.org
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-gray-400" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />

                {/* 常見問題 */}
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("faq")}
                  </h3>

                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem
                      value="item-1"
                      className="rounded-lg border-2 border-gray-200 px-4 dark:border-gray-700"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                        {t("faq1_question")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {t("faq1_answer")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-2"
                      className="rounded-lg border-2 border-gray-200 px-4 dark:border-gray-700"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                        {t("faq2_question")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {t("faq2_answer")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-3"
                      className="overflow-hidden rounded-lg border-2 border-gray-200 px-4 dark:border-gray-700"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                        {t("faq3_question")}
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 text-gray-600 dark:text-gray-300">
                        {t("faq3_answer")}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
