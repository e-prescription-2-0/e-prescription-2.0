import { HEADER_FORMATS, METHODS } from "../constants/services"
import { getToken } from "../utils/getToken"
import serviceBind from "./helper";
import * as request from '../utils/requester'

export default {
  register: serviceBind({
    url: "/api/auth/register",
    method: METHODS.POST,
    headers: {
      credentials: 'include',
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  login: serviceBind({
    url: "/api/auth/login",
    method: METHODS.POST,
    headers: {
      credentials: 'include',
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  logout: serviceBind({
    url: "/api/auth/logout",
    method: METHODS.POST,
    headers :{ 
      credentials: 'include',
      'X-Authorization': getToken()
    }
  }),
}


// export const requestLogin = async (loginData) => {

  
//   const result = await request.post('http://localhost:3030/api/auth/login', loginData);

//   return result;
// };


// export const requestLogout = async () => await request.post('http://localhost:3030/api/auth/logout')



