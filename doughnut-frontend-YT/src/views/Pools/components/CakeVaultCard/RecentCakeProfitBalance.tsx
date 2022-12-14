import React from 'react'
import { Text, TooltipText, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentDoughProfitBalanceProps {
  cakeToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentDoughProfitBalance: React.FC<RecentDoughProfitBalanceProps> = ({
  cakeToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={cakeToDisplay} decimals={3} bold unit=" DOUGH" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={cakeToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentDoughProfitBalance
