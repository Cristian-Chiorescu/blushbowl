import RecipeFilters from "@/components/recipe-filters";
import RecipeGrid from "@/components/recipe-grid";
import { mockRecipes } from "@/lib/mock-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="font-sans min-h-screen flex flex-col items-center pt-4 px-4">
      <div className="max-w-5xl w-full">
        <Breadcrumb className="mt-25 mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recipes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="font-heading text-4xl md:text-5xl mt-2 mb-2 text-center">
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
