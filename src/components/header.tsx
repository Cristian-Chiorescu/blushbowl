import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load client components separately
const ThemeToggleWrapper = dynamic(
  () =>
    import("./header-controls").then((mod) => ({
      default: mod.ThemeToggleWrapper,
    })),
  {
    loading: () => <div className="w-10 h-10 scale-80 md:scale-100" />,
  }
);

const ApiStatusWrapper = dynamic(
  () =>
    import("./header-controls").then((mod) => ({
      default: mod.ApiStatusWrapper,
    })),
  {
    loading: () => <div className="h-8 w-8 scale-80 md:scale-100" />,
  }
);

export default function Header() {
  return (
    <div className="absolute w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-10 flex items-center justify-between">
        <ThemeToggleWrapper />
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
        <ApiStatusWrapper />
      </div>
    </div>
  );
}
