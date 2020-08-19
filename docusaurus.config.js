module.exports = {
  title: 'Time Thief Documentation',
  tagline: 'Running across Centuries',
  url: 'https://time-thief.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'devparanjay', // Usually your GitHub org/user name.
  projectName: 'time-thief-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Time Thief Documentation',
      logo: {
        alt: 'Time Thief Logo',
        src: 'img/tt_logo_gray.gif',
      },
      links: [
        {
          to: 'docs/game-introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        // {
        //   to: 'blog', label: 'Blog', position: 'left'
        // },
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
              to: 'docs/game-introduction',
            },
            {
              label: 'Project Guides',
              to: 'docs/project-details',
            },
            {
              label: 'Competition Analysis',
              to: 'docs/probable-competition',
            }
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
      copyright: `Copyright © ${new Date().getFullYear()} Paranjay Bind.`,
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
            'https://github.com/devparanjay/time-thief-documentation/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/devparanjay/time-thief-documentation/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
