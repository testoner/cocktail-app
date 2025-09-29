<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  }>(),
  {
    size: "full",
  },
);
</script>

<template>
  <div class="skeleton" :class="size"></div>
</template>

<style lang="scss" scoped>
.skeleton {
  position: relative;
  width: 100%;
  background-color: $color-light;
  border-radius: 4px;
  animation: pulse 1.2s infinite ease-in-out;
  z-index: 999;

  &.full {
    height: 100%;
  }
  &.xl {
    height: 50%;
  }
  &.lg {
    height: 30%;
  }
  &.md {
    height: 2rem;
  }
  &.sm {
    height: 1.5rem;
  }
  &.xs {
    height: 1rem;
  }
}

@keyframes pulse {
  0% {
    background-color: $color-light;
  }

  50% {
    background-color: $color-white;
  }

  100% {
    background-color: $color-light;
  }
}
</style>
