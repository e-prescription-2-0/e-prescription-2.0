import style from "./PrescriptionsList.module.css";
import PrescriptionCard from "./PrescriptionCard";
import PrescriptionListHeader from "./PrescriptionListHeader";

const DesktopPrescriptionsList = ({ prescriptions }) => {
  console.log(prescriptions);
  return (
    <ul className={style["prescriptions-list-div"]}>
      <PrescriptionListHeader />

      {prescriptions.map((data) => {
        return <PrescriptionCard prescription={data} />;
      })}
    </ul>
  );
};
export default DesktopPrescriptionsList;
