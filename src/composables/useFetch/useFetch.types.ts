import type { Ref, UnwrapRef } from "vue";

export interface UseFetchReturn<T, P = void> {
  data: Ref<UnwrapRef<T> | null>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  fetchData: (param: P) => Promise<void>;
}
