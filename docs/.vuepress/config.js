module.exports = {
  title: 'John Kuo',
  description: 'This is davidkoojohn blog. \n 这是davidkoojohn的博客。',
  base: process.env.NODE_ENV === 'production'
    ? 'me-vuepress'
    : '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/davidkoojohn.jpg'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // navbar: false, // 禁用导航栏
    logo: '/davidkoojohn.jpg',
    // search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/guide/' },
      { text: 'Share', link: 'https://davidkoojohn.github.io/share/' },
      { text: 'GitHub', link: 'http://github.com/' },
      { text: 'About', link: '/about' },
      {
        text: 'recommend',
        ariaLabel: 'Recommend Menu',
        items: [
          { text: 'react-on-express', link: 'https://github.com/davidkoojohn/react-on-express' },
          { text: 'json-server-demo', link: 'https://github.com/davidkoojohn/json-server-demo' },
          { text: 'nodejs-crawler', link: 'https://github.com/davidkoojohn/nodejs-crawler' },
        ]
      }
    ],
    lastUpdated: '上次更新',
    repo: 'davidkoojohn/me-vuepress',
    repoLabel: '查看源码',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  }
}
