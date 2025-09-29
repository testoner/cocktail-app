import { describe, it, expect } from "vitest";
import { useWindowSize } from "./useWindowSize";

describe("useWindowSize", () => {
  it("check initialization of window", () => {
    window.innerWidth = 800;
    window.innerHeight = 600;

    const { width, height } = useWindowSize();

    expect(width.value).toBe(800);
    expect(height.value).toBe(600);
  });
});
