import style from "./PrescriptionsList.module.css";
import PrescriptionCard from "./PrescriptionCard";

const DesktopPrescriptionsList = ({prescriptions}) => {
  console.log(prescriptions);
  return (
    <ul className={style["prescriptions-list-div"]}>
      {prescriptions.map((data)=>{
        return <PrescriptionCard prescription={data}/>
      })}

      
    </ul>

   
  );
};
export default DesktopPrescriptionsList;
