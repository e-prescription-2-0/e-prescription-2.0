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

  const allMyPrescriptions = useReduxState(
    (state) => state.prescriptions.allMyPrescriptions
  )

  const prescriptionsFilter = useReduxState(
    (state) => state.prescriptions.prescriptionsFilter
  )

  let prescriptions

  switch (prescriptionsFilter) {
    case "completed":
      prescriptions = allMyPrescriptions.filter(
        (prescription) => prescription.isCompleted === true
      )
      // code block
      break
    case "active":
      prescriptions = allMyPrescriptions.filter(
        (prescription) => prescription.isCompleted === false
      )
      // code block
      break

    default:
      prescriptions = allMyPrescriptions
    // code block
  }

  const prescriptionList = useCallback(() => {
    if (allMyPrescriptions.length === 0) {
      return <EmptyPrescriptionsList />
    }
    if (!isDesktop) {
      return <MobilePrescriptionsList prescriptions={prescriptions} />
    } else {
      return <DesktopPrescriptionsList prescriptions={prescriptions} />
    }
  }, [allMyPrescriptions, isDesktop, prescriptions, prescriptionsFilter])

  useEffect(() => {
    if (loading) {
      getPrescriptions()
      setLoading(false)
    }
  }, [getPrescriptions, loading])

  return loading ? <LoadingCircle /> : prescriptionList()
}
export default PrescriptionsList
