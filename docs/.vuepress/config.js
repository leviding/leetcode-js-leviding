const easyArr = [
    '',
    './1.two-sum/1.two-sum',
    './7.reverse-integer/7.reverse-integer',
    './9.palindrome-number/9.palindrome-number'
]

const mediumArr = [
    '',
]

const hardArr = [
    '',
]

module.exports = {
    title: 'LeetCode JavaScript',
    description: 'LeviDing 的 LeetCode JavaScript 题解',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/leetcode-js-leviding/',
    locales: {
        '/': {
        lang: 'zh-CN',
        title: 'LeetCode JavaScript',
        description: 'LeviDing 的 LeetCode JavaScript 题解',
        }
    },
    ga: 'UA-92630037-1',

    themeConfig: {
        repo: 'leviding/leetcode-js-leviding',
        docsRepo: 'leviding/leetcode-js-leviding',
        docsDir: 'docs',
        lastUpdated: '上次更新',
        editLinks: true,
        markdown: {
          html: true,
          // config: md => {
          //   // 使用更多的 markdown-it 插件!
          //   md.use(require('markdown-it-katex'))
          // }
        },
        locales: {
          '/': {
            lang: 'zh-CN',
            selectText: 'Languages',
            editLinkText: '在 GitHub 上编辑此页',
            title: 'LeetCode JavaScript',
            description: 'LeviDing 的 LeetCode JavaScript 题解',
            nav: [
              { text: '简单', link: '/easy/' },
              { text: '中等', link: '/medium/' },
              { text: '困难', link: '/hard/' },
              { text: '博客', link: 'https://dingxuewen.com' },
              {
                text: '社交',
                items: [
                  { text: '知乎', link: 'https://www.zhihu.com/people/leviding/' },
                  { text: '掘金', link: 'https://juejin.im/user/589881b7128fe1006cbbacec/posts' },
                  { text: '微博', link: 'https://weibo.com/leviding' },
                  { text: 'Bilibili', link: 'https://space.bilibili.com/304586774' }
                ]
              }
            ],
            sidebar: {
              '/easy/': [
                  {
                    title: '简单题目',
                    collapsable: false,
                    children: easyArr
                  }
              ],
              '/medium/': [
                {
                  title: '中等题目',
                  collapsable: false,
                  children: mediumArr
                }
              ],
              '/hard/': [
                {
                  title: '困难题目',
                  collapsable: false,
                  children: hardArr
                }
              ]
            }
          }
        }
    }
}
