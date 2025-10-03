import { mockRecipes } from "@/lib/mock-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchRecipeById } from "@/lib/api";
import type { Metadata } from "next";
import Script from "next/script";
import { CLSInjector } from "@/lib/CLS-injector";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const id = parseInt(params.slug.split("-")[0]);
  if (isNaN(id)) {
    return { title: "Recipe Not Found" };
  }

  const recipe = await fetchRecipeById(id);

  if (!recipe) {
    return { title: "Recipe Not Found" };
  }

  return {
    title: `${recipe.name} | BlushBowl`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.name} | BlushBowl`,
      description: recipe.description,
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: { index: false, follow: false },
  };
}

export default async function IndividualRecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const id = parseInt(params.slug.split("-")[0]);
  if (isNaN(id)) {
    notFound();
  }

  // const recipe = mockRecipes.find(
  //   (recipe) => slugify(recipe.name) === params.slug
  // );

  const recipe = await fetchRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main
      id="page-root"
      className="min-h-dvh font-sans max-w-5xl mx-auto mb-20 flex flex-col pt-4 px-4"
    >
      <Script
        id="demo-tbt"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var start = performance.now();
              while (performance.now() - start < 600) {} // block ~600ms
            })();
          `,
        }}
      />

      <CLSInjector />

      <Breadcrumb className="mt-25 mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/recipe-list">Recipes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{recipe.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="text-center mb-6">
        <div className="flex justify-center gap-2 mb-2">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="font-heading text-4xl md:text-6xl">
          {recipe.name} This is before
        </h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {recipe.description}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative rounded-lg overflow-hidden max-w-xl">
          <img
            src="/unoptimized-brownie-portion.png"
            alt="Fudgy Chocolate Brownies"
            className="w-full mx-auto"
          />
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg flex items-center gap-2">
            <Clock />
            <span>{recipe.cookTime}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
        <div className="md:col-span-1">
          <h2 className="font-heading text-2xl mb-4">Ingredients</h2>
          <ul className="space-y-4">
            {recipe.ingredients.map((ingredient, i) => {
              return (
                <li key={i} className="flex items-center gap-3">
                  <div>
                    <CircleCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>{ingredient}</div>
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
