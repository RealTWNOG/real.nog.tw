"use client";

import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPinIcon } from "lucide-react";

// 定義事件類型
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
}

interface EventCardProps {
  event: Event;
  isPast?: boolean;
  variant?: "default" | "compact" | "homepage";
}

export function EventCard({
  event,
  isPast = false,
  variant = "default",
}: EventCardProps) {
  const { t } = useTranslation("Events");

  // 首頁樣式
  if (variant === "homepage") {
    return (
      <Card
        className={cn(
          "h-full gap-2 overflow-hidden border-2 bg-white transition-all duration-300 hover:shadow-md dark:bg-gray-900",
          event.type === "conference"
            ? "border-cyan-300 hover:border-cyan-400 dark:border-cyan-800 dark:hover:border-cyan-700"
            : event.type === "workshop"
              ? "border-fuchsia-300 hover:border-fuchsia-400 dark:border-fuchsia-800 dark:hover:border-fuchsia-700"
              : "border-amber-300 hover:border-amber-400 dark:border-amber-800 dark:hover:border-amber-700"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                event.type === "conference"
                  ? "border-cyan-300 bg-cyan-100 text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300"
                  : event.type === "workshop"
                    ? "border-fuchsia-300 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-800 dark:bg-fuchsia-950/50 dark:text-fuchsia-300"
                    : "border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300"
              )}
            >
              {event.type === "conference"
                ? "研討會"
                : event.type === "workshop"
                  ? "工作坊"
                  : "聚會"}
            </div>
          </div>
          <CardTitle className="mt-2 text-lg font-bold">
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-1 h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {event.description}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            asChild
            variant="outline"
            className={cn(
              "w-full border-2 font-medium transition-all",
              event.type === "conference"
                ? "border-cyan-300 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800 dark:border-cyan-800 dark:text-cyan-400 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-300"
                : event.type === "workshop"
                  ? "border-fuchsia-300 text-fuchsia-700 hover:bg-fuchsia-50 hover:text-fuchsia-800 dark:border-fuchsia-800 dark:text-fuchsia-400 dark:hover:bg-fuchsia-950/50 dark:hover:text-fuchsia-300"
                  : "border-amber-300 text-amber-700 hover:bg-amber-50 hover:text-amber-800 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950/50 dark:hover:text-amber-300"
            )}
          >
            <Link href={`/events/${event.id}`}>了解更多</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // 預設和簡潔樣式不變
  return (
    <Card className="flex h-full flex-col gap-2" id={`event-${event.id}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>
              {new Date(event.date).toLocaleDateString("zh-TW")} ·{" "}
              {event.location}
            </CardDescription>
          </div>
          <div className="bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-ring inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
            {t(event.type)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{event.description}</p>
      </CardContent>
      <CardFooter
        className={
          variant === "compact"
            ? "flex justify-end border-t pt-4"
            : "border-t pt-4"
        }
      >
        {variant === "compact" ? (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Link href={`/events#event-${event.id}`}>
              {t("Common.learnMore")}
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            variant={isPast ? "outline" : "default"}
            className="w-full"
          >
            <Link href={`/events#event-${event.id}`}>
              {isPast ? t("moreDetails") : t("registerNow")}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
