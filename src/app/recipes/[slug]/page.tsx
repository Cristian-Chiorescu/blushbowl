import { mockRecipes } from "@/lib/mock-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export default function IndividualRecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = mockRecipes.find(
    (recipe) => slugify(recipe.name) === params.slug
  );

  if (!recipe) {
    notFound();
  }

  return (
    <main className="font-sans max-w-5xl mx-auto p-4 mb-20 md:p-8">
      <div className="text-center mb-6 mt-25">
        <div className="flex justify-center gap-2 mb-4">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="font-heading text-4xl md:text-6xl">{recipe.name}</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {recipe.description}
        </p>
      </div>

      <div className="relative w-full h-64 md:h-120 rounded-lg overflow-hidden mb-8">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg flex items-center gap-2">
          <Clock />
          <span>{recipe.cookTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
        <div className="md:col-span-1">
          <h2 className="font-heading text-2xl mb-4">Ingredients</h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient) => {
              return (
                <li key={ingredient} className="flex items-center gap-3">
                  <CircleCheck className="w-5 h-5 text-primary" />
                  <span>{ingredient}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-heading text-2xl mb-4">Instructions</h2>
          <ol className="space-y-6 list-decimal list-inside marker:text-primary marker:text-xl">
            {recipe.instructions.map((instruction) => {
              return <li key={instruction}>{instruction}</li>;
            })}
          </ol>
        </div>
      </div>
    </main>
  );
}
