import type { Recipe } from "@/lib/types";
import { Card } from "./ui/card";
import Image from "next/image";

export default function DecorativeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="relative w-full h-full overflow-hidden aspect-[6/4]">
      <Image
        src={recipe.lowResImage}
        alt={recipe.name}
        fill
        className="object-cover"
      ></Image>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 font-heading text-md md:text-lg text-white">
        {recipe.name}
      </h3>
    </Card>
  );
}
