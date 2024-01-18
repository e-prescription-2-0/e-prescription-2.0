import { ListGroup } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const ResultCard = ({ data }) => {
  const userInformation = useCallback(() => {
    switch (data?.role) {
      case "doctor":
        return (
          <>
            <span>
              {data.firstName} {data.lastName}
            </span>
            <span>{data.email}</span>
            <span>{data.specialty}</span>
            <span>{data.hospitalName}</span>
          </>
        );
      case "patient":
        return (
          <>
            <span>
              {data.firstName} {data.lastName}
            </span>
            <span>{data.email}</span>
            <span>{data.gender}</span>
            <span>{data.patientId}</span>
          </>
        );
      default:
        return (
          <>
            <span>Prescriptions - {data.prescriptionId}</span>
          </>
        );
    }
  }, [data]);
  return (
    <ListGroup.Item as="li" className={style["doctor-card-list-item"]}>
      <Link
        className={style["doctor-card-information-link"]}
        to={`profile/${data._id}`}
      >
        {userInformation()}
      </Link>
    </ListGroup.Item>
  );
};

export default ResultCard;
