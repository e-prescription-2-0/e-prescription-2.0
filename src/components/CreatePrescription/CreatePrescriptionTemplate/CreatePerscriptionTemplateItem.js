import Accordion from 'react-bootstrap/Accordion';
import style from "./CreatePrescriptionTemplate.module.css";
import Button from 'react-bootstrap/Button';




const CreatePerscriptionTemplateItem =(
    {medicineName,dosage,dosageType,admission,admissionType,instructions, index, onDeleteMedicineItemHandler,onEditItemHandler}
) => {


    return (
        <Accordion.Item eventKey={index}>
              <Accordion.Header><span className={style["div-articels-accordion-item-span"]}>Rp/</span> <span className={style['ingridients']}>{medicineName} {dosage}{dosageType}.</span></Accordion.Header>
                   <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                        Колко пъти дневно?  {admission}{admissionType}.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                {instructions !== '' && <span>Начин на употреба? {instructions}.</span> }
                              
                              <br/>
                               <Button variant="outline-warning" onClick={() => onEditItemHandler(index)}>Редактирай</Button>
                               <Button variant="outline-danger" onClick={() => onDeleteMedicineItemHandler(index)}>Изтрий</Button>
                            </Accordion.Body>
        </Accordion.Item>
    )


}

export default CreatePerscriptionTemplateItem