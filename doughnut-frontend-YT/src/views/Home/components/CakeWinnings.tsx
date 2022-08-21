import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceDoughBusd } from 'state/hooks'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface DoughWinningsProps {
  claimAmount: BigNumber
}

const DoughWinnings: React.FC<DoughWinningsProps> = ({ claimAmount }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const cakeAmount = getBalanceNumber(claimAmount)
  const cakePriceBusd = usePriceDoughBusd()
  const claimAmountBusd = new BigNumber(cakeAmount).multipliedBy(cakePriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={cakeAmount} lineHeight="1.5" />
      {cakePriceBusd.gt(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default DoughWinnings
