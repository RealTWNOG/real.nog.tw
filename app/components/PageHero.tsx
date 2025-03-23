"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  tag?: string;
}

export function PageHero({
  title,
  description,
  tag = "RealTW",
}: PageHeroProps) {
  // 滑鼠位置追蹤
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 陀螺儀數據追蹤
  const gyroX = useMotionValue(0);
  const gyroY = useMotionValue(0);

  // 平滑化的動作值
  const smoothX = useSpring(mouseX, { damping: 100, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 100, stiffness: 300 });

  // 轉換動作值到位移範圍
  const moveX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const moveY = useTransform(smoothY, [-500, 500], [-30, 30]);

  useEffect(() => {
    // 處理滑鼠移動
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    // 處理陀螺儀
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta && event.gamma) {
        // 將陀螺儀數據轉換為相對位移
        gyroX.set(event.gamma * 2);
        gyroY.set(event.beta * 2);
      }
    };

    // 判斷是否支援陀螺儀
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener(
          "deviceorientation",
          handleDeviceOrientation
        );
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* 背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyan-600 opacity-90"></div>
      </div>

      {/* 動態網格線 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 裝飾元素 */}
      <motion.div
        className="absolute top-12 right-[5%] h-20 w-20 rounded-full bg-white/10 backdrop-blur-md"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          x: moveX,
          y: moveY,
        }}
      />
      <motion.div
        className="absolute bottom-12 left-[8%] h-16 w-16 rounded-full border-2 border-white/30 bg-transparent"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          x: useTransform(smoothX, [-500, 500], [-20, 20]),
          y: useTransform(smoothY, [-500, 500], [-20, 20]),
        }}
      />
      <motion.div
        className="absolute right-[15%] bottom-24 h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          x: useTransform(smoothX, [-500, 500], [-15, 15]),
          y: useTransform(smoothY, [-500, 500], [-15, 15]),
        }}
      />

      <div className="relative z-10 container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* 標題盒子 */}
          <div className="relative mb-6 inline-block rounded-xl bg-white/10 px-6 py-2 backdrop-blur-md before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-transparent before:opacity-80">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative font-medium text-amber-100"
            >
              #{tag}
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              {title}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-lg text-base text-balance text-white md:text-xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
