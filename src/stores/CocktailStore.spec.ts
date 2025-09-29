import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { ref } from "vue";
import { useCocktailStore } from "./CocktailStore";
import type { Cocktail } from "@/api";

vi.mock("@/composables", () => {
  return {
    useFetch: vi.fn(() => {
      const data = ref<Cocktail[] | null>(null);
      const error = ref<string | null>(null);
      const fetchData = vi.fn(async () => {
        data.value = [
          {
            idDrink: "1",
            strDrink: "Margarita",
            strDrinkThumb: "",
            strInstructions: "",
            strCategory: "",
            strAlcoholic: "",
            strGlass: "",
          },
        ];
      });
      return { data, error, fetchData };
    }),
  };
});

describe("useCocktailStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("fetch margarita cocktail", async () => {
    const store = useCocktailStore();
    await store.fetchCocktails("margarita");

    expect(store.cocktailsMap["margarita"]).toHaveLength(1);
    expect(store.loadingMap["margarita"]).toBe(false);
    expect(store.errorMap["margarita"]).toBeNull();
  });

  it("check cache at repeat fetch", async () => {
    const store = useCocktailStore();
    store.cocktailsMap["margarita"] = [
      {
        idDrink: "1",
        strDrink: "Margarita",
        strDrinkThumb: "",
        strInstructions: "",
        strCategory: "",
        strAlcoholic: "",
        strGlass: "",
      },
    ];

    await store.fetchCocktails("margarita");

    const { useFetch } = await import("@/composables");
    expect(useFetch).not.toHaveBeenCalled();
  });
});
