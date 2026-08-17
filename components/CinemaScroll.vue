<template>
  <section ref="section" class="cinema-scroll" aria-label="阿佳的星空之旅">
    <div class="stage">
      <div class="world">
        <!-- 1. 深空星野 -->
        <div class="scene-img sky-img" aria-hidden="true">
          <canvas ref="starsCanvas" class="starfield"></canvas>
        </div>

        <!-- 2. 星云光带 + 行星 + 爱好卡片（背面栈） -->
        <div class="back-stack">
          <div class="scene-img back-img back-four" aria-hidden="true"></div>

          <section class="sights-slider" aria-label="阿佳的爱好卡片">
            <div ref="track" class="sights-track">
              <article
                v-for="(card, i) in trackCards"
                :key="i"
                class="sight-card"
                tabindex="0"
                role="button"
                :aria-label="card.title"
                @click="selectSightCard(i)"
                @keydown="onCardKeydown(i, $event)"
              >
                <span class="sight-kicker">{{ card.kicker }}</span>
                <span class="sight-pin" aria-hidden="true">{{ card.pin }}</span>
                <h3>{{ card.title }}</h3>
                <p>{{ card.desc }}</p>
              </article>
            </div>
          </section>

          <div class="scene-img back-img back-bazaar" aria-hidden="true">
            <svg viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="cj-planet" cx="34%" cy="30%" r="80%">
                  <stop offset="0%" stop-color="#f4d9a0" />
                  <stop offset="45%" stop-color="#9a7bc8" />
                  <stop offset="100%" stop-color="#241d52" />
                </radialGradient>
              </defs>
              <ellipse cx="350" cy="386" rx="300" ry="88" fill="none" stroke="rgba(232,201,122,0.5)" stroke-width="22" transform="rotate(-16 350 386)" />
              <circle cx="350" cy="350" r="185" fill="url(#cj-planet)" />
              <path d="M96 318 A 300 88 -16 0 1 604 318" fill="none" stroke="rgba(232,201,122,0.66)" stroke-width="22" transform="rotate(-16 350 386)" />
            </svg>
          </div>
        </div>

        <!-- 3. 轮播控制 -->
        <div ref="controls" class="sights-controls" aria-label="卡片切换">
          <button ref="prevBtn" class="sight-nav sight-prev" aria-label="上一张" @click="moveSightSlider(-1)">←</button>
          <button ref="nextBtn" class="sight-nav sight-next" aria-label="下一张" @click="moveSightSlider(1)">→</button>
        </div>

        <!-- 4. 主标题 -->
        <h1 class="hero-title">A&nbsp;JIA</h1>

        <!-- 5. 银河近景（分屏背后浮现） -->
        <div class="scene-img frame-two-img" aria-hidden="true">
          <div class="galaxy"></div>
        </div>

        <!-- 6. 山脊剪影（分屏，向两侧裂开） -->
        <div class="scene-img splitframe-img splitframe-left" aria-hidden="true">
          <svg viewBox="0 0 960 560" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,560 L0,320 L130,180 L260,350 L420,120 L480,200 L480,560 Z" fill="#05070e" />
          </svg>
        </div>
        <div class="scene-img splitframe-img splitframe-right" aria-hidden="true">
          <svg viewBox="0 0 960 560" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M480,200 L620,130 L780,360 L900,190 L960,330 L960,560 L480,560 Z" fill="#05070e" />
          </svg>
        </div>

        <!-- 7. 前景悬崖（起飞时向上冲出） -->
        <div class="scene-img bridge-img" aria-hidden="true">
          <svg viewBox="0 0 1440 360" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,360 L0,240 L120,180 L260,260 L420,140 L600,260 L780,150 L980,270 L1180,170 L1340,250 L1440,210 L1440,360 Z" fill="#04060c" />
            <path d="M0,360 L0,300 L160,270 L340,320 L560,250 L800,330 L1040,260 L1280,320 L1440,280 L1440,360 Z" fill="#02030a" opacity="0.85" />
          </svg>
        </div>

        <!-- 8. 色罩 -->
        <div class="shade"></div>
      </div>

      <!-- 文字层：开场白 -->
      <section class="intro-copy" aria-label="阿佳的自我介绍">
        <p>代码、音乐，与一场环游世界的梦——都在同一片星空下。</p>
        <div class="hero-tags" aria-label="阿佳的关键词">
          <span>音乐与代码</span>
          <span>环游世界</span>
          <span>ENFP 快乐小狗</span>
        </div>
      </section>

      <!-- 文字层：第一章 -->
      <section class="story-panel story-panel-bridge" aria-label="音乐与代码">
        <h2>音乐与代码，是我的双星轨道。</h2>
        <p>一个在键盘上写代码、在琴键上弹旋律的女孩。跳舞、钢琴、吉他，是我生活里不可或缺的坐标。</p>
        <dl class="facts">
          <div><dt>代码</dt><dd>计算机科学与技术 · 大三在读</dd></div>
          <div><dt>音乐</dt><dd>跳舞 · 钢琴 · 吉他</dd></div>
        </dl>
      </section>

      <!-- 文字层：第二章 -->
      <section class="story-panel story-panel-bazaar" aria-label="环游世界">
        <h2>梦想环游世界。</h2>
        <p>想走遍地球的每个角落，正在自学法语 🇫🇷 和韩语 🇰🇷，用镜头和穿搭记录每一帧风景。</p>
        <button class="note-button">
          <span aria-hidden="true">↗</span>
          <span>开启环游世界计划</span>
        </button>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
