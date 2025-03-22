import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealTWNOG",
  description: "Taiwan Network Operators Group",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  metadataBase: new URL("https://realtw.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "bg-background min-h-screen font-sans antialiased"
        )}
      >
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            {/* 可以在這裡加入 Footer */}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
