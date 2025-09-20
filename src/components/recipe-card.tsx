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

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <Image
        src={`${recipe.image}`}
        alt={`${recipe.name}`}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      ></Image>
      <CardHeader>
        <CardTitle>{`${recipe.name}`}</CardTitle>
        <CardDescription>{`${recipe.description}`}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div>{`${recipe.cookTime}`}</div>
        <div className="flex gap-2 pl-4">
          {recipe.tags.map((tag) => {
            return (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
