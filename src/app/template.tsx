"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo({ top: 0 })}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          y: reduce ? 0 : -20,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
