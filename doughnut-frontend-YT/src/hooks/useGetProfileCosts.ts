import { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { BIG_ZERO } from 'utils/bigNumber'
import useToast from './useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [costs, setCosts] = useState({
    numberDoughToReactivate: BIG_ZERO,
    numberDoughToRegister: BIG_ZERO,
    numberDoughToUpdate: BIG_ZERO,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberDoughToReactivate, numberDoughToRegister, numberDoughToUpdate] = await makeBatchRequest([
          profileContract.methods.numberDoughToReactivate().call,
          profileContract.methods.numberDoughToRegister().call,
          profileContract.methods.numberDoughToUpdate().call,
        ])

        setCosts({
          numberDoughToReactivate: new BigNumber(numberDoughToReactivate as string),
          numberDoughToRegister: new BigNumber(numberDoughToRegister as string),
          numberDoughToUpdate: new BigNumber(numberDoughToUpdate as string),
        })
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve DOUGH costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return costs
}

export default useGetProfileCosts
