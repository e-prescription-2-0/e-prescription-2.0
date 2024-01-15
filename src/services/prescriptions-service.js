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
        url: `/api/prescriptions`,
        method: METHODS.GET,
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
    })
}
