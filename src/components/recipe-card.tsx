import type { Recipe } from "@/lib/types";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const tagLimit = 1;

  return (
    <Card className="w-full h-full overflow-hidden flex flex-col pt-0 mt-0 pb-2 font-sans shadow-md hover:shadow-2xl hover:-translate-y-2 transition gap-2">
      <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="min hflex flex-col">
        <CardHeader className="px-3">
          <CardTitle className="font-heading mt-2">{recipe.name}</CardTitle>
          {recipe.description && (
            <CardDescription className="text-xs lg:text-sm line-clamp-2">
              {recipe.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardFooter className="grid grid-cols-3 justify-between px-2 mt-1 items-end">
          <div className="flex items-center gap-1 text-sm text-muted-foreground col-span-1">
            <Clock className="w-4 h-4"></Clock>
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex flex-wrap justify-end gap-1 col-span-2">
            {recipe.tags.slice(0, tagLimit).map((tag) => (
              <Badge key={tag} variant="default" className="m-0.5">
                {tag}
              </Badge>
            ))}
            {recipe.tags.length > tagLimit && (
              <Badge variant="secondary" className="m-0.5">
                +{recipe.tags.length - tagLimit}
              </Badge>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
