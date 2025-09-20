import RecipeCard from "@/components/recipe-card";
import { mockRecipes } from "@/lib/mock-data";

export default function RecipePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
