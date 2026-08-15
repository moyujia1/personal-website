/**
 * 滚动触发动效 — Intersection Observer
 * 用于元素进入视口时触发 CSS 动画
 */
export function useScrollReveal() {
  if (import.meta.server) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // 可选：只触发一次
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  onMounted(() => {
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });
}

/**
 * 交错延迟 — 为列表项自动分配动画延迟
 */
export function useStaggerDelay(selector: string, baseDelay = 0.1) {
  onMounted(() => {
    const items = document.querySelectorAll(selector);
    items.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${baseDelay * i}s`;
    });
  });
}
