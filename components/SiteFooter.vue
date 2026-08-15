<template>
  <footer class="site-footer">
    <p class="site-footer__text">
      &copy; {{ year }} {{ name }}. All rights reserved.
    </p>
    <p class="site-footer__love">我爱Figma</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const name = '阿佳';
</script>

<style scoped>
.site-footer {
  width: 100%;
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  margin-top: auto;
}

.site-footer__text {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.site-footer__love {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  margin-top: var(--space-md);
}
</style>
