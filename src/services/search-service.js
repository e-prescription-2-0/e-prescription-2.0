import { HEADER_FORMATS, METHODS } from "../constants/services"
import serviceBind from "./helper"

export default {
  getAllDoctors: serviceBind({
    url: "/api/doctors",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getDoctorById: serviceBind({
    url: "/api/doctors/{doctorId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getAllPatients: serviceBind({
    url: "/api/patients",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getPatientById: serviceBind({
    url: "/api/patients/{patientId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),
  getPatientsByDoctorId: serviceBind({
    url: "/api/user/{doctorId}/patients?search={search}&page={page}", // {"_id":"658f0b9d1a1925a19548cc8e","firstName":"Alice","lastName":"Smith","email":"alice.smith@example.com","role":"doctor","__t":"Doctor","doctorId":"12346","hospitalName":"General Hospital","specialty":"Orthopedics"}
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
      "Access-Control-Allow-Origin": "*",
    },
  }),

  // getDoctors: serviceBind({
  //   url: "/api/doctors?search={search}&page={page}",
  //   method: METHODS.GET,
  //   headers: {
  //     "Content-Type": HEADER_FORMATS.JSON,
  //     Accept: HEADER_FORMATS.JSON,
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }),
  // getMyPatients: serviceBind({
  //   url: "/api/user/{doctorId}/patients?search={search}&page={page}",
  //   method: METHODS.GET,
  //   headers: {
  //     "Content-Type": HEADER_FORMATS.JSON,
  //     Accept: HEADER_FORMATS.JSON,
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }),
  // getAllPatients: serviceBind({
  //   url: "/api/patients?search={search}&page={page}",
  //   method: METHODS.GET,
  //   headers: {
  //     "Content-Type": HEADER_FORMATS.JSON,
  //     Accept: HEADER_FORMATS.JSON,
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }),
}
