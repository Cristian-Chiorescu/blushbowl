import RecipeFilters from "@/components/recipe-filters";
import RecipeGrid from "@/components/recipe-grid";
import { mockRecipes } from "@/lib/mock-data";

export default function RecipesPage({
  searchParams,
}: {
  searchParams?: { tag?: string | string[] };
}) {
  const currentTags = Array.isArray(searchParams?.tag)
    ? searchParams.tag
    : typeof searchParams?.tag === "string"
    ? [searchParams.tag]
    : [];

  const filteredRecipes =
    currentTags.length > 0
      ? mockRecipes.filter((recipe) => {
          return currentTags.every((tagToMatch) =>
            recipe.tags.some(
              (recipeTag) =>
                recipeTag.toLowerCase() === tagToMatch.toLowerCase()
            )
          );
        })
      : mockRecipes;

  return (
    <div className="min-h-screen flex flex-col items-center mx-10 pt-20">
      <h1 className="font-heading text-4xl md:text-5xl mt-10 mb-2 text-center">
        BlushBowl Recipes
      </h1>
      <p className="font-sans text-center text-muted-foreground mb-8">
        Discover your next favorite meal.
      </p>
      <RecipeFilters />

      <RecipeGrid recipes={filteredRecipes} />
    </div>
  );
}
