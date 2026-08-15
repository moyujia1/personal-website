<template>
  <NuxtLayout>
    <NuxtPage
      :page-key="(route) => route.fullPath"
      :transition="{ name: 'page', mode: 'out-in' }"
    />
  </NuxtLayout>
</template>

<style>
/* 全局样式 */
@import '~/assets/css/tokens.css';
@import '~/assets/css/reset.css';
@import '~/assets/css/typography.css';
@import '~/assets/css/base.css';
@import '~/assets/css/animations.css';

/* 页面过渡 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* 无障碍 skip-link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 1000;
  padding: 8px 16px;
  background: var(--color-accent);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 8px;
}
</style>
