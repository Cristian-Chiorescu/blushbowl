import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full max-w-7xl px-10 flex items-center justify-between">
        <ThemeToggle />
        <Link href="/recipes">
          <Image
            src="/images/blushbowl-logo.png"
            alt="BlushBowl"
            width={100}
            height={100}
          ></Image>
        </Link>
        <div className="h-8 w-8"></div>
      </div>
    </div>
  );
}
