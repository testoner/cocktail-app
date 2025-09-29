import { defineStore } from "pinia";
import { useFetch } from "@/composables";
import { fetchCocktailByCode, type Cocktail } from "@/api";

export const useCocktailStore = defineStore("cocktail", {
  state: () => ({
    cocktailsMap: {} as Record<string, Cocktail[]>,
    loadingMap: {} as Record<string, boolean>,
    errorMap: {} as Record<string, string | null>,
  }),
  actions: {
    async fetchCocktails(code: string) {
      if (this.cocktailsMap[code]) return;

      const { data, error, fetchData } = useFetch<Cocktail[], string>(
        fetchCocktailByCode,
      );
      this.loadingMap[code] = true;
      this.errorMap[code] = null;

      await fetchData(code);

      this.cocktailsMap[code] = data.value || [];
      this.loadingMap[code] = false;
      this.errorMap[code] = error.value;
    },
  },
});
