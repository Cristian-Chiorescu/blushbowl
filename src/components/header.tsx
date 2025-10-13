import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import ApiStatusIndicatior from "./api-status-indicator";

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
            loading="eager"
            fetchPriority="high"
          ></Image>
        </Link>
        <div className="h-8 w-8 flex flex-row-reverse scale-80 md:scale-100">
          <ApiStatusIndicatior />
        </div>
      </div>
    </div>
  );
}
