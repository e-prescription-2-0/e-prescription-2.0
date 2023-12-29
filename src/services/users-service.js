import { HEADER_FORMATS, METHODS } from "../constants/services"
import serviceBind from "./helper"

export default {
  // Patient endpoints
  getPatients: serviceBind({
    url: "/api/patients",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  getPatient: serviceBind({
    url: "/api/patients/{patientId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  getPatientPrescriptions: serviceBind({
    url: "/api/patients/{patientId}/persriptions",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  // Doctors endpoints
  getDoctors: serviceBind({
    url: "/api/doctors?page={pageNumber}$search={searchEmail}",
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
    },
  }),
  // Pharmacist endpoint
  getPharmacists: serviceBind({
    url: "/api/pharmacists",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
  getPharmacistById: serviceBind({
    url: "/api/pharmacists/{pharmacistId}",
    method: METHODS.GET,
    headers: {
      "Content-Type": HEADER_FORMATS.JSON,
      Accept: HEADER_FORMATS.JSON,
    },
  }),
}
