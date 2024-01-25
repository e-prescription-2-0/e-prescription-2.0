import style from "./PrescriptionsList.module.css";
import PrescriptionCard from "./PrescriptionCard";
import PrescriptionListHeader from "./PrescriptionListHeader";

const DesktopPrescriptionsList = ({ prescriptions }) => {
  return (
    <ul className={style["prescriptions-list-div"]}>
      <PrescriptionListHeader />

      {prescriptions.map((data) => {
        return <PrescriptionCard key={data._id} prescription={data} />;
      })}
    </ul>
  );
};
export default DesktopPrescriptionsList;
