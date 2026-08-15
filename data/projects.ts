export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tag: string;
  year: string;
  link?: string;
  category: 'systematic' | 'practice';
}

export const projects: Project[] = [
  {
    id: '1',
    title: '灵感记事本',
    description: '一个极简的在线记事本，随时随地记录灵感与想法。界面清爽、操作直观，是自己从零开始独立开发的第一个网页作品。',
    thumbnail: '',
    tag: 'Web-App',
    year: '2026.07',
    link: 'https://moyujia1.github.io/idea-notepad/',
    category: 'systematic',
  },
  {
    id: '2',
    title: '微信小程序',
    description: '独立开发的原创微信小程序，从需求分析到 UI 设计到前端开发全流程实践，解决实际场景中的用户问题。',
    thumbnail: '',
    tag: '小程序',
    year: '2026.07',
    link: '',
    category: 'systematic',
  },
];
