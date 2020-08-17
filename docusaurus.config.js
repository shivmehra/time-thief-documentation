module.exports = {
  title: 'Time Thief Documentation',
  tagline: 'Running across Centuries',
  url: 'https://timethief.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'devparanjay', // Usually your GitHub org/user name.
  projectName: 'time-thief-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Time Thief Documentation',
      logo: {
        alt: 'Time Thief Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', label: 'Blog', position: 'left'
        },
        {
          href: 'https://github.com/devparanjay/time-thief-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Literature Review',
              to: 'docs/literature-review',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'Timeline',
              to: 'development/timeline',
            },
            {
              label: 'Team',
              to: 'development/team',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/devparanjay/time-thief-documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @devparanjay. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/devparanjay/time-thief-documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/devparanjay/time-thief-documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
