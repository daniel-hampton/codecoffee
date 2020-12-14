module.exports = {
  title: 'Code Coffee',
  description: 'Stimulate your development.',
  theme: 'modern-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/dhampton084',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/DanCanDoTV',
        },
      ],
      copyright: [
        // {
        //   text: 'Privacy Policy',
        //   link: 'https://policies.google.com/privacy?hl=en-US',
        // },
        {
          // text: 'MIT Licensed | Copyright © 2020-present Daniel Hampton',
          text: 'Copyright © 2020-present Daniel Hampton',
          link: '',
        },
      ],
    },
  },
}
