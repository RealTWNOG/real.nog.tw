"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function GeometricDecorations() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 為每個元素創建彈性動畫值
  const element1X = useSpring(0, { stiffness: 50, damping: 10 });
  const element1Y = useSpring(0, { stiffness: 50, damping: 10 });
  const element2X = useSpring(0, { stiffness: 40, damping: 8 });
  const element2Y = useSpring(0, { stiffness: 40, damping: 8 });
  const element3X = useSpring(0, { stiffness: 30, damping: 12 });
  const element3Y = useSpring(0, { stiffness: 30, damping: 12 });
  const element4X = useSpring(0, { stiffness: 45, damping: 15 });
  const element4Y = useSpring(0, { stiffness: 45, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 計算滑鼠位置相對於視窗中心的偏移
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      mouseX.set(offsetX);
      mouseY.set(offsetY);

      // 為每個元素設置不同的移動距離
      element1X.set(offsetX * 30);
      element1Y.set(offsetY * 30);
      element2X.set(offsetX * -40);
      element2Y.set(offsetY * -40);
      element3X.set(offsetX * 25);
      element3Y.set(offsetY * 25);
      element4X.set(offsetX * -35);
      element4Y.set(offsetY * -35);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed z-10 h-full w-full overflow-hidden">
      <motion.div
        className="absolute top-[10%] left-[5%] h-12 w-12 rounded-full bg-yellow-300 opacity-80"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        style={{ x: element1X, y: element1Y }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute top-[20%] right-[8%] h-16 w-16 rounded-none border-4 border-pink-400 opacity-70"
        initial={{ rotate: 45, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        style={{ x: element2X, y: element2Y }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[15%] h-5 w-20 rounded-full bg-indigo-400 opacity-60"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        style={{ x: element3X, y: element3Y }}
        transition={{ duration: 0.7, delay: 0.6 }}
      />
      <motion.div
        className="absolute right-[12%] bottom-[25%] h-8 w-8 rounded-full border-2 border-green-400 opacity-70"
        style={{
          x: element4X,
          y: element4Y,
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, #4ade80 70%, #4ade80 100%)",
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
    </div>
  );
}
