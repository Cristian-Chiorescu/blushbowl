import Link from "next/link";
import Image from "next/image";
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

export default function Header() {
  return (
    <div className="absolute w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-10 flex items-center justify-between">
        <ThemeToggle />
        <Link href="/recipe-list">
          <Image
            src="/blushbowl-logo.png"
            alt="BlushBowl"
            width={100}
            height={100}
            className="scale-80 md:scale-100"
            priority
          />
        </Link>
        <div className="h-8 w-8 flex flex-row-reverse scale-80 md:scale-100">
          <ApiStatusIndicator />
        </div>
      </div>
    </div>
  );
}
