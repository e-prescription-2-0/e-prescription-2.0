import {
    faUser,
    faFilePrescription,
    faFilePen,
    faRightFromBracket,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";




export  const dashBoardNavData = {
    doctor: [
      {
        link: <Link to={'/profil'}>Профил</Link>,
        icon: <FontAwesomeIcon icon={faUser} />,
      },
      {
        link: <Link to={'/profil'}>Изписани рецепти</Link>,
        icon: <FontAwesomeIcon icon={faFilePrescription} />,
      },
      {
        link: <Link to={'/profil'}>Изписване на рецепта</Link>,
        icon: <FontAwesomeIcon icon={faFilePen} />,
      },
      {
        link: <Link to={'/profil'}>Изход</Link>,
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      },
    ],
    pharmacist: [
        {
            link: <Link to={'/profil'}>Профил</Link>,
            icon: <FontAwesomeIcon icon={faUser} />,
          },
          {
            link: <Link to={'/profil'}>Изпълняване на рецепта</Link>,
            icon: <FontAwesomeIcon icon={faFilePrescription} />,
          },
          {
            link: <Link to={'/profil'}>Частично изпълнени рецепти</Link>,
            icon: <FontAwesomeIcon icon={faFilePen} />,
          },
          {
            link: <Link to={'/profil'}>Изход</Link>,
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
          },
    ],
    patient: [
        {
            link: <Link to={'/profil'}>Профил</Link>,
            icon: <FontAwesomeIcon icon={faUser} />,
          },
          {
            link: <Link to={'/profil'}>Моите текущи рецепети</Link>,
            icon: <FontAwesomeIcon icon={faFilePrescription} />,
          },
          {
            link: <Link to={'/profil'}>Моите Изпълнени рецепти</Link>,
            icon: <FontAwesomeIcon icon={faFilePen} />,
          },
          {
            link: <Link to={'/profil'}>Изход</Link>,
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
          },
    ],
  };