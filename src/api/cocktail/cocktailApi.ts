import { api } from "@/api/axios/axiosInstance";

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  [key: `strMeasure${number}`]: string | null;
  [key: `strIngredient${number}`]: string | null;
  [key: string]: string | null;
}

export async function fetchCocktailByCode(code: string): Promise<Cocktail[]> {
  const { data } = await api.get(`/search.php?s=${code}`);
  return data.drinks || [];
}
