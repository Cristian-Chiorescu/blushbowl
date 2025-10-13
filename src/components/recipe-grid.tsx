"use client";

import { motion, AnimatePresence } from "motion/react";
import RecipeCard from "./recipe-card";
import { cn } from "@/lib/utils";
import type { Recipe } from "@/lib/types";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { fetchRecipes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useRef } from "react";

export default function RecipeGrid({
  tags,
  query,
  initialRecipes,
}: {
  tags: string[];
  query: string;
  initialRecipes: Recipe[];
}) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    // After first render, mark as no longer initial mount
    isInitialMount.current = false;
  }, []);
  const {
    data: recipes = initialRecipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes", tags, query],
    queryFn: () => fetchRecipes(tags, query),
    initialData: initialRecipes,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  });

  const filteredRecipes = recipes
    ? recipes
        .filter((recipe) => {
          if (tags.length === 0) return true;
          return tags.every((tagToMatch) =>
            recipe.tags?.some(
              (recipeTag) =>
                recipeTag.toLowerCase() === tagToMatch.toLowerCase()
            )
          );
        })
        .filter((recipe) => {
          const searchContent = recipe.name + " " + recipe.description;
          return searchContent.toLowerCase().includes(query.toLowerCase());
        })
    : [];

  if ((!recipes || recipes.length === 0) && isLoading) {
    return (
      <div className="grid grid-cols-1 max-w-5xl self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[15rem] gap-8 my-10 w-full px-6 sm:px-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-full" />
        ))}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 max-w-5xl self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[15rem] gap-8 my-10 w-full px-6 sm:px-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "col-span-1 row-span-1",
              (i === 0 || i / 9 === 1) &&
                "md:text-4xl md:col-span-2 md:row-span-2",
              i / 7 === 1 && "md:text-2xl md:col-span-2"
            )}
          >
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 max-w-5xl self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[15rem] gap-8 my-10 w-full px-6 sm:px-0">
      <AnimatePresence>
        {filteredRecipes.map((recipe, i) => {
          const isLCP = i === 0;
          const isNextFour = i > 0 && i < 5;
          const shouldAnimate = !isInitialMount.current;

          return (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}-${slugify(recipe.name)}`}
              className={cn(
                "col-span-1 row-span-1",
                (i === 0 || i % 10 === 0) &&
                  "md:text-4xl md:col-span-2 md:row-span-2",
                i % 7 === 0 && "md:text-2xl md:col-span-2"
              )}
            >
              {isLCP ? (
                shouldAnimate ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-full"
                  >
                    <RecipeCard
                      recipe={recipe}
                      loading="eager"
                      fetchPriority="high"
                    />
                  </motion.div>
                ) : (
                  <div className="h-full">
                    <RecipeCard
                      recipe={recipe}
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                )
              ) : isNextFour ? (
                shouldAnimate ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-full"
                  >
                    <RecipeCard
                      recipe={recipe}
                      loading="eager"
                      fetchPriority="high"
                      lowRes
                    />
                  </motion.div>
                ) : (
                  <div className="h-full">
                    <RecipeCard
                      recipe={recipe}
                      loading="eager"
                      fetchPriority="high"
                      lowRes
                    />
                  </div>
                )
              ) : (
                shouldAnimate ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-full"
                  >
                    <RecipeCard
                      recipe={recipe}
                      loading="lazy"
                      fetchPriority="low"
                      lowRes
                    />
                  </motion.div>
                ) : (
                  <div className="h-full">
                    <RecipeCard
                      recipe={recipe}
                      loading="lazy"
                      fetchPriority="low"
                      lowRes
                    />
                  </div>
                )
              )}
            </Link>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
