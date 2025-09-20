"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export default function RecipeFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTags = searchParams.getAll("tag");

  const allTags = ["Quick", "Vegan", "Breakfast", "Healthy", "Dessert"];

  const handleTagClick = (tag: string) => {
    let newTags = [...activeTags];

    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
    } else {
      newTags.push(tag);
    }

    const params = new URLSearchParams();

    newTags.forEach((t) => params.append("tag", t));

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      {allTags.map((tag) => {
        return (
          <Button
            key={tag}
            variant={activeTags.includes(tag) ? "default" : "secondary"}
            onClick={() => handleTagClick(tag)}
            className="hover:cursor-pointer hover:ring-2 ring-foreground"
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
}
