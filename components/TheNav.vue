<template>
  <nav class="the-nav" role="navigation" aria-label="主导航">
    <!-- Logo -->
    <NuxtLink to="/" class="nav-logo" aria-label="回到首页">
      <div class="logo-icon">
        <span class="logo-text">AJ</span>
      </div>
    </NuxtLink>

    <!-- 导航链接 -->
    <ul class="nav-links">
      <li v-for="(item, index) in navItems" :key="item.path" class="nav-item">
        <span v-if="index > 0" class="nav-separator" aria-hidden="true">/</span>
        <NuxtLink
          :to="item.path"
          class="nav-link"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- 下载按钮 -->
    <a
      class="nav-download"
      :href="resumeUrl"
      download
      aria-label="下载简历与作品集"
    >
      <svg class="download-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.1)"/>
        <path d="M16 20V12M16 20L12 16M16 20L20 16M10 24H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="download-text">下载简历与作品集</span>
    </a>

    <!-- 汉堡菜单按钮 (手机端) -->
    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-label="菜单"
      aria-controls="mobile-menu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- 手机端菜单 -->
    <Teleport to="body">
      <Transition name="menu-slide">
        <div v-if="menuOpen" id="mobile-menu" class="mobile-menu" role="menu">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            :class="{ active: isActive(item.path) }"
            @click="closeMenu"
            role="menuitem"
          >
            {{ item.label }}
          </NuxtLink>
          <a
            class="mobile-download"
            :href="resumeUrl"
            download
            @click="closeMenu"
          >
            下载简历与作品集
          </a>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const resumeUrl = `${useRuntimeConfig().app.baseURL}resume.pdf`;

const menuOpen = ref(false);

const navItems = [
  { label: '首页', path: '/' },
  { label: '作品', path: '/works' },
  { label: '博客', path: '/blog' },
  { label: '关于我', path: '/about' },
];

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  menuOpen.value = false;
  document.body.style.overflow = '';
}

// 路由切换时关闭菜单
watch(() => route.path, () => {
  closeMenu();
});
</script>

<style scoped>
.the-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: var(--nav-height);
  padding: 0 var(--space-3xl);
  background: transparent;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: auto;
}

.logo-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-card-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-text {
  font-family: var(--font-en);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 1px;
}

/* 导航链接 */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  padding: var(--space-sm) 4px;
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link.active {
  color: var(--color-accent);
}

.nav-separator {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  margin: 0 19px;
  user-select: none;
}

/* 下载按钮 */
.nav-download {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-left: auto;
  padding: 6px 10px;
  background: var(--color-btn-bg);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
}

.nav-download:hover {
  background: var(--color-btn-hover);
}

.download-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.download-text {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* 汉堡菜单 */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  z-index: 200;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 1px;
  transition: transform var(--transition-normal), opacity var(--transition-fast);
}

.hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 手机菜单 */
.mobile-menu {
  display: none;
}

/* --- 响应式 --- */
@media (max-width: 1023px) {
  .the-nav {
    padding: 0 var(--space-lg);
    height: var(--nav-height-mobile);
  }

  .nav-links,
  .nav-download {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--color-bg-start);
    z-index: 150;
    padding-top: calc(var(--nav-height-mobile) + var(--space-2xl));
    padding-left: var(--space-xl);
    gap: var(--space-lg);
  }

  .mobile-nav-link {
    font-family: var(--font-sans);
    font-size: var(--text-xl);
    font-weight: 500;
    color: var(--color-text-primary);
    transition: color var(--transition-fast);
  }

  .mobile-nav-link.active {
    color: var(--color-accent);
  }

  .mobile-download {
    margin-top: var(--space-lg);
    display: inline-flex;
    align-items: center;
    padding: 10px 16px;
    background: var(--color-btn-bg);
    border-radius: var(--radius-sm);
    font-family: var(--font-sans);
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: underline;
    align-self: flex-start;
  }
}

/* 过渡动画 */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity var(--transition-normal);
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
}
</style>
