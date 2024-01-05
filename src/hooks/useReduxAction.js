import { useRef } from "react"
import { useDispatch } from "react-redux"

export function useReduxAction(action) {
  const dispatch = useDispatch()
  const reduxAction = useRef(null)

  if (!reduxAction.current) {
    reduxAction.current = (...args) => dispatch(action(...args))
  }

  return reduxAction.current
}
