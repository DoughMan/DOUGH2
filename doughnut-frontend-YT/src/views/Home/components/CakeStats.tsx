import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getDoughAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledDoughStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const DoughStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getDoughAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledDoughStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Dough Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total DOUGH Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total DOUGH Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New DOUGH/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={20} />
        </Row>
      </CardBody>
    </StyledDoughStats>
  )
}

export default DoughStats
