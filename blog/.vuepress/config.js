module.exports = {
  title: 'Code Coffee',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    ['@vuepress/medium-zoom', {
      selector: '.content__default :not(a) > img'
    }],
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
      }
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
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
    heroImage: '/images/vladyslav-bahara-EOva41PiBYg-unsplash.jpg',
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
        {
          type: 'youtube',
          link: 'https://www.youtube.com/channel/UCb8RK2cBQl9X-l3TEVuT2Gg',
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
          // link: '',
        },
      ],
    },
  },
}
