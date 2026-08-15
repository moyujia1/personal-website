<template>
  <div class="blog-page page-content">
    <PageCard title="我的博客" variant="blue">
      <div class="scroll-reveal scroll-reveal--up">
        <p class="blog-text">
          欢迎来到阿佳的博客空间！这里是记录我生活、思考与成长的小天地。
        </p>
        <p class="blog-text">
          📷 我会在这里分享镜头下的美好——无论是深圳街头的烟火气，还是旅途中偶遇的绝美风景。
        </p>
        <p class="blog-text">
          👗 穿搭日记也会不定期更新，把我独树一帜的穿衣风格分享给和我一样热爱时尚的朋友们。
        </p>
        <p class="blog-text">
          📝 坚持写日记是我的习惯——我相信人生永远不能停止记录和感受。
          每一次落笔都是与自己的对话，每一段文字都是时间留下的礼物。
        </p>
        <p class="blog-text">
          🎹 当然，音乐也不能缺席——偶尔会分享我弹奏的钢琴片段和吉他翻弹，用旋律传递心情。
        </p>
      </div>

      <p class="blog-coming scroll-reveal scroll-reveal--scale">
        🚧 博客正在建设中，精彩内容即将呈现，敬请期待！
      </p>
    </PageCard>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal';

useScrollReveal();

useHead({
  title: '博客 - 阿佳',
  meta: [
    { name: 'description', content: '阿佳的博客 — 分享摄影、穿搭、音乐、日记，记录生活中的美好与感悟' },
  ],
});
</script>

<style scoped>
.blog-page {
  justify-content: center;
}

.blog-text {
  text-indent: 2em;
  text-align: justify;
  margin-bottom: var(--space-md);
  line-height: var(--leading-relaxed);
}

.blog-coming {
  text-align: center;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-accent);
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
