import {
  faUser,
  faFilePrescription,
  faFilePen,
  faUserDoctor,
  faFileCircleXmark,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashBoardNavData = {
  doctor: [
    {
      linkTo: "/profile",
      text: "Профил",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/prescriptions",
      text: "Рецепти",
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
    {
      linkTo: "/search/doctors",
      text: "Доктори",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
  pharmacist: [
    {
      linkTo: "/profile",
      text: "Профил",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/prescription",
      text: "Рецепти",
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
      linkTo: "/prescriptions",
      text: "Рецепти",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/search/doctors",
      text: "Доктори",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
};
