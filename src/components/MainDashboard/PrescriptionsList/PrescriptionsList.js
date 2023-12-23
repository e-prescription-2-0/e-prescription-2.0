import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./PrescriptionsList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PrescriptionCard from "./PrescriptionCard";


const prescriptionsListHardCodeData = [
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "1"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "2"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "3"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "4"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "5"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "6"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "7"

  },
  {
    number: '1234',
    doctor: 'д-р Радева',
    patient: 'Пешо Пешев',
    date: '12.12.2023',
    id: "8"

  }
  
]

const PrescriptionsList = () => {
  return (
    <ul className={style["prescriptions-list-div"]}>
      {prescriptionsListHardCodeData.map((data)=>{
        return <PrescriptionCard key={data.id} number={data.number} doctor={data.doctor} patient={data.patient} date={data.date}/>
      })}
    </ul>
  );
};
export default PrescriptionsList;
