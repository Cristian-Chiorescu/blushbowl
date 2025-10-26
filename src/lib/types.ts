export type Recipe = {
  id: number;
  name: string;
  image: string;
  lowResImage: string;
  description: string;
  cookTime: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
};
