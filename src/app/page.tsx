import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4 font-heading">
        Welcome to BlushBowl!
      </h1>

      <Button className="font-sans hover:cursor-pointer">
        <Link href="/recipes">View Recipes</Link>
      </Button>
    </main>
  );
}
