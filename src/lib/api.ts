import { z } from "zod";
import { mockRecipes } from "./mock-data";
import type { Recipe } from "./types";
import { truncate } from "./utils";
import { useApiStatusStore } from "@/stores/apiStatusStore";

const recipeSummarySchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string().url(),
});
const recipeSearchResponseSchema = z.object({
  results: z.array(recipeSummarySchema),
});
const extendedIngredientSchema = z.object({ original: z.string() });
const instructionStepSchema = z.object({ step: z.string() });
const detailedRecipeSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string().url(),
  summary: z.string(),
  extendedIngredients: z.array(extendedIngredientSchema),
  analyzedInstructions: z.array(
    z.object({ steps: z.array(instructionStepSchema) })
  ),
  readyInMinutes: z.number(),
  diets: z.array(z.string()).optional(),
});

function mapApiSummaryToRecipe(
  apiRecipe: z.infer<typeof recipeSummarySchema>
): Recipe {
  return {
    id: apiRecipe.id,
    name: apiRecipe.title,
    image: apiRecipe.image,
    description: "",
    cookTime: "",
    tags: [],
    ingredients: [],
    instructions: [],
  };
}

function mapApiDetailToRecipe(
  apiRecipe: z.infer<typeof detailedRecipeSchema>
): Recipe {
  return {
    id: apiRecipe.id,
    name: apiRecipe.title,
    image: apiRecipe.image,
    description: truncate(apiRecipe.summary.replace(/<.*?>/g, ""), 40),
    cookTime: `${apiRecipe.readyInMinutes} minutes`,
    tags: apiRecipe.diets || [],
    ingredients: apiRecipe.extendedIngredients.map((ing) => ing.original),
    instructions:
      apiRecipe.analyzedInstructions[0]?.steps.map((s) => s.step) || [],
  };
}

export async function fetchRecipes(
  tags: string[],
  query: string
): Promise<Recipe[]> {
  const setStatus = useApiStatusStore.getState().setStatus;

  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) {
    console.warn("API key missing, falling back to mock data.");
    setStatus("mock");
    return mockRecipes;
  }

  const params = new URLSearchParams({
    apiKey: apiKey,
    query: query,
    diet: tags.join(","),
    number: "13",
  });
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`
    );
    if (!response.ok)
      throw new Error(`API responded with status: ${response.status}`);
    const data = await response.json();
    const validatedData = recipeSearchResponseSchema.parse(data);
    setStatus("live");
    return validatedData.results.map(mapApiSummaryToRecipe);
  } catch (error) {
    console.error("Spoonacular API error, falling back to mock data:", error);
    setStatus("mock");
    return mockRecipes;
  }
}

export async function fetchRecipeById(id: number): Promise<Recipe> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) {
    console.warn("API key missing, falling back to mock data.");
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    const validatedData = detailedRecipeSchema.parse(data);
    return mapApiDetailToRecipe(validatedData);
  } catch (error) {
    console.error("Spoonacular API error, falling back to mock data:", error);
    const mockRecipe = mockRecipes.find((r) => r.id === id);
    if (!mockRecipe) throw new Error("Recipe not found in mock data");
    return mockRecipe;
  }
}
