import { describe, it, expect, vi } from "vitest";
import { nextTick } from "vue";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
  it("succes fetch data", async () => {
    const mockApi = vi.fn().mockResolvedValue({ name: "Margarita" });
    const { data, loading, error, fetchData } = useFetch(mockApi);

    expect(loading.value).toBe(false);
    expect(data.value).toBeNull();
    expect(error.value).toBeNull();

    const promise = fetchData(undefined);
    expect(loading.value).toBe(true);

    await promise;
    await nextTick();

    expect(data.value).toEqual({ name: "Margarita" });
    expect(error.value).toBeNull();
    expect(loading.value).toBe(false);
  });

  it("fetch error", async () => {
    const mockApi = vi.fn().mockRejectedValue(new Error("Error"));
    const { data, loading, error, fetchData } = useFetch(mockApi);

    await fetchData(undefined);
    await nextTick();

    expect(data.value).toBeNull();
    expect(error.value).toBe("Error");
    expect(loading.value).toBe(false);
  });
});
