import { describe, it, expect } from "vitest";
import { pickValuesByPrefix } from "./index";

describe("pickValuesByPrefix", () => {
  it("return values with prefix at key", () => {
    const obj = {
      strIngredient1: "1",
      strIngredient2: "2",
      strIngredient3: "3",
      strMeasure1: "4",
      name: "5",
    };

    const ingredients = pickValuesByPrefix(obj, "strIngredient");
    expect(ingredients).toEqual(["1", "2", "3"]);

    const measures = pickValuesByPrefix(obj, "strMeasure");
    expect(measures).toEqual(["4"]);
  });

  it("set null to undefined values", () => {
    const obj = {
      strIngredient1: "1",
      strIngredient2: undefined,
      strIngredient3: "3",
    };

    const ingredients = pickValuesByPrefix(obj, "strIngredient");
    expect(ingredients).toEqual(["1", null, "3"]);
  });

  it("return empty array", () => {
    const obj = { name: "name", category: "category" };
    const result = pickValuesByPrefix(obj, "strIngredient");
    expect(result).toEqual([]);
  });
});
