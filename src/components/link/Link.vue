<script lang="ts" setup>
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    text: string;
    to: string;
    type?: "button" | "nav" | "default";
  }>(),
  {
    type: "default",
  },
);

const isApplyActiveClass = computed((): undefined | string => {
  return ["nav"].includes(props.type) ? "is-active" : undefined;
});
</script>

<template>
  <RouterLink :to="to" :class="type" :active-class="isApplyActiveClass">
    {{ text }}
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  padding: 5px 10px;
  font-size: $font-size-xxl;
  color: $color-black;

  &:hover {
    color: $color-gray;
  }

  &.nav {
    text-decoration: none;
    border-radius: 12px;

    &.is-active {
      background-color: $color-light;
    }
  }

  &.button {
    text-decoration: none;
    border-radius: 12px;
    background-color: $color-light;
  }

  @include respond-to(md) {
    font-size: $font-size-xl;
  }
}
</style>
