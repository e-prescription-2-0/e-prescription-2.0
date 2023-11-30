import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./PrescriptionsList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PrescriptionsList = () => {
  return (
    <ListGroup className={style["prescriptions-list-div"]}>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
      <ListGroup.Item className={style["prescriptions-list-item"]}>
        <div>
          <p>
            <span>Rp №:</span> 1234
          </p>
          <p>
            <span>От:</span> д-р Радева
          </p>
          <p>
            <span>За:</span> Пешо Пешев
          </p>
          <p>
            <span>Дата:</span> 12.12.2023
          </p>
        </div>

        <FontAwesomeIcon icon={faAngleRight} />
      </ListGroup.Item>
    </ListGroup>
  );
};
export default PrescriptionsList;
