
import CreatePerscriptionTemplateItem from "./CreatePerscriptionTemplateItem";
import style from "./CreatePrescriptionTemplate.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useReduxState } from "../../../hooks/useReduxState";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { prescriptionsSlice } from "../../../reducers/prescriptions";
import { useNavigate } from "react-router-dom";


const CreatePrescriptionTemplate = ({
    medicineItems, 
    onDeleteMedicineItemHandler,
     onEditItemHandler,
     showPopUpModal,
     currentPatient,
     showPatientList,
     hidePatientList
    }) => {
    const createPrescription = useReduxAction(prescriptionsSlice.actions.fetchCreatePrescription);
    const navigate = useNavigate()
    const currentDoctor = useReduxState((state) => state.auth.authUser)

    const onSaveBtnClick = () => {
        const prescribedBy = currentDoctor._id;
        const prescribedTo = currentPatient._id;
        const medicines = medicineItems;
        const data = {
            prescribedBy,
            prescribedTo,
            medicines
        }

        createPrescription(data);
        navigate("/prescriptions")
        console.log(medicineItems);
    }
    return (
        <section className={style["section-openPerscription"]} >
            <div className={style["div-main-content"]}>
                <div className={style["div-header"]}>
                    <h2 className={style["div-header-mainTitile"]}>Рецептурна Бланка</h2>
                    <h3 className={style["div-header-title"]}>Министерство на здравеопазването</h3>
                    <p>Д-р: {currentDoctor.lastName}</p>
                    <p>УИН: {currentDoctor.doctorId}</p>
                    <p>&#8470; Лек. Практика: {currentDoctor.hospitalName}</p>
                    <p>Имейл: {currentDoctor.email}</p>
                </div>
                <Button className={style['prescription-btn']} onClick={() => showPopUpModal() }>Добави лекарство</Button>

                <div className={style["div-articels"]}>
                    <Accordion  id={style["div-articels-accordion"]} >
                       {medicineItems.map((x,index) => <CreatePerscriptionTemplateItem 
                       {...x} key={index} 
                       index={index} 
                       onDeleteMedicineItemHandler={onDeleteMedicineItemHandler}
                       onEditItemHandler = {onEditItemHandler}
                       />)}
                    </Accordion>
                </div>
                        <Button onClick={onSaveBtnClick} className={style['prescription-btn']}>Запази рецепта</Button>
                <div className={style["div-userInfo"]}>
                <Button className={style['prescription-btn']} onClick={showPatientList}>Обратно към списъка с пациенти</Button>
                    <p>Пациент: {`${currentPatient?.firstName || ''} ${currentPatient?.lastName || ''} `}</p>
                    <p>Възраст: {currentPatient?.age}</p>
                    <p>Специфики: {currentPatient?.specifics && currentPatient?.specifics.length > 0 ? currentPatient.specifics.join(',') : 'няма'}</p>
                </div>
            </div>
        </ section>
    )
}

export default CreatePrescriptionTemplate;