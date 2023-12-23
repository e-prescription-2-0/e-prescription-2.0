import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./PrescriptionsList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PrescriptionCard from "./PrescriptionCard";
import { prescriptionsData } from "../../../mockData";
import { useState } from "react";

const MobilePrescriptionsList = () => {
  const [indexNumber, setIndexNumber] = useState(0);
  const prescription= prescriptionsData[
    indexNumber
  ];
  const onClickForward = () => {
    const nextNumber =
      indexNumber + 1 < prescriptionsData.length ? indexNumber + 1 : 0;
    setIndexNumber(nextNumber);
  };

  const onClickBackwards = () => {
    const lastNumber =
      indexNumber - 1 > 0 ? indexNumber - 1 : prescriptionsData.length - 1;
    setIndexNumber(lastNumber);
  };

  return (
    <div className={style["prescriptions-list-mobile-container"]}>
      <FontAwesomeIcon
        className={style["prescriptions-list-mobile-svg"]}
        icon={faAngleLeft}
        onClick={onClickBackwards}
      />
      <PrescriptionCard
        prescription = {prescription}
      />
      <FontAwesomeIcon
        className={style["prescriptions-list-mobile-svg"]}
        icon={faAngleRight}
        onClick={onClickForward}
      />
    </div>
  );
};
export default MobilePrescriptionsList;
