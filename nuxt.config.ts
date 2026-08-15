// https://nuxt.com/docs/api/configuration/nuxt-config
// GitHub Pages 子路径：本地开发默认 '/'，部署时通过环境变量 NUXT_APP_BASE_URL 传入子路径
const baseURL = process.env.NUXT_APP_BASE_URL || '/';

export default defineNuxtConfig({
  // SSG 模式：生成纯静态文件
  ssr: true,

  // 自动导入组件
  components: true,

  // 自动导入 composables
  imports: {
    dirs: ['composables'],
  },

  // 应用全局配置
  app: {
    baseURL,

    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: '阿佳 - 个人主页',
      meta: [
        { name: 'description', content: '阿佳的个人网站 — CS专业大三学生，爱跳舞、钢琴、吉他、拍照、穿搭，梦想环游世界，ENFP快乐小狗！' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { charset: 'utf-8' },
        { property: 'og:title', content: '阿佳 - 个人主页' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: '阿佳的个人网站 — 代码与艺术之间，是我在探索的世界' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: `${baseURL}favicon-circle.png` },
        { rel: 'apple-touch-icon', sizes: '512x512', href: `${baseURL}favicon-circle.png` },
      ],
    },
  },

  // 开发工具
  devtools: { enabled: false },

  // 兼容性
  compatibilityDate: '2024-08-14',
});
