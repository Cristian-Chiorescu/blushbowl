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
    ingredients: [
      "1 tbsp olive oil",
      "2 onions, chopped",
      "2 cloves garlic, minced",
      "800g canned tomatoes",
      "500ml vegetable broth",
      "1 tsp dried basil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat. Add onions and cook until soft, about 5 minutes.",
      "Stir in the garlic and cook for another minute until fragrant.",
      "Add the canned tomatoes, vegetable broth, and dried basil. Season with salt and pepper.",
      "Bring to a boil, then reduce heat and simmer for at least 20 minutes to allow flavors to meld.",
      "Use an immersion blender to blend the soup until smooth. Alternatively, let it cool slightly and blend in batches in a regular blender.",
      "Serve hot, garnished with fresh basil or a swirl of cream.",
    ],
  },
  {
    id: 2,
    name: "Crispy Baked Falafel",
    image:
      "https://images.pexels.com/photos/6703565/pexels-photo-6703565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A healthier, oven-baked take on the Mediterranean favorite.",
    cookTime: "45 minutes",
    tags: ["Vegetarian", "Healthy"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 3,
    name: "Pink Berry Smoothie",
    image:
      "https://images.pexels.com/photos/1392348/pexels-photo-1392348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A vibrant and refreshing smoothie to start your day right.",
    cookTime: "5 minutes",
    tags: ["Breakfast", "Quick"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 4,
    name: "Creamy Lemon Pasta",
    image:
      "https://images.pexels.com/photos/5737351/pexels-photo-5737351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A bright and zesty pasta dish that comes together in no time.",
    cookTime: "20 minutes",
    tags: ["Pasta", "Quick", "Vegetarian"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 5,
    name: "Fudgy Chocolate Brownies",
    image:
      "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The ultimate rich and decadent chocolate brownies. Pure indulgence.",
    cookTime: "50 minutes",
    tags: ["Dessert", "Baking"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 6,
    name: "Quinoa Avocado Salad",
    image:
      "https://images.pexels.com/photos/5665654/pexels-photo-5665654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A nutrient-packed salad with a zesty lime dressing.",
    cookTime: "25 minutes",
    tags: ["Salad", "Healthy", "Gluten-Free"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 7,
    name: "Fluffy Blueberry Pancakes",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Classic American-style pancakes bursting with blueberries.",
    cookTime: "20 minutes",
    tags: ["Breakfast", "Classic"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 8,
    name: "Spicy Thai Green Curry",
    image:
      "https://images.pexels.com/photos/15280205/pexels-photo-15280205/free-photo-of-thai-green-curry-with-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A fragrant and spicy curry with chicken and fresh vegetables.",
    cookTime: "35 minutes",
    tags: ["Spicy", "Thai", "Curry"],
    ingredients: ["test"],
    instructions: ["test"],
  },
  {
    id: 9,
    name: "Garlic Roasted Asparagus",
    image:
      "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "A simple and elegant side dish that pairs well with anything.",
    cookTime: "15 minutes",
    tags: ["Side Dish", "Quick", "Healthy"],
    ingredients: ["test"],
    instructions: ["test"],
  },
];
