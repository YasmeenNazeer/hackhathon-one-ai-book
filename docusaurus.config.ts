// docs/docusaurus.config.ts
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ✅ Environment detection (BEST PRACTICE)
const isVercel = process.env.VERCEL === '1';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Bridging the gap between the digital brain and the physical body',
  favicon: 'img/favicon.ico',

  // ✅ Works on BOTH Vercel & GitHub Pages
  url: isVercel
    ? 'https://physical-ai-and-humanoid-robotics.vercel.app'
    : 'https://github.com/YasmeenNazeer/physical-ai-and-humanoid-robotics-hackhathon',

  baseUrl: isVercel ? '/' : '/physical-ai-and-humanoid-robotics/',

  organizationName: 'YasmeenNazeer',
  projectName: 'physical-ai-and-humanoid-robotics',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // 🔐 Safe env usage (no secrets in bundle)
  customFields: {
    apiUrl:
      process.env.REACT_APP_API_URL ??
      'https://ai-rative-book-backend-production.up.railway.app',
    apiKey: process.env.REACT_APP_API_KEY ?? '',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/YasmeenNazeer/physical-ai-and-humanoid-robotics-hackhathon',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/ai-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start Learning',
        },
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {
              label: 'Module 1: ROS 2 Fundamentals',
              to: '/docs/module1/week1-intro-physical-ai',
            },
            {
              label: 'Module 2: Gazebo Simulation',
              to: '/docs/module2/week6-gazebo',
            },
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/module3/week8-isaac',
            },
            {
              label: 'Module 4: Conversational Robotics',
              to: '/docs/module4/week13-conversational-robotics',
            },
          ],
        },
        {
          href: 'https://github.com/YasmeenNazeer/physical-ai-and-humanoid-robotics-hackhathon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Course Material',
          items: [
            { label: 'Introduction', to: '/docs' },
            {
              label: 'ROS 2 Setup',
              to: '/docs/module1/week1-intro-physical-ai',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Yasmeen Nazeer',
              href: 'https://github.com/YasmeenNazeer/physical-ai-and-humanoid-robotics-hackhathon',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/yasmeen-nazeer-b1800433a/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/YasmeenNazeer/physical-ai-and-humanoid-robotics-hackhathon',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
