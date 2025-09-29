<script lang="ts" setup>
import { watch } from "vue";
import { useCocktailStore } from "@/stores/CocktailStore";
import CocktailCard from "@/features/cocktail/ui/CocktailCard.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const props = defineProps<{
  code: string;
}>();

const store = useCocktailStore();
store.fetchCocktails(props.code);

const { cocktailsMap, loadingMap, errorMap } = storeToRefs(store);

const cocktails = computed(() => cocktailsMap.value[props.code] || []);
const loading = computed(() => loadingMap.value[props.code] || false);
const error = computed(() => errorMap.value[props.code] || null);

watch(
  () => props.code,
  (newCode) => {
    store.fetchCocktails(newCode);
  },
);
</script>

<template>
  <div class="page-wrapper">
    <div v-if="loading" class="loading">
      <CocktailCard :cocktail="null" />
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="cocktails && cocktails.length" class="cocktail-grid">
      <CocktailCard v-for="c in cocktails" :key="c.idDrink" :cocktail="c" />
    </div>
    <div v-else-if="!loading && cocktails?.length === 0">
      Something went wrong ¯\_(ツ)_/¯
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  width: 100%;

  .cocktail-grid {
    display: grid;
    gap: $spacing-xxl;
  }
}
</style>
