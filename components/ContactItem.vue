<template>
  <component
    :is="href ? 'a' : 'div'"
    class="contact-item"
    :class="{ 'contact-item--link': href }"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
  >
    <span v-if="icon" class="contact-item__icon" aria-hidden="true">
      <slot name="icon">
        <span class="contact-item__icon-fallback">{{ icon }}</span>
      </slot>
    </span>
    <span class="contact-item__label">{{ label }}</span>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  label: string;
  href?: string;
}>();
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  white-space: nowrap;
}

.contact-item--link {
  cursor: pointer;
  transition: color var(--transition-fast);
}

.contact-item--link:hover {
  color: var(--color-accent);
}

.contact-item__icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-item__icon-fallback {
  font-size: var(--text-base);
}

.contact-item__label {
  line-height: var(--leading-normal);
}
</style>
