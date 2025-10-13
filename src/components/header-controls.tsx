"use client";

import dynamic from "next/dynamic";

// Lazy load client components to avoid blocking LCP
const ThemeToggle = dynamic(
  () => import("./theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="w-10 h-10 scale-80 md:scale-100" />,
  }
);

const ApiStatusIndicator = dynamic(() => import("./api-status-indicator"), {
  ssr: false,
  loading: () => (
    <div className="h-8 w-8 flex flex-row-reverse scale-80 md:scale-100" />
  ),
});

export function ThemeToggleWrapper() {
  return <ThemeToggle />;
}

export function ApiStatusWrapper() {
  return (
    <div className="h-8 w-8 flex flex-row-reverse scale-80 md:scale-100">
      <ApiStatusIndicator />
    </div>
  );
}
