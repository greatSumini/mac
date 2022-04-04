const autometa_options = {
  title: "macOS 안내서",
  description: "macOS 안내서 - 본격 macOS에 개발 환경 구축하기",
  canonical_base: "https://subicura.com/mac",
  author: {
    name: "subicura",
    twitter: "subicura",
  },
  site: {
    name: "macOS 안내서",
    twitter: "subicura",
  },
  description_sources: ["frontmatter"],
  image_sources: ["frontmatter"],
};

module.exports = {
  locales: {
    "/": {
      lang: "ko-KR",
      title: "macOS 안내서",
      description: "macOS 안내서 - 본격 macOS에 개발 환경 구축하기",
    },
  },
  dest: "dist/mac",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "macOS 안내서",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "macOS 안내서 - 본격 macOS에 개발 환경 구축하기",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/mac/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "script",
      {
        src: "https://seemly-courageous.subicura.dev/script.js",
        "data-site": "IZEFXABV",
        "data-spa": "auto",
        defer: "",
      },
    ],
    ["meta", { property: "fb:app_id", content: "1611862309129685" }],
  ],

  base: "/mac/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "subicura/mac",
    editLinks: true,
    docsDir: "src",
    editLinkText: "",
    lastUpdated: true,
    // algolia: {
    //   apiKey: "6b02d4c7b823f2f9dd607f57d047175e",
    //   indexName: "subicura",
    // },
    locales: {
      "/": {
        nav: [
          {
            text: "👶 Mac 초보 탈출",
            link: "/guide/hello",
          },
          {
            text: "⚙️ 필수 초기 설정",
            link: "/setup/hello",
          },
          {
            text: "💻 개발 환경 설정",
            link: "/dev/hello",
          },
          {
            text: "⭐️ 추천 앱",
            link: "/apps/hello",
          },
          {
            text: "💡 팁",
            link: "/tip/hello",
          },
          // {
          //   text: "영상강의",
          //   link: "https://bit.ly/inflearn-k8s-link",
          // },
        ],
        sidebar: {
          "/guide/": getGuideSidebar(),
          "/setup/": getSetupSidebar(),
          "/dev/": getDevSidebar(),
          "/apps/": getAppsSidebar(),
          "/tip/": getTipSidebar(),
        },
      },
    },
    yuu: {
      disableThemeIgnore: true,
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "sitemap",
      {
        hostname: "https://subicura.com",
      },
    ],
    ["@vuepress/last-updated", false],
    [require("./plugins/vuepress-plugin-autometa.js"), autometa_options],
  ],
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: "기본 안내",
      collapsable: false,
      children: ["hello", "overview", "macos-vs-windows"],
    },
    {
      title: "기본 가이드",
      collapsable: false,
      children: [
        "install",
        "interface",
        "apps",
        "security",
        "system-preferences",
      ],
    },
    {
      title: "기본 앱",
      collapsable: false,
      children: ["finder", "basic-apps"],
    },
    {
      title: "꼭 기억하세요!",
      collapsable: false,
      children: ["shortcut"],
    },
  ];
}

function getSetupSidebar(groupA, groupB) {
  return [
    {
      title: "시스템 및 파인더 설정",
      collapsable: false,
      children: ["hello", "finder", "setting"],
    },
    {
      title: "한글 설정",
      collapsable: false,
      children: ["hangle-won", "hangle-input"],
    },
  ];
}

function getDevSidebar() {
  return [
    {
      title: "환경 설정",
      collapsable: false,
      children: ["hello", "intel", "apple-silicon", "shell"],
    },
    {
      title: "개발 프로그램",
      collapsable: false,
      children: ["terminal-apps", "development-apps"],
    },
  ];
}

function getAppsSidebar() {
  return [
    {
      title: "필수 앱",
      collapsable: false,
      children: ["hello"],
    },
    {
      title: "추천 앱",
      collapsable: false,
      children: ["recommend"],
    },
  ];
}

function getTipSidebar() {
  return [
    {
      title: "사용팁",
      collapsable: false,
      children: ["hello", "windows", "recovery", "beta"],
    },
  ];
}
