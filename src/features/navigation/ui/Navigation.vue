<script lang="ts" setup>
import { computed } from "vue";
import { NavMenu } from "@/components";
import { useWindowSize } from "@/composables";

const navLinks = [
  { to: "/margarita", label: "Margarita" },
  { to: "/mojito", label: "Mojito" },
  { to: "/a1", label: "A1" },
  { to: "/kir", label: "Kir" },
];

const { width } = useWindowSize();

const menuDirection = computed(() => {
  return width.value < 768 ? "row" : "col";
});
</script>

<template>
  <nav class="side-nav">
    <NavMenu
      :menu-links="navLinks"
      active-link="margarita"
      class="sticky"
      :menu-direction="menuDirection"
    />
  </nav>
</template>

<style lang="scss" scoped>
.side-nav {
  padding: $spacing-xl;
  width: 100%;
  position: relative;

  .sticky {
    position: sticky;
    top: 2rem;
  }

  @include respond-to(md) {
    padding: $spacing-md;
    width: 100%;
    position: fixed;
    background-color: $color-white;
    border-bottom: 1px solid $color-light;
    z-index: 10000;
  }
}
</style>
