import React from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useDoughVault, usePriceDoughBusd } from 'state/hooks'
import { getDoughVaultEarnings } from 'views/Pools/helpers'
import RecentDoughProfitBalance from './RecentDoughProfitBalance'

const RecentDoughProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { cakeAtLastUserAction, userShares, lastUserActionTime },
  } = useDoughVault()
  const cakePriceBusd = usePriceDoughBusd()
  const { hasAutoEarnings, autoDoughToDisplay, autoUsdToDisplay } = getDoughVaultEarnings(
    account,
    cakeAtLastUserAction,
    userShares,
    pricePerFullShare,
    cakePriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent DOUGH profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentDoughProfitBalance
          cakeToDisplay={autoDoughToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentDoughProfitCountdownRow
