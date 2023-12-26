import style from "../Prescription.module.css";
import PrescriptionHeader from "./PrescriptionHeader";
import MedicineList from "./MedicineList";
import PrescriptionFooter from "./PrescriptionFooter";

const PrescriptionContent = () => {
  return (
    <div className={style["div-main-content"]}>
      <PrescriptionHeader />
      <MedicineList />
      <PrescriptionFooter />
    </div>
  );
};

export default PrescriptionContent;
