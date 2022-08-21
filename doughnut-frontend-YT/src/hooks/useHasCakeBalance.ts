import BigNumber from 'bignumber.js'
import { getDoughAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's DOUGH balance is at least the amount passed in
 */
const useHasDoughBalance = (minimumBalance: BigNumber) => {
  const { balance: cakeBalance } = useTokenBalance(getDoughAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasDoughBalance
