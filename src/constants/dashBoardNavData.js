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
      linkTo: '/profile',
      text: 'Профил',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: '/prescriptions/prescribed',
      text: 'Изписани рецепти',
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: '/prescription/create',
      text: 'Изписване на рецепта',
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: '/patients',
      text: 'Пациенти',
      icon: <FontAwesomeIcon icon={faBedPulse} />,
    },
  ],
  pharmacist: [
    {
      linkTo: '/profile',
      text: 'Профил',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: '/prescription/complete',
      text: 'Изпълни рецепта',
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: '/prescription/prescribed',
      text: 'Изпълнени рецепети',
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
  ],
  patient: [
    {
      linkTo: '/profile',
      text: 'Профил',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: '/prescriptions/active',
      text: 'Неизпълнени рецепети',
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: '/prescriptions/completed',
      text: 'Изпълнени рецепети',
      icon: <FontAwesomeIcon icon={faFileCircleXmark} />,
    },
    {
      linkTo: '/doctors',
      text: 'Доктори',
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
};
