import { usePriceDoughBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalDough = getBalanceNumber(totalRewards)
  const cakePriceBusd = usePriceDoughBusd()

  return totalDough * cakePriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
