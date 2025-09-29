import { ref, type Ref, type UnwrapRef } from "vue";
import type { UseFetchReturn } from "./useFetch.types";

export function useFetch<T, P = void>(
  apiCall: (param: P) => Promise<T>,
): UseFetchReturn<T, P> {
  const data: Ref<UnwrapRef<T> | null> = ref(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async (param: P): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const result = await apiCall(param);
      data.value = result as UnwrapRef<T>;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = String(err);
      }
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData };
}
