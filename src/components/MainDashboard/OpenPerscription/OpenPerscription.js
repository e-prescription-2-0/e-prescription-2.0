import style from "./OpenPerscription.module.css";
import Accordion from 'react-bootstrap/Accordion';

const OpenPerscription = () => {
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

                <div className={style["div-articels"]}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen id={style["div-articels-accordion"]} >
                        <Accordion.Item eventKey="0" className={style["div-articels-accordion-item"]}>
                            <Accordion.Header><span className={style["div-articels-accordion-item-span"]}>Rp/</span> Аналгин 500мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                Колко пъти дневно?  2 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                Начин на употреба?  Сутрин и вечер.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className={style["div-articels-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                Начин на употреба?  След храна за 5 дни.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className={style["div-userInfo"]}>
                    <p>Пациент: Пешо Пешев Петров</p>
                    <p>Възраст: 33</p>
                    <p>Специфики: няма</p>
                </div>
            </div>
        </ section>
    )
}

export default OpenPerscription;