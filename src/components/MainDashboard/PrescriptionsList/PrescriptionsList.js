import { useCallback, useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { useReduxAction } from "../../../hooks/useReduxAction"
import { useReduxState } from "../../../hooks/useReduxState"
import { prescriptionsSlice } from "../../../reducers/prescriptions"
import LoadingCircle from "../../Loadings/LoadingCircle/LoadingCircle"
import DesktopPrescriptionsList from "./DekstopPrescriptionList"
import EmptyPrescriptionsList from "./EmptyPrescriptionsList"
import MobilePrescriptionsList from "./MobilePrescriptionsList"

const PrescriptionsList = ({}) => {
  const [loading, setLoading] = useState(true)

  const isDesktop = useMediaQuery({ minWidth: 1501 })

  const getPrescriptions = useReduxAction(
    prescriptionsSlice.actions.fetchMyPrescriptions
  )

  const prescriptions = useReduxState(
    (state) => state.prescriptions.allMyPrescriptions
  )

  const prescriptionList = useCallback(() => {
    if (prescriptions.length === 0) {
      return <EmptyPrescriptionsList />
    }
    if (!isDesktop) {
      return <MobilePrescriptionsList prescriptions={prescriptions} />
    } else {
      return <DesktopPrescriptionsList prescriptions={prescriptions} />
    }
  }, [prescriptions, isDesktop])

  useEffect(() => {
    if (loading) {
      getPrescriptions()
      setLoading(false)
    }
  }, [getPrescriptions, loading])

  return loading ? <LoadingCircle /> : prescriptionList()
}
export default PrescriptionsList
