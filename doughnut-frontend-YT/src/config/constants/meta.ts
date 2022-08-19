import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DoughnutSwap',
  description:
    'The Newest AMM on BSC! Earn DOUGH through yield farming or win in our Lottery, then stake it in Jelly Pools to earn more tokens! Initial Farm Offerings (new token launch), NFTs, and more! Stack DOUGH with the lowest fees and top security here on DoughnutSwap.
',
  image: 'https://doughnutswap.shop/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DoughnutSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DoughnutSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DoughnutSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DoughnutSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DoughnutSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DoughnutSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('DoughnutSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DoughnutSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DoughnutSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('DoughnutSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('DoughnutSwap')}`,
      }
    default:
      return null
  }
}
