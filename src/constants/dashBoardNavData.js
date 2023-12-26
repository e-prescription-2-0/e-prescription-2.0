import {
  faUser,
  faFilePrescription,
  faFilePen,
  faUserDoctor,
  faFileCircleXmark,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const dashBoardNavData = {
  doctor: [
    {
      link: <Link to={"/profil"}>Профил</Link>,
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      link: <Link to={"/profil"}>Изписани рецепти</Link>,
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      link: <Link to={"/profil"}>Изписване на рецепта</Link>,
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      link: <Link to={"/profil"}>Пациенти</Link>,
      icon: <FontAwesomeIcon icon={faBedPulse} />,
    },
  ],
  pharmacist: [
    {
      link: <Link to={"/profil"}>Профил</Link>,
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      link: <Link to={"/profil"}>Изпълни рецепта</Link>,
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      link: <Link to={"/profil"}>Изпълнени рецепети</Link>,
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
  ],
  patient: [
    {
      link: <Link to={"/profil"}>Профил</Link>,
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      link: <Link to={"/profil"}>Изпълнени рецепети</Link>,
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      link: <Link to={"/profil"}>Неизпълнени рецепти</Link>,
      icon: <FontAwesomeIcon icon={faFileCircleXmark} />,
    },
    {
      link: <Link to={"/profil"}>Доктори</Link>,
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
};
