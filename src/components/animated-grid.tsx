import { mockRecipes } from "@/lib/mock-data";
import DecorativeCard from "./decorative-card";

export default function AnimatedGrid() {
  //const duplicatedRecipes = [...mockRecipes];

  return (
    <div className="flex flex-col justify-between h-full py-30 mt-5 overflow-hidden">
      <div className="flex animate-scroll-mobile md:animate-scroll gap-4">
        {mockRecipes.map((recipe, index) => (
          <div
            key={`${recipe.id}-${index}-1`}
            className="h-[12vh] md:h-[15vh] flex-shrink-0"
          >
            <DecorativeCard
              recipe={recipe}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row-reverse animate-scroll-reverse-mobile md:animate-scroll-reverse gap-4">
        {mockRecipes.reverse().map((recipe, index) => (
          <div
            key={`${recipe.id}-${index}-2`}
            className="h-[12vh] md:h-[15vh] flex-shrink-0"
          >
            <DecorativeCard
              recipe={recipe}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
