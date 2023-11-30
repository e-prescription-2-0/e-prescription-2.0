import { ListGroup } from "react-bootstrap"

const PrescriptionCard = ()=>{
    return(
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
    )
}
export default PrescriptionCard