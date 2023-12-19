
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import style from './CreteMedicineForPrescriptionPopUp.module.css'
import InputGroup from 'react-bootstrap/InputGroup';





const CreateMedicineForPrescriptionPopUp = ({addMedicineHandler, onChangeHandler, formValues,hidePopUpModal}) => {

  

return (
    <div className={style['form-container']}>
    <Form onSubmit={addMedicineHandler}>
      <FloatingLabel
        controlId="floatingInput"
        label="Име на лекарството"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="име на лекарството" 
        name="medicineName"
         value={formValues.medicineName}
         onChange={(e) => onChangeHandler(e)}/>
      </FloatingLabel>
      <InputGroup className="mb-3">
      <Form.Control type="number" 
      placeholder="Дозировка"
       name='dosage'
        value={formValues.dosage}
        onChange={(e) => onChangeHandler(e)} />
      <Form.Select aria-label="Default select example" name='dosageType'
       value={formValues.dosageType}
       onChange={(e) => onChangeHandler(e)}>
      <option>Изберете единица</option>
      <option value="ml">ml</option>
      <option value="mg">mg</option>
      <option value="g">g</option>
      <option value="µg">µg</option>
      <option value="mmol">mmol</option>
     
    </Form.Select>
    </InputGroup>
    <InputGroup className="mb-3">
      <Form.Control type="text" 
      placeholder="Еднократен прием"
       name='admission'
        value={formValues.admission}
        onChange={(e) => onChangeHandler(e)} />
   
      <Form.Select aria-label="Default select example" name='admissionType'
       value={formValues.admissionType}
       onChange={(e) => onChangeHandler(e)}>
      <option>Изберете форма</option>
      <option value="tablet">таблетка</option>
      <option value="capsule">капсула</option>
      <option value="sashe">саше</option>
      <option value="drop">капка</option>
      <option value="injection">инжекция</option>
     
    </Form.Select>
    </InputGroup>
      <FloatingLabel controlId="floatingPassword" label="Начин на употреба">
        <Form.Control as="textarea" rows={3} 
        placeholder="Начин на употреба" 
        name='instructions'
         value={formValues.instructions}
         onChange={(e) => onChangeHandler(e)}/>
      </FloatingLabel>
      <div className={style['button-container']}>
      <Button type="submit" className={style['confirm']}>Добави</Button>
      <Button onClick={()=> hidePopUpModal()} type="button" className={style['reject']} variant="danger">Откажи</Button>
      </div>
    </Form>
    </div>
)


}

export default CreateMedicineForPrescriptionPopUp