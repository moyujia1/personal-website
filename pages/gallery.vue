<template>
  <div class="gallery-page page-content">
    <!-- 标题 -->
    <div class="gallery-header scroll-reveal scroll-reveal--up">
      <h1 class="gallery-title">关于我</h1>
      <p class="gallery-subtitle">用镜头记录生活的每一帧</p>
    </div>

    <!-- 照片瀑布流 -->
    <div class="gallery-grid">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="gallery-item scroll-reveal scroll-reveal--scale"
        :style="{ transitionDelay: `${(i % 3) * 0.1}s` }"
      >
        <div class="gallery-card">
          <div class="gallery-card__placeholder">
            <span class="gallery-card__emoji">{{ photo.emoji }}</span>
            <span class="gallery-card__label">{{ photo.label }}</span>
          </div>
        </div>
      </div>

      <!-- 添加照片提示 -->
      <div class="gallery-item gallery-item--add scroll-reveal scroll-reveal--scale">
        <div class="gallery-card gallery-card--dashed">
          <span class="gallery-card__plus">+</span>
          <span class="gallery-card__hint">放入你的照片</span>
        </div>
      </div>
    </div>

    <!-- 底部个人信息卡 -->
    <div class="gallery-bio scroll-reveal scroll-reveal--up">
      <div class="gallery-bio__inner">
        <p class="gallery-bio__text">
          🎓 CS 大三 · 📍 深圳 · 🐶 ENFP
        </p>
        <p class="gallery-bio__text">
          跳舞 💃 · 钢琴 🎹 · 吉他 🎸 · 烘焙 🧁
        </p>
        <p class="gallery-bio__text">
          法语 🇫🇷 · 韩语 🇰🇷 · 摄影 📷 · 穿搭 👗
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal';

useScrollReveal();

useHead({
  title: '关于我 - 阿佳',
  meta: [
    { name: 'description', content: '了解更多关于阿佳 — 用镜头记录生活，分享穿搭与日常' },
  ],
});

const photos = [
  { emoji: '📷', label: '摄影作品' },
  { emoji: '👗', label: '穿搭日常' },
  { emoji: '🎹', label: '钢琴时光' },
  { emoji: '🧁', label: '烘焙作品' },
  { emoji: '🌅', label: '旅行风景' },
  { emoji: '🎸', label: '吉他练习' },
  { emoji: '📝', label: '日记片段' },
  { emoji: '☕', label: '生活碎片' },
];
</script>

<style scoped>
.gallery-page {
  padding: var(--space-2xl) var(--space-3xl);
}

/* 标题 */
.gallery-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.gallery-title {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-3xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.gallery-subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
}

/* 照片网格 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto var(--space-2xl);
}

.gallery-card {
  aspect-ratio: 3 / 4;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  transition: all var(--transition-normal);
  overflow: hidden;
}

.gallery-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.gallery-card__emoji {
  font-size: 48px;
  opacity: 0.6;
}

.gallery-card__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* 添加照片 */
.gallery-card--dashed {
  border-style: dashed;
}

.gallery-card__plus {
  font-size: 40px;
  color: var(--color-text-secondary);
  opacity: 0.4;
  font-weight: 300;
}

.gallery-card__hint {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  opacity: 0.4;
}

/* 个人信息卡 */
.gallery-bio {
  max-width: 600px;
  margin: 0 auto;
}

.gallery-bio__inner {
  text-align: center;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.gallery-bio__text {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: 4px;
}

/* --- 响应式 --- */
@media (max-width: 767px) {
  .gallery-page {
    padding: var(--space-lg) var(--space-md);
  }

  .gallery-title {
    font-size: var(--text-2xl);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .gallery-card__emoji {
    font-size: 32px;
  }
}
</style>
