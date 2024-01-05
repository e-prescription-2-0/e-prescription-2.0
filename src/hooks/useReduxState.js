import { useSelector } from "react-redux"

export function useReduxState(selector) {
  return useSelector(selector)
}
