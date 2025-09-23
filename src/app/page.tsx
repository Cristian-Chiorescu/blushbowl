import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedGrid from "@/components/animated-grid";

export default function Home() {
  return (
    <main className="font-sans flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50">
        <AnimatedGrid />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-secondary to-background/0" />

      <div className="text-center p-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">
          Find your next favorite meal.
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          BlushBowl is a cozy corner of the internet for discovering beautiful,
          easy-to-follow recipes.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 hover:bg-primary-hover hover:scale-105"
        >
          <Link href="/recipe-list">View Recipes</Link>
        </Button>
      </div>
    </main>
  );
}
