import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./PrescriptionsList.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import PrescriptionCard from "./PrescriptionCard";
import { useState } from "react";

const MobilePrescriptionsList = ({prescriptions}) => {
  const [indexNumber, setIndexNumber] = useState(0);
  const prescription= prescriptions[
    indexNumber
  ];
  const onClickForward = () => {
    const nextNumber =
      indexNumber + 1 < prescriptions.length ? indexNumber + 1 : 0;
    setIndexNumber(nextNumber);
  };

  const onClickBackwards = () => {
    const lastNumber =
      indexNumber - 1 >= 0 ? indexNumber - 1 : prescriptions.length - 1;
    setIndexNumber(lastNumber);
  };

  return (
    <div className={style["prescriptions-list-mobile-container"]}>
      <FontAwesomeIcon
        className={style["prescriptions-list-mobile-svg"]}
        icon={faCaretLeft}
        onClick={onClickBackwards}
      />
      <PrescriptionCard
        prescription = {prescription}
      />
      <FontAwesomeIcon
        className={style["prescriptions-list-mobile-svg"]}
        icon={faCaretRight}
        onClick={onClickForward}
      />
    </div>
  );
};
export default MobilePrescriptionsList;
