<template>
  <component
    :is="tag"
    ref="containerRef"
    class="split-text"
    :class="className"
    :style="{ textAlign }"
    :aria-label="cleanText"
  >
    <template v-for="(line, li) in lines" :key="'line-' + li">
      <span
        v-for="(item, ci) in line"
        :key="'char-' + li + '-' + ci"
        class="split-text__item split-text__char"
        :style="getItemStyle(li, ci)"
        aria-hidden="true"
      >{{ item }}</span>
      <!-- 换行 -->
      <br v-if="li < lines.length - 1" aria-hidden="true" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const props = withDefaults(defineProps<{
  text: string;
  tag?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: Record<string, number>;
  to?: Record<string, number>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
}>(), {
  tag: 'p',
  delay: 50,
  duration: 0.6,
  ease: 'power3.out',
  from: () => ({ opacity: 0, y: 40 }),
  to: () => ({ opacity: 1, y: 0 }),
  threshold: 0.1,
  rootMargin: '-100px',
  textAlign: 'center',
});

const emit = defineEmits<{
  (e: 'animationComplete'): void;
}>();

const containerRef = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);

// 清理后的文本（去除用于换行的字面 \n）
const cleanText = computed(() => props.text.replace(/\\n/g, ''));

// 按 \n 分行的字符数组
const lines = computed(() => {
  const rawLines = props.text.split('\\n');
  return rawLines.map((line) => [...line]);
});

function getItemStyle(_li: number, _ci: number) {
  return {
    opacity: 0,
    transform: `translateY(${props.from.y || 40}px)`,
    display: 'inline-block',
  };
}

// Intersection Observer 触发动画
onMounted(() => {
  if (!containerRef.value || !props.text) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true;
          animateIn();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    }
  );

  observer.observe(containerRef.value);

  onUnmounted(() => observer.disconnect());
});

function animateIn() {
  if (!containerRef.value) return;

  const items = containerRef.value.querySelectorAll('.split-text__char');

  gsap.fromTo(
    items,
    { ...props.from },
    {
      ...props.to,
      duration: props.duration,
      ease: props.ease,
      stagger: props.delay / 1000,
      onComplete: () => {
        emit('animationComplete');
      },
    }
  );
}
</script>

<style scoped>
.split-text {
  overflow: hidden;
  display: inline-block;
  white-space: normal;
  word-wrap: break-word;
}

.split-text__item {
  will-change: transform, opacity;
}

.split-text__char {
  white-space: pre;
}
</style>
