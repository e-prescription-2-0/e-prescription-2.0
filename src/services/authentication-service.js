import { HEADER_FORMATS, METHODS } from "../constants/services"
import serviceBind from "./helper"

export default {
  register: serviceBind({
    url: "/api/auth/register",
    method: METHODS.POST,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  login: serviceBind({
    url: "/api/auth/login",
    method: METHODS.POST,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  logout: serviceBind({
    url: "/api/auth/logout",
    method: METHODS.PUT,
  }),
}
