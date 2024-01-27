import style from "../Prescription.module.css";
import PrescriptionHeader from "./PrescriptionHeader";
import MedicineList from "./MedicineList";
import PrescriptionFooter from "./PrescriptionFooter";
import { useState } from "react";

const PrescriptionContent = () => {

  const [medicals, setMedicals] = useState({})
  return (
    <div className={style["div-main-content"]}>
      <PrescriptionHeader />
      <MedicineList medicals={medicals} setMedicals={setMedicals} />
      <PrescriptionFooter medicals={medicals}/>
    </div>
  );
};

export default PrescriptionContent;