/* ============================================================
   阿佳的星空之旅 —— 滚动驱动电影化卷轴
   技术要点：sticky 吸附 + 滚动距离驱动 CSS 变量 + 无缝轮播
   ============================================================ */

interface Sight {
  kicker: string;
  title: string;
  desc: string;
  pin: string;
}

// 5 张爱好卡片（内容取自阿佳的个人介绍）
const sights: Sight[] = [
  { kicker: '舞动', title: '跳舞', desc: '跟随节奏，用身体说话，是我最放松的快乐。', pin: '💃' },
  { kicker: '旋律', title: '钢琴', desc: '黑白键之间，藏着我的情绪与夜晚。', pin: '🎹' },
  { kicker: '和弦', title: '吉他', desc: '抱着吉他哼唱，是最治愈的独处时光。', pin: '🎸' },
  { kicker: '镜头', title: '拍照', desc: '记录自然风光，也记录每一个当下的自己。', pin: '📷' },
  { kicker: '风格', title: '穿搭', desc: '独一无二的穿衣风格，是我表达自己的方式。', pin: '👗' },
];
const originalCount = sights.length;
// 三组克隆实现无缝循环
const trackCards = computed(() => [...sights, ...sights, ...sights]);

const section = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);
const controls = ref<HTMLElement | null>(null);
const starsCanvas = ref<HTMLCanvasElement | null>(null);

let targetMouseX = 0;
let targetMouseY = 0;
let mouseX = 0;
let mouseY = 0;
let targetScroll = 0;
let smoothScroll = 0;
let initialized = false;
let rafPending = false;
let rafId = 0;
let activeSight = originalCount;
let reduceMotion: MediaQueryList | null = null;

/* ---------- 数学工具 ---------- */
const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smoothstep = (e0: number, e1: number, v: number) => {
  const x = clamp((v - e0) / (e1 - e0));
  return x * x * (3 - 2 * x);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function segmentInOut(s: number, a: number, b: number, c: number, d: number) {
  const enter = smoothstep(a, b, s);
  const exit = smoothstep(c, d, s);
  return { enter, exit, active: enter * (1 - exit) };
}

function getScrollDistance() {
  if (!section.value) return 0;
  return clamp(
    -section.value.getBoundingClientRect().top,
    0,
    section.value.offsetHeight - window.innerHeight
  );
}

function setVar(name: string, value: string | number) {
  section.value?.style.setProperty(name, String(value));
}

/* ---------- 星野画布（程序化生成星星） ---------- */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drawStars() {
  const canvas = starsCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (w === 0 || h === 0) return;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  const rand = mulberry32(20260817);
  const count = Math.round((w * h) / 2600);
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = rand() * 1.35 + 0.2;
    const a = rand() * 0.65 + 0.18;
    const warm = rand() < 0.16;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = warm ? `rgba(232,201,122,${a})` : `rgba(255,255,255,${a})`;
    ctx.fill();
  }
}

