const { description } = require("../../package");
const path = require("path");

module.exports = {
  title: "Optimism Docs",
  description: description,

  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/logos/favicon.png",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://community.optimism.io/assets/logos/twitter-logo.png",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://community.optimism.io/assets/logos/twitter-logo.png",
      },
    ],
    ["meta", { name: "twitter:title", content: "OP Docs" }],
    ["meta", { property: "og:title", content: "OP Docs" }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],

  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    contributor: false,
    hostname: "https://community.optimism.io",
    logo: "/assets/logos/logo.png",
    docsDir: "src",
    docsRepo: "https://github.com/ethereum-optimism/community-hub",
    docsBranch: "main",
    lastUpdated: false,
    darkmode: "disable",
    themeColor: false,
    blog: false,
    iconPrefix: "far fa-",
    pageInfo: false,
    pwa: {
      cacheHTML: false,
    },
    activeHash: {
      offset: -200,
    },
    algolia: {
      appId: "8LQU4WGQXA",
      apiKey: "2c1a86142192f96dab9a5066ad0c1d50",
      indexName: "optimism",
    },
    nav: [
      /* When you update here, don't forget to update the tiles
         in src/README.md */
      {
        text: "Governance",
        link: "/docs/governance/",
      },
      {
        text: "Citizens House",
        link: "/docs/citizen-house/",
      },
      {
        text: "Identity",
        link: "/docs/identity/",
      },
      {
        text: "Contribute",
        link: "/docs/contribute/",
      },
      {
        text: "Support",
        link: "/docs/biz/",
      },
      {
        text: "Technical Docs",
        link: "https://docs.optimism.io/",
        target: '_blank', 
        rel: 'noopener noreferrer' 
      },
      {
        text: "Community",
        items: [
          {
            icon: "discord",
            iconPrefix: "fab fa-",
            iconClass: "color-discord",
            text: "Discord",
            link: "https://discord.gg/optimism",
          },
          {
            icon: "github",
            iconPrefix: "fab fa-",
            iconClass: "color-github",
            text: "GitHub",
            link: "https://github.com/ethereum-optimism/optimism",
          },
          {
            icon: "twitter",
            iconPrefix: "fab fa-",
            iconClass: "color-twitter",
            text: "Twitter",
            link: "https://twitter.com/optimismFND",
          },
          {
            icon: "twitch",
            iconPrefix: "fab fa-",
            iconClass: "color-twitch",
            text: "Twitch",
            link: "https://www.twitch.tv/optimismpbc",
          },
          {
            icon: "medium",
            iconPrefix: "fab fa-",
            iconClass: "color-medium",
            text: "Blog",
            link: "https://optimismpbc.medium.com/",
          },
          {
            icon: "computer-classic",
            iconClass: "color-ecosystem",
            text: "Ecosystem",
            link: "https://www.optimism.io/apps/all",
          },
          {
            icon: "globe",
            iconClass: "color-optimism",
            text: "optimism.io",
            link: "https://www.optimism.io/",
          },
        ],
      },
    ],
    searchPlaceholder: 'Search the docs',
    sidebar: {    
      '/docs/identity/': [
        ["/docs/identity/", "Identity Overview"],
        '/docs/identity/identity-and-rep',
        '/docs/identity/project-and-individual-identity-in-the-collective',
        '/docs/identity/attestations-best-practices',
        [
          "https://docs.optimism.io/chain/identity/about-attestations",
          "Build with Attestations"
        ]
      ],
      '/docs/citizen-house/': [
        ["/docs/citizen-house/", "Citizens House Overview"],
        '/docs/citizen-house/how-retro-funding-works',
        {
          title: "Past Retro Funding Rounds",
          children: [
            "/docs/citizen-house/retropgf-1.md",
            "/docs/citizen-house/retropgf-2.md",
            "/docs/citizen-house/retropgf-3.md",
            "/docs/citizen-house/retropgf-4.md"
          ],
          collapsable: true,
        },
        '/docs/citizen-house/citizenship-selection',
        '/docs/citizen-house/experimentation-with-citizenship'
      ],
      "/docs/governance/": [
        ["/docs/governance/", "What is the Optimism Collective?"],
        ["https://www.optimism.io/vision", "The Optimistic Vision"],
        "/docs/governance/media.md",
        "/docs/governance/get-a-grant.md",
        {
          title: "OP Holders",
          children: [
            '/docs/governance/howto-delegate.md',
            '/docs/governance/economics.md',
            '/docs/governance/allocations.md',
            '/docs/governance/airdrop-4.md',
            '/docs/governance/airdrop-3.md',
            '/docs/governance/airdrop-2.md',
            '/docs/governance/airdrop-1.md'
          ],
          collapsable: true,
        },
        {
          title: "Delegates",
          children: [
            "/docs/governance/delegate.md",
            "/docs/governance/existing-delegate.md",
            "/docs/governance/delegate-info.md",
          ],
          collapsable: true,
        },
        {
          title: "Proposal Submitters",
          children: [
            "/docs/governance/proposals.md",
            [
              "https://gov.optimism.io/tags/c/proposals/38/passed",
              "Passed Proposals",
            ],
          ],
          collapsable: true,
        },
        {
          title: "Token House Governance",
          children: [
            "/docs/governance/token-house.md",
            "/docs/governance/token-house-history.md",
            "/docs/governance/gov-fund.md",
            "/docs/governance/law-of-chains-disclaimer.md",
            [
              "https://docs.google.com/spreadsheets/d/1Ul8iMTsOFUKUmqz6MK0zpgt8Ki8tFtoWKGlwXj-Op34",
              "Governance Fund Tracker",
            ],
            [
              "https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55",
              "Working Constitution",
            ],
            [
              "https://github.com/ethereum-optimism/OPerating-manual/blob/main/manual.md",
              "Operating Manual",
            ],
          ],
          collapsable: true,
        },
        [
          "https://calendar.google.com/calendar/u/0?cid=Y19mbm10Z3VoNm5vbzZxZ2JuaTJncGVyaWQ0a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
          "Governance Calendar",
        ],
        "/docs/governance/what-is-the-optimism-foundation.md",
      ],
      "/docs/guides/": [
        {
          title: "Beginner",
          children: [
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/getting-started",
              "Developing smart contracts on Optimism",
            ],
            "/docs/guides/nft.md",
            "/docs/guides/testing.md",
          ],
          collapsable: true,
        },
        {
          title: "Getting your dapp on Optimism",
          children: [
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/cross-dom-bridge-eth",
              "Bridging ETH with the Optimism SDK",
            ],
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/cross-dom-bridge-erc20",
              "Bridging ERC-20 tokens with the Optimism SDK",
            ],
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/sdk-view-tx",
              "View transactions between layers",
            ],
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/standard-bridge-standard-token",
              "Creating an ERC20 Token on L2 to represent one on L1",
            ],
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/standard-bridge-custom-token",
              "Registering a Custom ERC20 Token on L2",
            ],
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/sdk-estimate-gas",
              "Estimate the costs of an Optimistic (L2) transaction",
            ],
          ],
          collapsable: true,
        },
        {
          title: "Specific guides",
          children: [
            "/docs/guides/wallet-dev.md",
            "/docs/guides/cex-dev.md",
            "/docs/guides/bridge-dev.md",
          ],
          collapsable: true,
        },
      ],
      "/docs/security-model/": [
        "/docs/security-model/bounties.md",
        "/docs/security-model/priv-roles.md",
        [
          "https://dev.optimism.io/decentralization-roadmap/",
          "Path to Decentralization (Feb 23rd, 2023)",
        ],
      ],
      "/docs/protocol/": [
        {
          title: "How Optimism Works",
          children: [
            "/docs/protocol/1-design-philosophy.md",
            "/docs/protocol/2-rollup-protocol.md",
          ],
          collapsable: false,
        },
        {
          title: "Protocol Specs",
          children: [
            "/docs/protocol/protocol-2.0.md",
            [
              "https://github.com/ethereum-optimism/optimism/blob/33741760adce92c8bdf61f693058144bb6986e30/specs/derivation.md#batch-submission-wire-format",
              "The Canonical Transaction Chain (CTC) Format",
            ],
          ],
          collapsable: false,
        },
        {
          title: "Data flows (in bedrock)",
          children: [
            "/docs/protocol/txn-flow.md",
            "/docs/protocol/deposit-flow.md",
            "/docs/protocol/withdrawal-flow.md",
          ],
          collapsable: false,
        },
      ],
      "/docs/developers/": [
        ["https://github.com/ethereum-optimism/optimism/releases", "Releases"],
        {
          title: "Building on Optimism",
          children: [
            [
              "https://github.com/ethereum-optimism/optimism-tutorial/tree/main/getting-started#development-stacks",
              "Development stacks",
            ],
            "/docs/developers/build/transaction-fees.md",
            "/docs/developers/build/system-contracts.md",
            "/docs/developers/build/dev-node.md",
            "/docs/developers/build/differences.md",
            "/docs/developers/build/json-rpc.md",
            "/docs/developers/build/testing-dapps.md",
            "/docs/developers/build/cheap-dapp.md",
          ],
        },
        {
          title: "Bridging L1 and L2",
          children: [
            "/docs/developers/bridge/basics.md",
            "/docs/developers/bridge/standard-bridge.md",
            "/docs/developers/bridge/messaging.md",
            "/docs/developers/bridge/comm-strategies.md",
          ],
          collapsable: true,
        },
        {
          title: "OP Node Operators",
          children: [
            "/docs/developers/bedrock/node-operator-guide.md",
            "/docs/developers/nodes/intro.md",
            "/docs/developers/nodes/mainnet.md",
            "/docs/developers/nodes/testnet.md",
          ],
          collapsable: true,
        },
        "/docs/developers/known-issues.md",
        {
          title: "Useful Tools",
          children: [
            "/docs/useful-tools/networks.md",
            "/docs/useful-tools/debugging.md",
            "/docs/useful-tools/faucets.md",
            "/docs/useful-tools/monitoring.md",
            "/docs/useful-tools/explorers.md",
            "/docs/useful-tools/providers.md",
            "/docs/useful-tools/oracles.md",
            "/docs/useful-tools/account-abstraction.md",
            "/docs/useful-tools/meta-tx.md",
            ["https://www.optimism.io/apps/tools", "Third Party Tools"],
          ],
        },
        {
          title: "SDK",
          children: [
            "/docs/sdk/js-client.md",
            [
              "https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts-bedrock",
              "Optimism Contracts",
            ],
          ],
        },
        "/docs/developers/media.md",
        {
          title: "OP Stack: Bedrock",
          children: [
            "/docs/developers/bedrock/explainer.md",
            "/docs/developers/bedrock/differences.md",
            "/docs/developers/bedrock/node-operator-guide.md",
            "/docs/developers/bedrock/wallet-upgrade.md",
            "/docs/developers/bedrock/metrics.md",
          ],
        },
      ],
      "/docs/contribute/": [
        ["/docs/contribute/", "Contributions Home"],
        [
          "https://calendar.google.com/calendar/embed?src=c_4hui70itm089e7t8q50heh1kno%40group.calendar.google.com",
          "Upcoming Events",
        ],
        {
          title: "🌍 Accessibility",
          children: [
            "/docs/contribute/contribution-path/translators.md",
            "/docs/contribute/contribution-path/local-optimists.md",
            "/docs/contribute/contribution-path/NERD-req.md",
          ],
          collapsable: true,
        },
        {
          title: "📈 Data & Analytics",
          children: [
            "/docs/contribute/contribution-path/numbaNERDs.md"
          ],
          collapsable: true,
        },
        {
          title: "💻 Developers",
          children: [
            ["/docs/developers/", "Build on Optimism"],
            ["https://stack.optimism.io/", "Building with the OP Stack"],
            [
              "https://github.com/orgs/ethereum-optimism/projects/31/views/3",
              "Ideas List",
            ],
            "/docs/contribute/contribution-path/techNERDs.md",
            "/docs/contribute/technical-contributions.md",
          ],
          collapsable: true,
        },
        {
          title: "🏛️ Governance",
          children: [
            "/docs/governance/get-a-grant.md",
            "/docs/contribute/contribution-path/govNERDs.md",
            ["/docs/governance/delegate.md", "Token House"],
            ["/docs/governance/citizens-house.md", "Citizen House"],
          ],
          collapsable: true,
        },
        {
          title: "🫡 Marketing",
          children: [
            '/docs/contribute/important-terms.md',
            '/docs/contribute/contribution-path/Ambassador-req.md',
            '/docs/contribute/demo-day.md'
          ],
          collapsable: true,
        },
      ],
    },
  },

  plugins: [
    "@vuepress/pwa",
    [
      "@vuepress/plugin-medium-zoom",
      {
        // When an image is inside a link, it means we don't to expand it
        // when clicked
        selector: ":not(a) > img",
      },
    ],
    "plausible-analytics",
  ],
};

module.exports.themeConfig.sidebar["/docs/useful-tools/"] =
  module.exports.themeConfig.sidebar["/docs/developers/"];
module.exports.themeConfig.sidebar["/docs/sdk/"] =
  module.exports.themeConfig.sidebar["/docs/developers/"];
