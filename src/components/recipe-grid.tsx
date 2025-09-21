"use client";

import { motion, AnimatePresence, scale } from "motion/react";
import RecipeCard from "./recipe-card";
import { cn } from "@/lib/utils";
import type { Recipe } from "@/lib/types";
import Link from "next/link";
import { slugify } from "@/lib/utils";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[20rem] gap-8 my-10">
      <AnimatePresence>
        {recipes.map((recipe, i) => {
          return (
            <Link
              key={recipe.id}
              href={`/recipes/${slugify(recipe.name)}`}
              className={cn(
                "col-span-1 row-span-1",
                (i === 0 || i / 10 === 1) &&
                  "md:text-4xl md:col-span-2 md:row-span-2",
                i / 7 === 1 && "md:text-2xl md:col-span-2"
              )}
            >
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            </Link>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
