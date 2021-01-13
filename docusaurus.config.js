module.exports = {
  title: "SinguSaurus",
  tagline:
    "Hi there! Welcome to Singusaurus, the great repository created by Singulars 2021",
  url: "https://Singulars2021.github.io",
  baseUrl: "/singusaurus/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Singulars2021", // Usually your GitHub org/user name.
  projectName: "singusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SinguSaurus",
      logo: {
        alt: "Logo SinguSaurus",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Daily", position: "left" },
        {
          href: "https://github.com/Singulars2021/singusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "docs/",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Singulars 2021",
              href: "https://github.com/Singulars2021",
            },
            {
              label: 'Daily',
              to: 'blog'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SinguSaurus, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Singulars2021/singusaurus/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Singulars2021/singusaurus/tree/main/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};
