import { ListGroup } from "react-bootstrap";
import style from "./SearchDoctors.module.css";

const DoctorCard = ({name, id}) => {
  return (
    <ListGroup.Item as="li" key={id} className={style['doctor-card-list-item']}>
      <a href={`profile/${id}`}>{name}</a>
    </ListGroup.Item>
  );
};

export default DoctorCard