module.exports = {
  title: 'Zeptron Docs',
<<<<<<< HEAD
  tagline: 'Get started with Zeptron, a beautiful UI for any AI',
=======
  tagline: 'Get started with Zeptron, a model agnostic computer vision app',
>>>>>>> master
  url: 'https://zeptron.github.io/', // Your website URL
  baseUrl: '/',
  projectName: 'zeptron.github.io',
  organizationName: 'zeptron',
  favicon: 'img/apple-touch-icon.png',
  themeConfig: {
    algolia: {
      apiKey: '760975dff9db2bd23f37006b10c5f8d3',
      indexName: 'zeptron',
      appId: '', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
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
<<<<<<< HEAD
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
=======
          title: 'Get Zeptron',
          items: [
            {
              label: 'Sign up',
              href: 'https://zeptron.co',
            },
            {
              label: 'About',
              href: 'https://zeptron.co',
            },
            {
              label: 'Contact',
              href: 'https://zeptron.co/contact',
>>>>>>> master
            },
          ],
        },
        {
<<<<<<< HEAD
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
=======
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
            {
              label: 'Install Streamer',
              to: 'docs/doc3/',
            },
>>>>>>> master
          ],
        },
        {
          title: 'Shop',
          items: [
            {
<<<<<<< HEAD
              label: 'Streaming',
              href: 'https://www.zeptron.co/streaming'
            }
=======
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zeptron',
            },
>>>>>>> master
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
