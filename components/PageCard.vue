<template>
  <div class="page-card" :class="[`page-card--${variant}`]">
    <h2 v-if="title" class="page-card__title">{{ title }}</h2>
    <div class="page-card__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  variant?: 'blue' | 'dark';
}>();
</script>

<style scoped>
.page-card {
  position: relative;
  width: 880px;
  max-width: 90vw;
  padding: var(--space-2xl) var(--space-3xl);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.page-card--blue {
  background: var(--color-card-blue);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.page-card--dark {
  background: var(--color-card-dark);
}

.page-card__title {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--space-xl);
}

.page-card__body {
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

@media (max-width: 767px) {
  .page-card {
    width: 95vw;
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
  }
}
</style>
