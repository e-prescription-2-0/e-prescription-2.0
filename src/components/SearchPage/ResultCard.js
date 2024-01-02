import { ListGroup } from "react-bootstrap";
import style from "./SearchPage.module.css";
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
  return (
    <ListGroup.Item as="li" className={style["doctor-card-list-item"]}>
      <Link
        className={style["doctor-card-information-link"]}
        to={`profile/${data._id}`}
      >
        <span>
          {data.firstName} {data.lastName}
        </span>
        <span>{data.email}</span>
        {data.role === "doctor" && (
          <>
            <span>{data.specialty}</span>
            <span>{data.hospitalName}</span>
          </>
        )}
        {data.role === "patient" && (
          <>
            <span>{data.gender}</span>
            <span>{data.patientId}</span>
          </>
        )}
      </Link>
    </ListGroup.Item>
  );
};

export default ResultCard;
