import CreatePerscriptionTemplateItem from "./CreatePerscriptionTemplateItem";
import style from "./CreatePrescriptionTemplate.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


const CreatePrescriptionTemplate = ({
    medicineItems, 
    onDeleteMedicineItemHandler,
     onEditItemHandler,
     showPopUpModal
    }) => {


    

    return (
        <section className={style["section-openPerscription"]}>
            <div className={style["div-main-content"]}>
                <div className={style["div-header"]}>
                    <h2 className={style["div-header-mainTitile"]}>Рецептурна Бланка</h2>
                    <h3 className={style["div-header-title"]}>Министерство на здравеопазването</h3>
                    <p>Д-р: Радева</p>
                    <p>УИН: 0000000000</p>
                    <p>&#8470; Лек. Практика: 0000000000</p>
                    <p>Телефон: 089xxxxxxx</p>
                </div>
                <Button onClick={() => showPopUpModal() }>Добави лекарство</Button>

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
                        <Button>Запази рецепта</Button>
                <div className={style["div-userInfo"]}>
                    <p>Пациент: Пешо Пешев Петров</p>
                    <p>Възраст: 33</p>
                    <p>Специфики: няма</p>
                </div>
            </div>
        </ section>
    )
}

export default CreatePrescriptionTemplate;