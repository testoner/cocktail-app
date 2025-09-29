<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "p";
    text?: string;
    styles?: Record<string, string | number>;
  }>(),
  {
    type: "p",
    text: "",
    styles: () => ({}),
  },
);

const tag = computed(() => props.type || "p");
</script>

<template>
  <component :is="tag" :style="styles">
    <slot>{{ text }}</slot>
  </component>
</template>

<style lang="scss" scoped>
h1 {
  font-size: $font-size-xxl;
  font-weight: bold;
}

h2 {
  font-size: $font-size-xl;
  font-weight: bold;
}

h3 {
  font-size: $font-size-lg;
  font-weight: bold;
}

h4 {
  font-size: $font-size-md;
  font-weight: bold;
}

h5 {
  font-size: $font-size-xs;
  font-weight: bold;
}

h6 {
  font-size: $font-size-xxs;
  font-weight: bold;
}

h7 {
  font-size: $font-size-xxs;
  font-weight: bold;
}

p {
  font-size: $font-size-md;
  font-weight: normal;
  line-height: 1.5;
}
</style>
