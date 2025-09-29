<script lang="ts" setup>
import Link from "../link/Link.vue";
import type { NavItem } from "./NavMenu.types";

withDefaults(
  defineProps<{
    menuLinks: NavItem[];
    menuDirection?: "row" | "col";
  }>(),
  {
    menuDirection: "col",
  },
);
</script>

<template>
  <ul class="nav-menu" :class="menuDirection">
    <li v-for="link in menuLinks" :key="link.to">
      <Link :to="link.to" :text="link.label" type="nav" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  gap: $spacing-md;

  &.row {
    flex-direction: row;
  }

  &.col {
    flex-direction: column;
  }

  li {
    list-style: none;
  }
}
</style>
