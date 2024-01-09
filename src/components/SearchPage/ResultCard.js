import { ListGroup } from "react-bootstrap"
import style from "./SearchPage.module.css"

const ResultCard = ({ data }) => {
  return (
    <ListGroup.Item as="li" className={style["search-result-list-item"]}>
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
    </ListGroup.Item>
  )
}

export default ResultCard
