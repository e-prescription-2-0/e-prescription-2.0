import DashboardNavigation from "./DashboardNavigation/DashboardNavigation";
import OpenPerscription from "./OpenPrescription/OpenPrescription";
import PrescriptionsList from "./PrescriptionsList/PrescriptionsList";
import style from "./MainDashboard.module.css";

const MainDashboard = () => {
    return (
        <div className={style["mainDashboard"]}>
            <DashboardNavigation />
            <div className={style["mainDashboard-content"]}>
                <PrescriptionsList />
                <OpenPerscription />
            </div>
        </div>
    );
}

export default MainDashboard;