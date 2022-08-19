import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://doughnutswap.shop/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.doughnutswap.shop/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.doughnutswap.shop/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://doughnutswap.shop/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://doughnutswap.shop/pools',
  },
  {
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://doughnutswap.shop/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://doughnutswap.shop/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://doughnutswap.shop/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://doughnutswap.shop/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://doughnutswap.shop/teams',
      },
      {
        label: 'Task Center',
        href: 'https://doughnutswap.shop/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://doughnutswap.shop/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.doughnutswap.shop',
      },
      {
        label: 'Tokens',
        href: 'https://info.doughnutswap.shop/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.doughnutswap.shop/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.doughnutswap.shop/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://doughnutswap.shop/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.doughnutswap.shop/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.doughnutswap.shop',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.doughnutswap.shop',
      },
      {
        label: 'Blog',
        href: 'https://doughnutswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://doughnutswap.creator-spring.com/',
      },
    ],
  },
]

export default config
