import Carousel from 'react-bootstrap/Carousel';
import style from "./OurSpecialists.module.css"
import Button from 'react-bootstrap/Button';

function OurSpecialists() {

    return (
        <Carousel className={style["main"]} fade>
            <Carousel.Item className={style["carusel-item"]}>
                <article className={style["article"]}>
                    <i class="fa-solid fa-hand-dots"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Smith Jonshon</h3>
                        <h4>Type: Allergists</h4>
                    </div>
                    <p>They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases. They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>

                <article className={style["article"]}>
                    <i class="fa-solid fa-user-doctor"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Sara Li</h3>
                        <h4>Type: Anesthesiologists</h4>
                    </div>
                    <p>These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia.</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>
            </Carousel.Item>

            <Carousel.Item className={style["carusel-item"]} >
                <article className={style["article"]}>
                    <i class="fa-solid fa-heart-pulse"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Joerg Dalshman</h3>
                        <h4>Type: Cardiologists</h4>
                    </div>
                    <p>They are experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>

                <article className={style["article"]}>
                    <i class="fa-solid fa-hand-holding-medical"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Ivan Kuzmanov</h3>
                        <h4>Type: Dermatologists</h4>
                    </div>
                    <p>Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>
            </Carousel.Item>

            <Carousel.Item className={style["carusel-item"]}>
                <article className={style["article"]}>
                    <i class="fa-solid fa-user-nurse icons"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Eleonor Bard</h3>
                        <h4>Type: Physiatrists</h4>
                    </div>
                    <p>These specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>

                <article className={style["article"]}>
                    <i class="fa-solid fa-user-doctor"></i>
                    <div className={style["doctorInfo"]}>
                        <h3>Dr. Sara Li</h3>
                        <h4>Type: Anesthesiologists</h4>
                    </div>
                    <p>These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia.</p>
                    <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                </article>
            </Carousel.Item>
        </Carousel>
    );
}

export default OurSpecialists;