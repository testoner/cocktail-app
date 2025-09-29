import { type Ref, ref, onMounted, onBeforeUnmount } from "vue";

export function useWindowSize(): { width: Ref<number>; height: Ref<number> } {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const onResize = (): void => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => window.addEventListener("resize", onResize));
  onBeforeUnmount(() => window.removeEventListener("resize", onResize));

  return { width, height };
}