/* ---------- 滚动引擎 ---------- */
function update() {
  rafPending = false;
  if (!section.value) return;
  const rm = reduceMotion?.matches ?? false;

  targetScroll = getScrollDistance();
  if (!initialized || rm) {
    smoothScroll = targetScroll;
    initialized = true;
  } else {
    smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
  }
  if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

  mouseX = lerp(mouseX, targetMouseX, 0.12);
  mouseY = lerp(mouseY, targetMouseY, 0.12);

  const frame2 = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
  const frame3 = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
  const progress = clamp(smoothScroll / 2700);
  const introExit = smoothstep(90, 650, smoothScroll);
  const sightsEnterRaw = smoothstep(2760, 3560, smoothScroll);
  const sightsEnter = Math.pow(sightsEnterRaw, 1.55);
  const sightsControlsEnter = smoothstep(3360, 3660, smoothScroll);
  const blurActive = clamp(frame2.active + frame3.active);
  const frame2Opacity = frame2.active * (1 - frame3.enter);
  const splitDrift = Math.pow(frame2.enter, 1.5);
  const panel2Opacity = frame2.active * (1 - frame2.exit);
  const panel3Opacity = frame3.active * (1 - frame3.exit);
  const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
  const sharedHeroY = progress * -74;
  const sharedHeroScale = progress * 0.23;
  const sightsScreenTop = Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
  const sightsParentTop = window.innerHeight - (window.innerHeight - sightsScreenTop) / backScale;

  setVar('--mx', rm ? 0 : mouseX.toFixed(4));
  setVar('--my', rm ? 0 : mouseY.toFixed(4));
  setVar('--back-opacity', (1 - frame2.active * 0.06).toFixed(4));
  setVar('--back-x', `${mouseX * -12}px`);
  setVar('--back-y', `${mouseY * -4}px`);
  setVar('--back-scale', backScale.toFixed(4));
  setVar('--four-y', `${10 + progress * 10}vh`);
  setVar('--four-scale', (0.78 + progress * 0.16).toFixed(4));
  setVar('--bazaar-y', `${20 - progress * 8}vh`);
  setVar('--blur-px', `${blurActive * 14}px`);
  setVar('--back-brightness', (1 - blurActive * 0.255).toFixed(4));
  setVar('--bazaar-blur-px', `${frame2.active * 14}px`);
  setVar('--bazaar-brightness', (1 - frame2.active * 0.255 - frame3.active * 0.06).toFixed(4));
  setVar('--bazaar-saturation', (1 + frame3.active * 0.18).toFixed(4));
  setVar('--shade-opacity', '1');
  setVar('--shade-z', frame2.active > 0.02 ? '2' : '0');
  setVar('--shade-top-alpha', (blurActive * 0.465).toFixed(4));
  setVar('--shade-mid-alpha', (blurActive * 0.42).toFixed(4));
  setVar('--shade-bottom-alpha', (blurActive * 0.51).toFixed(4));

  setVar('--title-y', `${introExit * -210}px`);
  setVar('--title-scale', (1 - introExit * 0.08).toFixed(4));
  setVar('--title-opacity', (1 - introExit).toFixed(4));

  setVar('--bridge-x', `calc(-50% + ${mouseX * 18}px)`);
  setVar('--bridge-y', `${mouseY * 8 + sharedHeroY - frame2.exit * 760}px`);
  setVar('--bridge-bottom', `${5 - frame2.enter * 13}vh`);
  setVar('--bridge-width', `${67.2 + frame2.enter * 37.8}vw`);
  setVar('--bridge-scale', (1.02 + sharedHeroScale + frame2.exit * 0.46).toFixed(4));

  setVar('--split-left-x', `calc(-50% + ${-splitDrift * 46}vw + ${mouseX * 22}px)`);
  setVar('--split-left-y', `${mouseY * 10 + sharedHeroY - splitDrift * 180}px`);
  setVar('--split-left-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));
  setVar('--split-right-x', `calc(-50% + ${splitDrift * 46}vw + ${mouseX * 22}px)`);
  setVar('--split-right-y', `${mouseY * 10 + sharedHeroY - splitDrift * 180}px`);
  setVar('--split-right-scale', (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

  setVar('--frame2-opacity', frame2Opacity.toFixed(4));
  setVar('--frame2-x', `calc(-50% + ${mouseX * 10}px)`);
  setVar('--frame2-y', `calc(-50% + ${mouseY * 8 - frame2.exit * 150}px)`);
  setVar('--frame2-scale', (1.06 + frame2.enter * 0.08 + frame2.exit * 0.08).toFixed(4));

  setVar('--intro-copy-y', `${introExit * 90}px`);
  setVar('--intro-copy-opacity', (1 - introExit).toFixed(4));
  setVar('--panel2-opacity', panel2Opacity.toFixed(4));
  setVar('--panel2-y', `calc(-50% + ${-frame2.exit * 86 + (1 - frame2.enter) * 58}px)`);
  setVar('--panel3-opacity', panel3Opacity.toFixed(4));
  setVar('--panel3-y', `calc(-50% + ${-frame3.exit * 86 + (1 - frame3.enter) * 58}px)`);

  setVar('--sights-opacity', sightsEnter.toFixed(4));
  setVar('--sights-controls-opacity', sightsControlsEnter.toFixed(4));
  controls.value?.classList.toggle('is-ready', sightsControlsEnter > 0.98);
  setVar('--sights-visibility', sightsEnter > 0.01 ? 'visible' : 'hidden');
  setVar('--sights-y', '0px');
  setVar('--sights-enter-x', `${(1 - sightsEnter) * 420}vw`);
  setVar('--sights-scale', (1 / backScale).toFixed(4));
  setVar('--sights-top', `${sightsParentTop}px`);
  setVar('--sights-screen-top', `${sightsScreenTop}px`);

  const needsFrame =
    Math.abs(smoothScroll - targetScroll) > 0.08 ||
    Math.abs(mouseX - targetMouseX) > 0.001 ||
    Math.abs(mouseY - targetMouseY) > 0.001;
  if (needsFrame) requestTick();
}

function requestTick() {
  if (rafPending) return;
  rafPending = true;
  rafId = requestAnimationFrame(update);
}

/* ---------- 无缝轮播 ---------- */
function updateSightSlider() {
  const trackEl = track.value;
  if (!trackEl) return;
  const cards = Array.from(trackEl.querySelectorAll<HTMLElement>('.sight-card'));
  cards.forEach((c, i) => c.classList.toggle('is-active', i === activeSight));
  if (!cards.length) return;
  const cardWidth = cards[0].offsetWidth;
  const gapStr = getComputedStyle(trackEl).columnGap || '0';
  const gap = parseFloat(gapStr) || 0;
  const shift = -(cardWidth + gap) * activeSight;
  setVar('--sights-shift', `${shift}px`);
}

function moveSightSlider(dir: number) {
  activeSight += dir;
  updateSightSlider();
}

function selectSightCard(i: number) {
  activeSight = i;
  updateSightSlider();
}

function jumpSightSlider(i: number) {
  track.value?.classList.add('is-jumping');
  activeSight = i;
  updateSightSlider();
  requestAnimationFrame(() =>
    requestAnimationFrame(() => track.value?.classList.remove('is-jumping'))
  );
}

function normalizeSightSlider() {
  if (activeSight >= originalCount * 2) jumpSightSlider(activeSight - originalCount);
  else if (activeSight < originalCount) jumpSightSlider(activeSight + originalCount);
}

function onCardKeydown(i: number, e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    selectSightCard(i);
  }
}

/* ---------- 事件 ---------- */
function onScroll() {
  requestTick();
}
function onResize() {
  drawStars();
  updateSightSlider();
  requestTick();
}
function onPointerMove(e: PointerEvent) {
  targetMouseX = e.clientX / window.innerWidth - 0.5;
  targetMouseY = e.clientY / window.innerHeight - 0.5;
  requestTick();
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  drawStars();
  updateSightSlider();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  track.value?.addEventListener('transitionend', normalizeSightSlider);
  requestTick();
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('pointermove', onPointerMove);
  track.value?.removeEventListener('transitionend', normalizeSightSlider);
});
</script>

<style scoped>
.cinema-scroll {
  position: relative;
  height: calc(100vh + 3700px);

  /* 滚动引擎写入的变量（默认值 = 初始画面） */
  --mx: 0; --my: 0;
  --back-opacity: 1; --back-x: 0px; --back-y: 0px; --back-scale: 0.76;
  --four-y: 10vh; --four-scale: 0.78;
  --bazaar-y: 20vh;
  --blur-px: 0px; --back-brightness: 1;
  --bazaar-blur-px: 0px; --bazaar-brightness: 1; --bazaar-saturation: 1;
  --shade-opacity: 1; --shade-z: 0;
  --shade-top-alpha: 0; --shade-mid-alpha: 0; --shade-bottom-alpha: 0;
  --blur-tint: 53, 58, 132;
  --title-y: 0px; --title-scale: 1; --title-opacity: 1;
  --bridge-x: -50%; --bridge-y: 0px; --bridge-bottom: 5vh;
  --bridge-width: 67.2vw; --bridge-scale: 1.02;
  --split-left-x: -50%; --split-left-y: 0px; --split-left-scale: 1;
  --split-right-x: -50%; --split-right-y: 0px; --split-right-scale: 1;
  --frame2-opacity: 0; --frame2-x: -50%; --frame2-y: -50%; --frame2-scale: 1.06;
  --intro-copy-y: 0px; --intro-copy-opacity: 1;
  --panel2-opacity: 0; --panel2-y: calc(-50% + 58px);
  --panel3-opacity: 0; --panel3-y: calc(-50% + 58px);
  --sights-opacity: 0; --sights-controls-opacity: 0; --sights-y: 0px;
  --sights-enter-x: 420vw; --sights-visibility: hidden;
  --sights-shift: 0px; --sights-scale: 1;
  --sights-top: clamp(112px, 19vh, 220px);
  --sights-screen-top: clamp(112px, 19vh, 220px);

  --ink: #111411;
  --paper: #fdf1e1;
  --shadow: rgba(0, 0, 0, 0.32);

  font-family: var(--font-sans);
  color: var(--paper);
}

/* 舞台：吸附在视口 */
.stage {
  position: sticky;
  top: 0;
  height: 100vh;
  min-height: 620px;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(180deg, #1f2551 0%, #120b4f 55%, #080a18 100%);
}

.world {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* 场景图层通用 */
.scene-img {
  position: absolute;
  display: block;
  pointer-events: none;
  will-change: transform;
  user-select: none;
  -webkit-user-drag: none;
}

/* ---------- 深空星野 ---------- */
.sky-img {
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(120% 90% at 50% 0%, #1f2551 0%, #120b4f 55%, #080a18 100%);
  filter: blur(var(--blur-px)) brightness(var(--back-brightness));
}
.starfield {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* ---------- 背面栈（星云 + 行星 + 卡片） ---------- */
.back-stack {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -3vw;
  right: -3vw;
  z-index: 1;
  opacity: var(--back-opacity);
  transform: translate3d(var(--back-x), var(--back-y), 0) scale(var(--back-scale));
  will-change: transform, opacity;
}
.back-img {
  inset: 0;
  width: 100%;
  height: 100%;
  filter: blur(var(--blur-px)) brightness(var(--back-brightness));
}
.back-img svg {
  width: 100%;
  height: auto;
  display: block;
}

/* 星云光带 */
.back-four {
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  opacity: 0.72;
  filter: blur(var(--blur-px)) brightness(var(--back-brightness));
  background:
    radial-gradient(42% 38% at 28% 62%, rgba(232, 201, 122, 0.28), transparent 70%),
    radial-gradient(50% 46% at 72% 40%, rgba(88, 74, 200, 0.34), transparent 70%),
    radial-gradient(36% 30% at 55% 78%, rgba(255, 98, 98, 0.16), transparent 70%);
}

/* 行星 */
.back-bazaar {
  z-index: 3;
  inset: auto;
  left: 50%;
  bottom: -6vh;
  width: min(64vw, 900px);
  height: auto;
  filter: blur(var(--bazaar-blur-px)) brightness(var(--bazaar-brightness)) saturate(var(--bazaar-saturation));
  transform: translate3d(-50%, var(--bazaar-y), 0) scale(0.86);
}

/* 爱好卡片轮播 */
.sights-slider {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--sights-top);
  z-index: 2;
  height: 230px;
  opacity: var(--sights-opacity);
  visibility: var(--sights-visibility);
  transform: translateY(var(--sights-y));
  transition: opacity 0.5s ease, visibility 0.5s;
  will-change: transform, opacity;
}
.sights-track {
  display: flex;
  gap: clamp(16px, 1.15vw, 24px);
  padding: 0 18vw;
  transform: translate3d(calc(var(--sights-shift) - 18vw), 0, 0);
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
.sights-track.is-jumping {
  transition: none;
}
.sight-card {
  position: relative;
  flex: 0 0 auto;
  width: min(346px, 82vw);
  min-height: 232px;
  padding: 24px;
  background: var(--paper);
  border-radius: 20px;
  color: var(--ink);
  box-shadow: var(--shadow);
  backdrop-filter: none;
  cursor: pointer;
  transform-origin: 50% 100%;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, opacity 0.5s ease;
  opacity: 0.72;
}
.sight-card:hover,
.sight-card:focus-visible {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px -20px rgba(0, 0, 0, 0.6);
  outline: none;
  opacity: 1;
}
.sight-card.is-active {
  transform: translateY(-10px);
  box-shadow: 0 26px 60px -24px rgba(0, 0, 0, 0.65);
  opacity: 1;
}
.sight-kicker {
  display: block;
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(17, 20, 17, 0.55);
  margin-bottom: 56px;
}
.sight-pin {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  font-size: 34px;
  line-height: 1;
}
.sight-card h3 {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: calc(24px + 16px * 1.16 * 2 + 12px);
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 26px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.sight-card p {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(17, 20, 17, 0.72);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 轮播控制 */
.sights-controls {
  position: absolute;
  left: 50%;
  top: calc(var(--sights-screen-top) + 230px + 16px);
  transform: translateX(-50%);
  z-index: 7;
  display: flex;
  gap: 12px;
  opacity: var(--sights-controls-opacity);
  pointer-events: none;
}
.sights-controls.is-ready {
  pointer-events: auto;
}
.sight-nav {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--paper);
  font-size: 20px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
  backdrop-filter: blur(6px);
}
.sight-nav:hover {
  background: rgba(232, 201, 122, 0.2);
  border-color: rgba(232, 201, 122, 0.5);
  transform: translateY(-2px);
}

/* ---------- 主标题 ---------- */
.hero-title {
  position: absolute;
  top: clamp(122px, 19vh, 205px);
  left: 0;
  right: 0;
  z-index: 3;
  margin: 0;
  text-align: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(72px, 14vw, 224px);
  line-height: 0.94;
  letter-spacing: 0.01em;
  color: var(--paper);
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.35);
  transform: translate3d(0, var(--title-y), 0) scale(var(--title-scale));
  opacity: var(--title-opacity);
  will-change: transform, opacity;
}

/* ---------- 银河近景 ---------- */
.frame-two-img {
  left: 50%;
  top: 50%;
  width: min(122vw, 2160px);
  z-index: 4;
  opacity: var(--frame2-opacity);
  transform: translate3d(var(--frame2-x), var(--frame2-y), 0) scale(var(--frame2-scale));
  transform-origin: 50% 48%;
  filter: none !important;
  backdrop-filter: none;
}
.galaxy {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(50% 50% at 50% 46%, rgba(244, 217, 160, 0.55), transparent 42%),
    radial-gradient(70% 60% at 46% 52%, rgba(154, 123, 200, 0.5), transparent 62%),
    radial-gradient(90% 70% at 58% 44%, rgba(88, 74, 160, 0.45), transparent 70%),
    radial-gradient(120% 100% at 50% 50%, rgba(20, 18, 50, 0.9), transparent 75%);
  animation: galaxy-drift 24s linear infinite;
}
@keyframes galaxy-drift {
  from { transform: rotate(0deg) scale(1.08); }
  to { transform: rotate(360deg) scale(1.08); }
}

/* ---------- 山脊分屏 ---------- */
.splitframe-img {
  left: 50%;
  bottom: -2vh;
  width: min(118vw, 2240px);
  z-index: 6;
  transform-origin: 50% 52%;
}
.splitframe-img svg {
  width: 100%;
  height: auto;
  display: block;
}
.splitframe-left {
  transform-origin: 21% 52%;
  transform: translate3d(var(--split-left-x), var(--split-left-y), 0) scale(var(--split-left-scale));
}
.splitframe-right {
  transform-origin: 79% 52%;
  transform: translate3d(var(--split-right-x), var(--split-right-y), 0) scale(var(--split-right-scale));
}

/* ---------- 前景悬崖 ---------- */
.bridge-img {
  left: 50%;
  bottom: var(--bridge-bottom);
  width: min(var(--bridge-width), 2140px);
  z-index: 5;
  transform-origin: 50% 48%;
  transform: translate3d(var(--bridge-x), var(--bridge-y), 0) scale(var(--bridge-scale));
  filter: none !important;
  backdrop-filter: none;
}
.bridge-img svg {
  width: 100%;
  height: auto;
  display: block;
}

/* ---------- 色罩 ---------- */
.shade {
  position: absolute;
  inset: 0;
  z-index: var(--shade-z);
  opacity: var(--shade-opacity);
  background: linear-gradient(
    to bottom,
    rgba(var(--blur-tint), var(--shade-top-alpha)) 0%,
    rgba(var(--blur-tint), var(--shade-mid-alpha)) 50%,
    rgba(var(--blur-tint), var(--shade-bottom-alpha)) 100%
  );
  pointer-events: none;
}

/* ---------- 文字层 ---------- */
.intro-copy {
  position: absolute;
  left: 50%;
  bottom: 36px;
  z-index: 9;
  transform: translate3d(-50%, var(--intro-copy-y), 0);
  opacity: var(--intro-copy-opacity);
  text-align: center;
  width: min(92vw, 680px);
}
.intro-copy p {
  margin: 0 0 20px;
  font-size: clamp(15px, 1.6vw, 19px);
  line-height: 1.6;
  color: var(--paper);
  text-wrap: balance;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.4);
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.hero-tags span {
  padding: 7px 16px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(232, 201, 122, 0.35);
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--paper);
  backdrop-filter: blur(4px);
}

.story-panel {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10;
  width: min(88vw, 540px);
  transform: translate3d(-50%, var(--panel2-y), 0);
  opacity: var(--panel2-opacity);
  pointer-events: none;
  text-align: center;
}
.story-panel-bazaar {
  transform: translate3d(-50%, var(--panel3-y), 0);
  opacity: var(--panel3-opacity);
}
.story-panel h2 {
  margin: 0 0 20px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(26px, 3.6vw, 44px);
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: var(--paper);
  text-wrap: balance;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
}
.story-panel p {
  margin: 0 0 28px;
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: balance;
}
.facts {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin: 0;
  text-align: left;
}
.facts div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.facts dt {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-accent);
}
.facts dd {
  margin: 0;
  font-size: 15px;
  color: var(--paper);
}
.note-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 22px;
  border-radius: 40px;
  background: rgba(232, 201, 122, 0.12);
  border: 1px solid rgba(232, 201, 122, 0.5);
  color: var(--paper);
  font-family: var(--font-sans);
  font-size: 14px;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
  pointer-events: auto;
}
.note-button:hover {
  background: rgba(232, 201, 122, 0.24);
  transform: translateY(-2px);
}
.note-button span:first-child {
  font-size: 18px;
  line-height: 1;
}

/* ---------- 响应式 ---------- */
@media (max-width: 767px) {
  .hero-title {
    font-size: clamp(58px, 24vw, 108px);
    top: clamp(96px, 15vh, 160px);
  }
  .sight-card {
    width: min(300px, 82vw);
  }
  .facts {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  .facts div {
    align-items: center;
  }
}

/* ---------- 减少动态 ---------- */
@media (prefers-reduced-motion: reduce) {
  .sights-track,
  .sight-card,
  .galaxy {
    animation: none;
    transition: none;
  }
}
</style>
