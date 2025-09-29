<script lang="ts" setup>
import { ref } from "vue";
import Skeleton from "../skeleton/Skeleton.vue";

const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    lazy?: boolean;
    wrapperStyles?: Record<string, string | number>;
    imageStyles?: Record<string, string | number>;
  }>(),
  {
    lazy: true,
    alt: "",
    wrapperStyles: () => ({}),
    imageStyles: () => ({}),
  },
);

const loaded = ref(false);
const error = ref(false);

function onLoad(): void {
  loaded.value = true;
}

function onError(): void {
  if (!props.src) return;
  error.value = true;
  loaded.value = false;
}
</script>

<template>
  <div class="image-wrapper" :style="wrapperStyles">
    <Skeleton v-if="lazy && !loaded && !error" />
    <img
      v-if="!error"
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :style="imageStyles"
      class="image"
      @load="onLoad"
      @error="onError"
    />
    <div v-if="error" class="fallback">
      <slot name="fallback">Image not found</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-light;
    width: 100%;
    height: 100%;
    color: $color-gray;
    font-size: $font-size-md;
    text-align: center;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}
</style>
