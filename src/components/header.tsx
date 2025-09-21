import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="absolute w-full flex justify-center">
      <div className="w-full max-w-7xl px-10 flex items-center justify-between">
        <ThemeToggle />
        <Link href="/recipelist">
          <Image
            src="/images/blushbowl-logo.png"
            alt="BlushBowl"
            width={100}
            height={100}
            className="scale-80 md:scale-100"
          ></Image>
        </Link>
        <div className="h-8 w-8"></div>
      </div>
    </div>
  );
}
