module.exports = {
  title: 'Zeptron Docs',
  tagline: 'Get started with Zeptron, a beautiful UI for any AI',
  url: 'https://zeptron.github.io/', // Your website URL
  baseUrl: '/',
  projectName: 'zeptron.github.io',
  organizationName: 'zeptron',
  favicon: 'img/apple-touch-icon.png',
  themeConfig: {
    navbar: {
      title: 'Zeptron',
      logo: {
        alt: 'Zeptron',
        src: 'img/SquareLogo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/zeptron/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Zeptron',
          items: [
            {
              label: 'Home',
              href: 'https://www.zeptron.co',
            },
            {
              label: 'Get Started ',
              href: 'https://www.zeptron.co/auth',
            },
            {
              label: 'About',
              href: 'https://www.zeptron.co/about',
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Contact',
              href: 'https://www.zeptron.co/contact'
            }
          ],
        },
        {
          title: 'Shop',
          items: [
            {
              label: 'Streaming',
              href: 'https://www.zeptron.co/streaming'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zeptron`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zeptron/zeptron.github.io',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
