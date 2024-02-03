import { HEADER_FORMATS, METHODS } from "../constants/services";
import serviceBind from "./helper";

export default {
  getDoctors: serviceBind({
    url: "/api/doctors?search={search}&page={page}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getMyPatients: serviceBind({
    url: "/api/auth/{doctorId}/patients?search={search}&page={page}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getAllPatients: serviceBind({
    url: "/api/patients?search={search}&page={page}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getAllPrescriptions: serviceBind({
    url: "/api/prescriptions?search={search}&page={page}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
};
