<template>
  <div class="app-wrapper">
    <a href="#main-content" class="skip-link">跳转到主要内容</a>
    <TheNav />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
