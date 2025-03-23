"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "motion/react";
import { PageHero } from "@/app/components/PageHero";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, AtSign } from "lucide-react";
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
          <div className="mx-auto max-w-3xl">
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

            {/* 其他聯絡方式 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {t("ContactUs")}
                </h3>

                <div className="space-y-4">
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
                              contact@nog.tw
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
                    className="overflow-hidden rounded-lg border-2 border-gray-200 px-4 dark:border-gray-700"
                  >
                    <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                      {t("faq2_question")}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 text-gray-600 dark:text-gray-300">
                      {t("faq2_answer")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
