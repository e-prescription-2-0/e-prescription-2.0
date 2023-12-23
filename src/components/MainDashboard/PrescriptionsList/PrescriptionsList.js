import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./PrescriptionsList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PrescriptionCard from "./PrescriptionCard";
import { prescriptionsData } from "../../../mockData";


const prescriptionsListHardCodeData = [

  
]

const PrescriptionsList = () => {
  return (
    <ul className={style["prescriptions-list-div"]}>
      {prescriptionsData.map((data)=>{
        return <PrescriptionCard prescription={data}/>
      })}
    </ul>
  );
};
export default PrescriptionsList;
