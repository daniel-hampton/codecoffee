module.exports = {
  title: 'Code Coffee',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    ['@vuepress/medium-zoom', {
      selector: '.content__default :not(a) > img'
    }],
  ],
  description: 'Stimulate your development.',
  theme: 'modern-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
            blogPluginOptions["directories"].find(
        el => el.id === "post"
      ).itemPermalink = '/:slug';
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Home',
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
          text: 'Copyright © 2020 - present Daniel Hampton',
          link: '',
        },
      ],
    },
  },
}
