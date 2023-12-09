import CreatePrescriptionTemplate from "./CreatePrescriptionTemplate/CreatePrescriptionTemplate"
import style from './CreatePresscription.module.css'
import { useState } from "react";
import CreateMedicineForPrescriptionPopUp from "./NewMedicinePopUpForm/CreateMedicineForPrescriptionPopUp";


const CreatePrescription = () => {

    const [medicineItems, setMedicineItems] = useState([]);
  
    const [showPopUpForm, setShowPopUpForm] = useState(false)
  
    const [formValues, setFormaValues] = useState({
      medicineName: "",
      dosage: "",
      dosageType: "",
      admission: "",
      admissionType: "",
      instructions: "",
    });

    const showPopUpModal = () => {
        setFormaValues({
            medicineName: "",
            dosage: "",
            dosageType: "",
            admission: "",
            admissionType: "",
            instructions: "",
          });
        setShowPopUpForm(true);

    }

    const hidePopUpModal = () => {
        setShowPopUpForm(false);

    }
  
    const addMedicineHandler = (e) => {
      e.preventDefault();
      setMedicineItems((prevState) => {
        console.log(prevState);
        return [...prevState, formValues];
      });
      
      setShowPopUpForm(false);

  
     
    };
  
    const onChangeHandler = (e) => {
      setFormaValues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const onDeleteMedicineItemHandler = (index) => {
      setMedicineItems((state) => state.filter((x, i) => i !== index));
    };
  
    const onEditItemHandler = (index) => {
        setShowPopUpForm(true);
     
      setFormaValues(medicineItems[index]);
      
     //onDeleteMedicineItemHandler(index);
    };

return (
    <div className={style['create-prescription-container']}>
        <CreatePrescriptionTemplate 
        showPopUpModal={showPopUpModal}
        medicineItems={medicineItems}
         onDeleteMedicineItemHandler={onDeleteMedicineItemHandler} 
         onEditItemHandler={onEditItemHandler}/>
         {showPopUpForm && <CreateMedicineForPrescriptionPopUp 
         addMedicineHandler={addMedicineHandler} 
         onChangeHandler={onChangeHandler}
         hidePopUpModal= {hidePopUpModal}
          formValues={formValues}/>}

    </div>
)

}


export default CreatePrescription