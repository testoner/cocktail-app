<script lang="ts" setup>
import Navigation from "@/features/navigation/ui/Navigation.vue";
</script>

<template>
  <div class="app-wrapper">
    <Navigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;

  main {
    padding: $spacing-xl;
  }

  > * {
    width: 100%;
  }

  @include respond-to(md) {
    grid-template-columns: 1fr;

    main {
      padding: $spacing-3xl $spacing-md $spacing-md;
    }
  }
}
</style>
