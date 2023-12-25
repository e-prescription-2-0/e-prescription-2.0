import {
    faUser,
    faFilePrescription,
    faFilePen,
    faRightFromBracket,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export  const dashBoardNavData = {
    doctor: [
      {
        title: "Профил",
        icon: <FontAwesomeIcon icon={faUser} />,
      },
      {
        title: "Изписани рецепти",
        icon: <FontAwesomeIcon icon={faFilePrescription} />,
      },
      {
        title: "Изписване на рецепта",
        icon: <FontAwesomeIcon icon={faFilePen} />,
      },
      {
        title: "Изход",
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      },
    ],
    pharmacist: [
        {
            title: "Профил",
            icon: <FontAwesomeIcon icon={faUser} />,
          },
          {
            title: "Изпълняване на рецепта",
            icon: <FontAwesomeIcon icon={faFilePrescription} />,
          },
          {
            title: "Частично изпълнени рецепти",
            icon: <FontAwesomeIcon icon={faFilePen} />,
          },
          {
            title: "Изход",
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
          },
    ],
    patient: [
        {
            title: "Профил",
            icon: <FontAwesomeIcon icon={faUser} />,
          },
          {
            title: "Моите текущи рецепети",
            icon: <FontAwesomeIcon icon={faFilePrescription} />,
          },
          {
            title: "Моите Изпълнени рецепти",
            icon: <FontAwesomeIcon icon={faFilePen} />,
          },
          {
            title: "Изход",
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
          },
    ],
  };