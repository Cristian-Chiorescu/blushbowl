import type { Recipe } from "@/lib/types";
import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="w-full h-full overflow-hidden flex flex-col pt-0 pb-2 font-sans shadow-md hover:shadow-2xl transition">
      <div className="relative h-3/4">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <CardHeader className="pl-4">
          <CardTitle className="font-heading">{recipe.name}</CardTitle>
          <CardDescription className="text-xs md:text-sm lg:text-md">
            {recipe.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between px-2 mt-4 items-end">
          <div className="flex w-1/2 items-center text-sm gap-2 text-muted-foreground ">
            <Clock className="w-4 h-4"></Clock>
            <span>{recipe.cookTime.slice(0, -4)}</span>
          </div>
          <div className="w-1/2 text-right">
            {recipe.tags.map((tag) => {
              return (
                <Badge key={tag} variant="default" className="m-0.5">
                  {tag}
                </Badge>
              );
            })}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
