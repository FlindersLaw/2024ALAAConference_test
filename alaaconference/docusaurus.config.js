// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2024 Australasian Law Academics Association (ALAA) Conference',
  tagline: '3 - 5 July 2024',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Azure Static Webapps deployment
  // url: 'https://your-docusaurus-site.example.com',
  // baseUrl: '/',

  // For GitHub pages deployment, it is often '/<projectName>/'
  url: 'https://flinderslaw.github.io/',
  baseUrl: '/2024ALAAConference',
  organizationName: 'FlindersLaw', // Usually your GitHub org/user name.
  projectName: '2024ALAAConference', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/legaltech.png',
      navbar: {
        title: '2024 ALAA Conference',
        logo: {
          alt: 'ALAA Logo',
          src: '/img/alaa_logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: 'Registration',
            to: '/registration',
            position: 'left'
          },
          {
            label: 'Accommodation',
            to: '/accommodation',
            position: 'left',
          },
          {
            label: 'Flinders New City Campus',
            to: '/flinders_ncc',
            position: 'left',
          },
          {
            label: 'Gala Dinner',
            to: '/gala_dinner',
            position: 'left',
          },
          {
            label: 'Program and Conference Material',
            to: '/docs',
            position: 'left'
          },
          {
            label: 'FAQ',
            to: '/faq',
            position: 'left',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://flinders.edu.au"><img src="img/Flinders_University_Logo_Horizontal_RGB_Master.png" height="30px"></a>',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Flinders University',
            items: [
              {
                label: 'Our New City Campus',
                href: 'https://www.flinders.edu.au/campus/festival-plaza',
              },
              {
                label: 'College of Business, Government and Law',
                href: 'https://flinders.edu.au/cbgl',
              },
            ],
          },
          {
            title: 'Conference hosted by Flinders Law',
            items: [
              {
                // Hard push from the left to manually align under title
                html: '<div style="margin-left: 57px; margin-top: 40px;"><img src="img/Flinders_University_Logo_Horizontal_RGB_Stroked.png" style="height: 50px"></div>',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact ALAA',
                href: 'mailto:admin@alaa.asn.au',
              },
              {
                label: 'Contact Flinders Law',
                href: 'mailto:bglenquiries@flinders.edu.au',
              },
              {
                label: 'Contact the Conference Project Team',
                href: 'mailto:0cb050e2.FLINDERS.onmicrosoft.com@au.teams.ms',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      /* Disables dark mode */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
