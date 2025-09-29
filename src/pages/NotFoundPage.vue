<script lang="ts" setup>
import { Link, Typography } from "@/components";
</script>

<template>
  <div class="not-found-wrapper">
    <Typography type="h2">404 Page Not Found</Typography>
    <Link to="/" text="Back Home" type="button" />
  </div>
</template>

<style lang="scss" scoped>
.not-found-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: $spacing-md;
  font-size: $font-size-xxl;
}
</style>
