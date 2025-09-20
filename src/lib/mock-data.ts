import type { Recipe } from "./types";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Cozy Tomato Soup",
    image:
      "https://images.pexels.com/photos/14101370/pexels-photo-14101370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A warm and comforting classic, perfect for a chilly evening.",
    cookTime: "30 minutes",
    tags: ["Vegan", "Soup", "Comfort Food"],
  },
  {
    id: 2,
    name: "Crispy Baked Falafel",
    image:
      "https://images.pexels.com/photos/6703565/pexels-photo-6703565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A healthier, oven-baked take on the Mediterranean favorite.",
    cookTime: "45 minutes",
    tags: ["Vegetarian", "Healthy"],
  },
  {
    id: 3,
    name: "Pink Berry Smoothie",
    image:
      "https://images.pexels.com/photos/1392348/pexels-photo-1392348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A vibrant and refreshing smoothie to start your day right.",
    cookTime: "5 minutes",
    tags: ["Breakfast", "Quick"],
  },
];
