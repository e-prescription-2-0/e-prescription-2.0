import style from "./Prescription.module.css";
import Accordion from 'react-bootstrap/Accordion';

const Prescription = () => {
    return (
        <section className={style["section-open-prescription"]}>
            <div className={style["div-main-content"]}>
                <div className={style["div-header"]}>
                    <h2 className={style["div-header-main-title"]}>Рецептурна Бланка</h2>
                    <h3 className={style["div-header-title"]}>Министерство на здравеопазването</h3>
                    <p>Д-р: Радева</p>
                    <p>УИН: 0000000000</p>
                    <p>&#8470; Лек. Практика: 0000000000</p>
                    <p>Телефон: 089xxxxxxx</p>
                </div>

                <div className={style["div-articles"]}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen id={style["div-articles-accordion"]} >
                        <Accordion.Item eventKey="0" className={style["div-articles-accordion-item"]}>
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Аналгин 500мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  2 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Начин на употреба?  Сутрин и вечер.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Начин на употреба?  След храна за 5 дни.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Начин на употреба?  След храна за 5 дни.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Начин на употреба?  След храна за 5 дни.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Начин на употреба?  След храна за 5 дни.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><span className={style["div-articles-accordion-item-span"]}>Rp/</span> Нурофен 200мг.</Accordion.Header>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
                                Колко пъти дневно?  3 х 1тб.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articles-accordion-item-content"]}>
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

export default Prescription;