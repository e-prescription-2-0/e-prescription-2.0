
import { useSelector } from "react-redux";
import CreatePerscriptionTemplateItem from "./CreatePerscriptionTemplateItem";
import style from "./CreatePrescriptionTemplate.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


const CreatePrescriptionTemplate = ({
    medicineItems, 
    onDeleteMedicineItemHandler,
     onEditItemHandler,
     showPopUpModal,
     currentPatient,
     showPatientList,
     hidePatientList
    }) => {

const authUser = useSelector(state => state.auth.authUser);
const{firstName,lastName,doctorId,hospitalName} = authUser;



    return (
        <section className={style["section-openPerscription"]} >
            <div className={style["div-main-content"]}>
                <div className={style["div-header"]}>
                    <h2 className={style["div-header-mainTitile"]}>Рецептурна Бланка</h2>
                    <h3 className={style["div-header-title"]}>Министерство на здравеопазването</h3>
                    <p>Д-р {firstName} {lastName}</p>
                    <p>УИН: {doctorId} ???</p>
                    <p>&#8470; Лек. Практика: 0000000000</p>
                    <p>{hospitalName}</p>
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
                        <Button className={style['prescription-btn']}>Запази рецепта</Button>
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