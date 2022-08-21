import BigNumber from 'bignumber.js'
import { convertSharesToDough } from 'views/Pools/helpers'
import { getDoughVaultContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'

const cakeVaultContract = getDoughVaultContract()

export const fetchPublicVaultData = async () => {
  try {
    const [sharePrice, shares, estimatedDoughBountyReward, totalPendingDoughHarvest] = await makeBatchRequest([
      cakeVaultContract.methods.getPricePerFullShare().call,
      cakeVaultContract.methods.totalShares().call,
      cakeVaultContract.methods.calculateHarvestDoughRewards().call,
      cakeVaultContract.methods.calculateTotalPendingDoughRewards().call,
    ])
    const totalSharesAsBigNumber = new BigNumber(shares as string)
    const sharePriceAsBigNumber = new BigNumber(sharePrice as string)
    const totalDoughInVaultEstimate = convertSharesToDough(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalDoughInVault: totalDoughInVaultEstimate.cakeAsBigNumber.toJSON(),
      estimatedDoughBountyReward: new BigNumber(estimatedDoughBountyReward as string).toJSON(),
      totalPendingDoughHarvest: new BigNumber(totalPendingDoughHarvest as string).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalDoughInVault: null,
      estimatedDoughBountyReward: null,
      totalPendingDoughHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const [performanceFee, callFee, withdrawalFee, withdrawalFeePeriod] = await makeBatchRequest([
      cakeVaultContract.methods.performanceFee().call,
      cakeVaultContract.methods.callFee().call,
      cakeVaultContract.methods.withdrawFee().call,
      cakeVaultContract.methods.withdrawFeePeriod().call,
    ])
    return {
      performanceFee: parseInt(performanceFee as string, 10),
      callFee: parseInt(callFee as string, 10),
      withdrawalFee: parseInt(withdrawalFee as string, 10),
      withdrawalFeePeriod: parseInt(withdrawalFeePeriod as string, 10),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
