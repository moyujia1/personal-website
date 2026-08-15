<template>
  <a
    :href="link"
    class="project-card"
    :class="{ 'project-card--no-link': !link }"
    :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined"
  >
    <!-- 缩略图 -->
    <div class="project-card__image">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="project-card__img"
        loading="lazy"
      />
      <div v-else class="project-card__placeholder">
        <span>暂无预览</span>
      </div>
    </div>

    <!-- 信息区 -->
    <div class="project-card__info">
      <h3 class="project-card__title">{{ title }}</h3>
      <span v-if="tag" class="project-card__tag">{{ tag }}</span>
    </div>

    <!-- 年份水印 -->
    <span v-if="year" class="project-card__year">{{ year }}</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  thumbnail?: string;
  tag?: string;
  year?: number | string;
  link?: string;
}>();
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 362px;
  background: var(--color-card-dark);
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.project-card--no-link {
  cursor: default;
}

.project-card:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-card-hover);
}

.project-card__image {
  width: 244px;
  height: 192px;
  margin: var(--space-md) var(--space-md) 0;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
}

.project-card__info {
  padding: var(--space-lg) var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card__title {
  font-family: var(--font-en);
  font-weight: 500;
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  line-height: var(--leading-normal);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  background: var(--color-badge-bg);
  color: var(--color-badge-text);
  border-radius: 40px;
  font-family: var(--font-sans);
  font-size: 13px;
  align-self: flex-start;
  white-space: nowrap;
}

.project-card__year {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-family: var(--font-display);
  font-size: 57px;
  color: rgba(255, 255, 255, 0.09);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

@media (max-width: 767px) {
  .project-card {
    width: 100%;
    height: auto;
    min-height: 320px;
  }

  .project-card__image {
    width: calc(100% - 32px);
    height: auto;
    aspect-ratio: 244 / 192;
  }

  .project-card__year {
    font-size: 40px;
  }
}
</style>
