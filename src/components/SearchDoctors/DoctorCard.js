import { ListGroup } from "react-bootstrap";
import style from "./SearchDoctors.module.css";
import { Link } from "react-router-dom";

const DoctorCard = ({
  _id,
  firstName,
  lastName = "Slaveikov",
  email = "example@gmail.com",
  specialty,
  hospitalName,
}) => {
  return (
    <ListGroup.Item as="li" className={style["doctor-card-list-item"]}>
      <Link
        className={style["doctor-card-information-link"]}
        href={`profile/${_id}`}
      >
        <span>{specialty}</span>
        <span>
          {firstName} {lastName}
        </span>
        <span>{email}</span>
        <span>{hospitalName}</span>
      </Link>
    </ListGroup.Item>
  );
};

export default DoctorCard;
