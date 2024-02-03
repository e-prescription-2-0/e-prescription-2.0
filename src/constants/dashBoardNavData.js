import {
  faBedPulse,
  faFilePen,
  faFilePrescription,
  faUser,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const dashBoardNavData = {
  doctor: [
    {
      linkTo: "/profile",
      text: "Профил",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Табло",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/create-prescription",
      text: "Изписване на рецепта",
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: "/search/patients",
      text: "Пациенти",
      icon: <FontAwesomeIcon icon={faBedPulse} />,
    },
  ],
  pharmacist: [
    {
      linkTo: "/profile",
      text: "Профил",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Табло",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/prescription/complete",
      text: "Изпълни рецепта",
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: "/search/doctors",
      text: "Доктори",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
  patient: [
    {
      linkTo: "/profile",
      text: "Профил",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Табло",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/search/doctors",
      text: "Доктори",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
}
