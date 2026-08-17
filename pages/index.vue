<template>
  <div class="home-page">
    <!-- 超大水印文字 -->
    <h1 class="home-watermark anim-watermark-breathe" aria-hidden="true">A JIA</h1>

    <!-- 头像区域 -->
    <div class="home-illustration">
      <div class="home-avatar anim-pulse-glow">
        <img
          :key="avatarKey"
          :src="avatarImg"
          alt="阿佳的头像"
          class="home-avatar__img"
          @load="onAvatarLoad"
          @error="onAvatarError"
        />
      </div>
    </div>

    <!-- 文字内容 -->
    <div class="home-content">
      <!-- SplitText 动画标题 -->
      <SplitText
        tag="h2"
        :text="'你好👋，\\n我是阿佳'"
        class="home-greeting"
        :delay="60"
        :duration="0.7"
        ease="power4.out"
        split-type="chars"
        :from="{ opacity: 0, y: 50 }"
        :to="{ opacity: 1, y: 0 }"
        text-align="left"
      />

      <p class="home-subtitle text-en-muted scroll-reveal scroll-reveal--up">
        Welcome to my world
      </p>

      <div class="home-description body-text-lg">
        <p class="scroll-reveal scroll-reveal--up anim-delay-1">
          🎓 大三在读 / 计算机科学与技术 / 坐标广东深圳
        </p>
        <p class="scroll-reveal scroll-reveal--up anim-delay-2">
          🎹 热爱音乐 — 跳舞、弹钢琴、弹吉他是生活中不可或缺的旋律
        </p>
        <p class="scroll-reveal scroll-reveal--up anim-delay-3">
          📷 热衷拍照，痴迷穿搭 — 记录自然风光也记录自己，拥有独树一帜的穿衣风格
        </p>
        <p class="scroll-reveal scroll-reveal--up anim-delay-4">
          🧁 喜欢尝试做各种小甜品，治愈自己也治愈身边的人
        </p>
        <p class="scroll-reveal scroll-reveal--up anim-delay-5">
          🌍 梦想环游世界，正在自学法语 🇫🇷 和韩语 🇰🇷
        </p>
      </div>

      <!-- 标签 -->
      <div class="home-tags scroll-reveal scroll-reveal--scale">
        <span class="home-tag">🎬 电影迷</span>
        <span class="home-tag">📝 日记达人</span>
        <span class="home-tag">📚 阅读爱好者</span>
        <span class="home-tag">🐶 ENFP 快乐小狗</span>
      </div>

      <p class="home-motto scroll-reveal scroll-reveal--up">
        ✨ 人生永远不能停止记录和感受 ✨
      </p>

      <!-- SpecularButton -->
      <div class="home-cta scroll-reveal scroll-reveal--up">
        <SpecularButton
          size="lg"
          :radius="16"
          tint="#1f2551"
          :tint-opacity="0.3"
          :blur="8"
          text-color="#f0e6d3"
          line-color="#e8c97a"
          base-color="#3a3560"
          :intensity="1.2"
          :shine-size="12"
          :shine-fade="35"
          :thickness="1.2"
          :speed="0.4"
          :follow-mouse="true"
          :proximity="300"
          @click="navigateTo('/gallery')"
        >
          Learn about me more
        </SpecularButton>
      </div>
    </div>
  </div>

  <!-- 往下滑进入「阿佳的星空之旅」 -->
  <CinemaScroll />
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal';
import avatarImg from '~/assets/img/avatar.jpg';

useScrollReveal();

const avatarKey = ref(Date.now());
const avatarLoaded = ref(false);

function onAvatarLoad() {
  avatarLoaded.value = true;
}

function onAvatarError(e: Event) {
  avatarLoaded.value = false;
  console.warn('头像图片加载失败:', (e.target as HTMLImageElement).src);
}

useHead({
  title: '阿佳 - 个人主页',
  meta: [
    { name: 'description', content: '阿佳的个人网站 — CS专业大三学生，爱跳舞、钢琴、吉他、拍照、穿搭，梦想环游世界，ENFP快乐小狗！' },
  ],
});
</script>

<style scoped>
.home-page {
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--space-3xl) var(--space-3xl);
  overflow: hidden;
}

/* 水印 */
.home-watermark {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-en);
  font-weight: 900;
  font-size: var(--text-watermark);
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  letter-spacing: -13.68px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  opacity: 0.15;
}

/* 头像 */
.home-illustration {
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.home-avatar {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(232, 201, 122, 0.08);
}

.home-avatar__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.home-avatar:hover .home-avatar__img {
  transform: scale(1.08);
}

/* 文字内容 */
.home-content {
  position: relative;
  z-index: 2;
  max-width: 620px;
}

.home-greeting {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-3xl);
  color: var(--color-text-primary);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-sm);
}

.home-subtitle {
  margin-bottom: var(--space-lg);
}

.home-description {
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.home-description p {
  margin-bottom: 6px;
}

/* 人格标签 */
.home-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.home-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--color-text-primary);
  transition: all var(--transition-normal);
  backdrop-filter: blur(4px);
}

.home-tag:hover {
  background: rgba(255, 98, 98, 0.15);
  border-color: rgba(255, 98, 98, 0.3);
  transform: translateY(-2px);
}

/* 核心宣言 */
.home-motto {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.home-cta {
  margin-top: var(--space-lg);
}

/* --- 响应式 --- */
@media (max-width: 1023px) {
  .home-page {
    padding: var(--space-xl);
    align-items: center;
    text-align: center;
  }

  .home-watermark {
    font-size: 20vw;
    letter-spacing: -3px;
    top: 20px;
  }

  .home-illustration {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-bottom: var(--space-lg);
  }

  .home-avatar {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    animation: none;
  }

  .home-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-greeting {
    font-size: var(--text-2xl);
  }

  .home-tags {
    justify-content: center;
  }

  .home-motto {
    font-size: var(--text-base);
  }
}
</style>
