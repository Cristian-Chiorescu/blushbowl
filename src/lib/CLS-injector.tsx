"use client";
import { useEffect } from "react";

export function CLSInjector() {
  useEffect(() => {
    // Attach to body to guarantee it’s above everything and in-flow.
    const target = document.body;

    // Insert with height 0 so first paint happens without it...
    const banner = document.createElement("div");
    Object.assign(banner.style, {
      height: "0px", // start at 0
      overflow: "hidden",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent)",
      color: "#111827",
      fontWeight: "600",
      // IMPORTANT: no position: fixed/absolute — must be in normal flow
    });

    // Put it at the very top of the document so it pushes everything down
    target.prepend(banner);

    requestAnimationFrame(() => {
      setTimeout(() => {
        banner.style.height = "150px";
      }, 1000); // first jump
      setTimeout(() => {
        banner.style.height = "250px";
      }, 1800); // second jump -> bigger CLS
    });

    return () => banner.remove();
  }, []);

  return null;
}
