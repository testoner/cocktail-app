<script setup lang="ts">
import type { Cocktail } from "@/api";
import { computed, type Component } from "vue";
import { pickValuesByPrefix } from "@/utils";
import { Skeleton, Image, Typography } from "@/components";

const props = defineProps<{ cocktail: Cocktail | null }>();

const ingridients = computed(() => {
  if (!props.cocktail) return [];
  return pickValuesByPrefix(props.cocktail, "strIngredient").filter(Boolean);
});

const measures = computed(() => {
  if (!props.cocktail) return [];
  return pickValuesByPrefix(props.cocktail, "strMeasure").filter(Boolean);
});

function renderOrSkeleton(value: string | undefined | null): Component {
  return value ? Typography : Skeleton;
}
</script>

<template>
  <div class="cocktail-card">
    <div class="text-block">
      <component
        :is="renderOrSkeleton(cocktail?.strDrink)"
        v-bind="
          cocktail?.strDrink
            ? { type: 'h2', text: cocktail?.strDrink }
            : { size: 'md' }
        "
      />

      <div class="col-gap-xs">
        <component
          :is="renderOrSkeleton(cocktail?.strCategory)"
          v-bind="
            cocktail?.strCategory
              ? { type: 'h3', text: cocktail?.strCategory }
              : { size: 'sm' }
          "
        />
        <component
          :is="renderOrSkeleton(cocktail?.strAlcoholic)"
          v-bind="
            cocktail?.strAlcoholic
              ? { type: 'h3', text: cocktail?.strAlcoholic }
              : { size: 'sm' }
          "
        />
        <component
          :is="renderOrSkeleton(cocktail?.strGlass)"
          v-bind="
            cocktail?.strGlass
              ? { type: 'h3', text: cocktail?.strGlass }
              : { size: 'sm' }
          "
        />
      </div>

      <div>
        <Typography type="h3">Instructions:</Typography>
        <component
          :is="renderOrSkeleton(props.cocktail?.strInstructions)"
          v-bind="
            props.cocktail?.strInstructions
              ? { type: 'p', text: props.cocktail?.strInstructions }
              : { size: 'xs' }
          "
        />
      </div>

      <div>
        <Typography type="h3">List of ingredients:</Typography>
        <template v-if="ingridients.length">
          <div v-for="(ing, i) in ingridients" :key="i" class="ingredient-row">
            <div>
              <Typography type="p">{{ ing }}</Typography>
            </div>
            <div>
              <Typography type="p">{{ measures[i] || "" }}</Typography>
            </div>
          </div>
        </template>
        <div v-else class="col-gap-xs">
          <Skeleton v-for="i in 5" :key="i" size="xs" />
        </div>
      </div>
    </div>

    <div class="img-block">
      <Image
        :alt="props.cocktail?.strDrink || ''"
        :src="props.cocktail?.strDrinkThumb || ''"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cocktail-card {
  min-height: 359px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  border: 1px solid $color-light;
  border-radius: 0.5rem;
  overflow: hidden;
  gap: $spacing-xs;

  .text-block {
    padding: $spacing-md;
    display: flex;
    flex-direction: column;
    gap: $spacing-md;

    .ingredient-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: $spacing-xxl;
    }
  }

  @include respond-to(sm) {
    margin: 0 auto;
    max-width: 320px;
    grid-template-columns: 1fr;

    .text-block {
      grid-row: 2;
    }
    .img-block {
      grid-row: 1;
      min-height: 300px;
    }
  }
}
</style>
