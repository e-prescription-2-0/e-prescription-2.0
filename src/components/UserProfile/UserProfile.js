import style from "./UserProfile.module.css";
import Accordion from 'react-bootstrap/Accordion';


const UserProfile = () => {
    let role = "доктор"
    return (
        <div className={style["user-profile"]}>
            <i id={style["close"]} className="fa-solid fa-xmark"></i>
            <i className="fa-regular fa-user"></i>
            <div className={style['content']}>
                <div className={style["content-item"]}>
                    <span>Име</span>
                    <p>Али</p>
                </div>
                <div className={style["content-item"]}>
                    <span>Презиме</span>
                    <p>Ибрахим</p>
                </div>
                <div className={style["content-item"]}>
                    <span>Фамилия</span>
                    <div className={style["content-item-update"]}>
                        <p>Мусли</p>
                        <button>Update</button>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <span>Години</span>
                    <p>24</p>
                </div>
                <div className={style["content-item"]}>
                    <span>Имейл</span>
                    <div className={style["content-item-update"]}>
                        <p>alimusli7777@gmail.com</p>
                        <button>Update</button>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <span>Контакт</span>
                    <div className={style["content-item-update"]}>
                        <p>+359 3334 2344</p>
                        <button>Update</button>
                    </div>
                </div>
                <div className={style["content-item"]}>
                    <span>Роля</span>
                    <p>Доктор</p>
                </div>
                {role === "доктор" &&
                    <>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>УИН</Accordion.Header>
                                <Accordion.Body>000ХХХХХХХ</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>№ Лек. Практика:</Accordion.Header>
                                <Accordion.Body>999ХХХХХХХ</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </>
                }
            </div>
            <button className={style["user-profile-cls-btn"]}>Close</button>
        </div>
    );
}

export default UserProfile