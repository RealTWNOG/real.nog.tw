"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useTranslation } from "@/app/hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation("Common");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo 和簡介 */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="RealTWNOG Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RealTWNOG
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("footer_description")}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer_quick_links")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-500"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-600 transition-colors hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-500"
                >
                  {t("members")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-500"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* 社群連結 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer_social")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/RealTWNOG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-500"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t("footer_contact")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@nog.tw"
                  className="text-gray-600 transition-colors hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-500"
                >
                  contact@nog.tw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} RealTWNOG. {t("footer_rights")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
