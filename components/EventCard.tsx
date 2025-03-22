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
  variant?: "default" | "compact";
}

export function EventCard({
  event,
  isPast = false,
  variant = "default",
}: EventCardProps) {
  const { t } = useTranslation("Events");

  return (
    <Card className="flex h-full flex-col" id={`event-${event.id}`}>
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
