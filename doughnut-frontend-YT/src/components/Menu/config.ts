import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.doughnutswap.shop/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.doughnutswap.shop/#/pool',
      },
      {
        label: t('LP Migration'),
        href: 'https://v1exchange.doughnutswap.shop/#/migrate',
      },
      {
        label: t('V1 Liquidity (Old)'),
        href: 'https://v1exchange.doughnutswap.shop/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Overview'),
        href: 'https://info.doughnutswap.shop',
      },
      {
        label: t('Tokens'),
        href: 'https://info.doughnutswap.shop/tokens',
      },
      {
        label: t('Pairs'),
        href: 'https://info.doughnutswap.shop/pairs',
      },
      {
        label: t('Accounts'),
        href: 'https://info.doughnutswap.shop/accounts',
      },
    ],
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.doughnutswap.shop/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.doughnutswap.shop',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.doughnutswap.shop',
      },
      {
        label: t('Blog'),
        href: 'https://doughnutswap.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://doughnutswap.creator-spring.com/',
      },
    ],
  },
]

export default config
