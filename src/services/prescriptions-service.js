import { HEADER_FORMATS, METHODS } from "../constants/services";
import serviceBind from "./helper";

export default {
    getPrescriptions: serviceBind({
        url: "/api/prescriptions",
        method: METHODS.GET,
        headers: {
            "Content-Type": HEADER_FORMATS.JSON,
            Accept: HEADER_FORMATS.JSON,
        }
    }),

    getPrescription: serviceBind({
        url: `/api/prescriptions/{prescriptionId}`,
        method: METHODS.GET,
        headers: {
            "Content-Type": HEADER_FORMATS.JSON,
            Accept: HEADER_FORMATS.JSON,
        }
    }),

    completePrescription: serviceBind({
        url: "/api/prescriptions/{prescriptionId}/complete",
        method: METHODS.PATCH,
        headers: {
            "Content-Type": HEADER_FORMATS.JSON,
            Accept: HEADER_FORMATS.JSON,
        }
    }),

    createPrescription: serviceBind({
        url: "/api/prescriptions/create",
        method: METHODS.POST,
        headers: {
            "Content-Type": HEADER_FORMATS.JSON,
            Accept: HEADER_FORMATS.JSON,
        }
    }),

    deletePrescription: serviceBind({
        url: "/api/prescriptions/{prescriptionId}/delete",
        method: METHODS.DELETE,
        headers: {
            "Content-Type": HEADER_FORMATS.JSON,
            Accept: HEADER_FORMATS.JSON,
        }
    })
}
