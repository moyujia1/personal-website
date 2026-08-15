export interface ContactItem {
  icon?: string;
  label: string;
  href?: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="white" stroke-width="1.5"/><path d="M2 7L10.5 13C11.3 13.6 12.7 13.6 13.5 13L22 7" stroke="white" stroke-width="1.5"/></svg>`,
    label: '邮箱：待补充',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5"/><path d="M8.5 12L11 14.5L15.5 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    label: '微信：待补充',
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="white" stroke-width="1.5"/><path d="M8 12L11 15L16 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    label: 'GitHub：待补充',
  },
];
