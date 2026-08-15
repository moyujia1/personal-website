<template>
  <div class="works-page page-content">
    <!-- 二级导航 -->
    <nav class="works-subnav scroll-reveal scroll-reveal--down" aria-label="作品分类">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="works-subnav__btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </nav>

    <!-- 项目网格 -->
    <div v-if="filteredProjects.length > 0" class="works-grid">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        class="scroll-reveal scroll-reveal--scale"
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <ProjectCard
          :title="project.title"
          :thumbnail="project.thumbnail"
          :tag="project.tag"
          :year="project.year"
          :link="project.link"
        />
        <p class="works-card-desc">{{ project.description }}</p>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else class="works-empty scroll-reveal scroll-reveal--up">
      <p>项目作品正在路上，敬请期待～</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects';
import { useScrollReveal } from '~/composables/useScrollReveal';

useScrollReveal();

useHead({
  title: '作品 - 阿佳',
  meta: [
    { name: 'description', content: '阿佳的原创作品集 — 微信小程序、灵感网站等独立开发项目' },
  ],
});

const activeTab = ref('systematic');

const tabs = [
  { key: 'systematic', label: '系统性的作品集' },
  { key: 'practice', label: '日常的小练习' },
];

const filteredProjects = computed(() =>
  projects.filter((p) => p.category === activeTab.value)
);
</script>

<style scoped>
.works-page {
  padding: var(--space-xl) var(--space-lg);
}

/* 二级导航 */
.works-subnav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  padding: 6px;
  margin-bottom: var(--space-2xl);
  background: var(--color-card-dark);
  border-radius: var(--radius-sm);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.works-subnav__btn {
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-family: var(--font-en);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
  white-space: nowrap;
}

.works-subnav__btn:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.works-subnav__btn.active {
  background: var(--color-card-blue);
  color: var(--color-text-primary);
}

/* 网格 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 276px);
  gap: 24px;
  justify-content: center;
  padding-bottom: var(--space-2xl);
}

.works-card-desc {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-align: center;
  margin-top: var(--space-sm);
  padding: 0 var(--space-xs);
  line-height: var(--leading-relaxed);
}

/* 空状态 */
.works-empty {
  text-align: center;
  padding: var(--space-4xl);
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
}

/* --- 响应式 --- */
@media (max-width: 1023px) {
  .works-grid {
    grid-template-columns: repeat(2, 276px);
  }
}

@media (max-width: 767px) {
  .works-page {
    padding: var(--space-md);
  }

  .works-subnav {
    width: 100%;
    gap: var(--space-sm);
  }

  .works-subnav__btn {
    padding: 10px 12px;
    font-size: var(--text-sm);
  }

  .works-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    justify-items: center;
  }
}
</style>
