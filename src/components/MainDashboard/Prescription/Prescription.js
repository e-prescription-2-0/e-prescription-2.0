import style from "./Prescription.module.css";
import Accordion from 'react-bootstrap/Accordion';
import { useReduxState } from "../../../hooks/useReduxState";

const Prescription = () => {
    const prescription = useReduxState((state) => state.prescriptions.openPrescription)
    const firstPrescriptionOfAll = useReduxState((state) => state.prescriptions.allMyPrescriptions)

    let currentPrescription = prescription._id ? prescription : firstPrescriptionOfAll[0]
    return (
        <section className={style["section-open-prescription"]}>
            <div className={style["div-main-content"]}>
                <div className={style["div-header"]}>
                    <h2 className={style["div-header-main-title"]}>Рецептурна Бланка</h2>
                    <h3 className={style["div-header-title"]}>Министерство на здравеопазването</h3>
                    <p>Д-р: {currentPrescription.prescribedBy.name} {currentPrescription.prescribedBy.lastName}</p>
                    <p>УИН: {currentPrescription.prescribedBy.doctorId}</p>
                    <p>&#8470; Лек. Практика: {currentPrescription.prescribedBy.hospitalId}</p>
                    <p>Телефон: {currentPrescription.prescribedBy.doctorPhone}</p>
                </div>

                <div className={style["div-articles"]}>
                    <Accordion defaultActiveKey={[0]} alwaysOpen id={style["div-articles-accordion"]} >
                        {
                            currentPrescription.medicines.map((medicine, index) => {
                                return <Accordion.Item eventKey={index} className={style["div-articles-accordion-item"]}>
                                    <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span>{medicine.article}</Accordion.Header>
                                    <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                        Колко пъти дневно?  {medicine.quantity}
                                    </Accordion.Body>
                                    <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                        Начин на употреба?  {medicine.methodOfUse}
                                    </Accordion.Body>
                                </Accordion.Item>
                            })
                        }
                    </Accordion>
                </div>

                <div className={style["div-userInfo"]}>
                    <p>Пациент: {currentPrescription.prescribedTo.firstName} {currentPrescription.prescribedTo.secondName} {currentPrescription.prescribedTo.lastName}</p>
                    <p>Възраст: {currentPrescription.prescribedTo.age}</p>
                    <p>Специфики: {currentPrescription.prescribedTo.specifics}</p>
                </div>
            </div>
        </ section>
    )
}

export default Prescription;