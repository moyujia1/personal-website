<template>
  <div class="about-cine">
    <!-- 视频背景（低透明度叠加在站点渐变上） -->
    <video
      class="about-cine__video"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        type="video/mp4"
      />
    </video>

    <!-- 内容 -->
    <div class="about-cine__content">
      <h1 class="about-cine__heading animate-fade-rise">
        Where
        <em class="about-cine__muted">dreams</em>
        rise through
        <em class="about-cine__muted">the silence.</em>
      </h1>

      <p class="about-cine__text animate-fade-rise-delay">
        代码与艺术之间，是我在探索的世界。
        一个热爱生活的 CS 女孩 — 用键盘写诗，用镜头叙事，用脚步丈量地球。
        跳舞、弹琴、烘焙、穿搭……把每一天过成自己喜欢的模样。
      </p>

      <NuxtLink
        to="/gallery"
        class="about-cine__btn animate-fade-rise-delay-2"
      >
        Begin Journey
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '关于我 - 阿佳',
  meta: [
    { name: 'description', content: '阿佳 — 一个热爱生活的 CS 女孩。用代码写诗，用镜头叙事。' },
  ],
});
</script>

<style scoped>
.about-cine {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--nav-height));
  overflow: hidden;
}

/* 视频叠加在站点渐变背景上 */
.about-cine__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.25;
  mix-blend-mode: screen;
}

/* 内容层 */
.about-cine__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
  max-width: 820px;
}

.about-cine__heading {
  font-family: var(--font-en);
  font-weight: 500;
  font-size: 42px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

.about-cine__muted {
  font-style: normal;
  color: var(--color-text-secondary);
}

.about-cine__text {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  max-width: 560px;
  margin: var(--space-xl) auto 0;
}

.about-cine__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  padding: 16px 48px;
  border-radius: 9999px;
  margin-top: var(--space-2xl);
  text-decoration: none;
  background: rgba(232, 201, 122, 0.1);
  border: 1px solid rgba(232, 201, 122, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.about-cine__btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    180deg,
    rgba(232, 201, 122, 0.5) 0%,
    rgba(232, 201, 122, 0.15) 30%,
    transparent 60%,
    rgba(232, 201, 122, 0.2) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.about-cine__btn:hover {
  transform: scale(1.04);
  background: rgba(232, 201, 122, 0.18);
  border-color: rgba(232, 201, 122, 0.45);
}

/* 动画 */
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }

/* 响应式 */
@media (min-width: 768px) {
  .about-cine__heading { font-size: 64px; }
  .about-cine__text { font-size: var(--text-lg); }
}

@media (min-width: 1024px) {
  .about-cine__heading { font-size: 80px; }
}
</style>
