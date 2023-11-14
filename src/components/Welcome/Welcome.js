import style from './Welcome.module.css';
import Button from 'react-bootstrap/Button';

export const Welcome = () => {
    return (
        <div>
            <div className={style["div-doctors"]}>
                <h2>Our Specialist</h2>

                <section className={style["section-doctorList"]}>
                    <article>
                        <i class="fa-solid fa-hand-dots"></i>
                        <div className={style["doctorInfo"]}>
                            <h3>Dr. Smith Jonshon</h3>
                            <h4>Type: Allergists</h4>
                        </div>
                        <p>They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases. They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases</p>
                        <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                    </article>

                    <article>
                        <i class="fa-solid fa-user-doctor"></i>
                        <div className={style["doctorInfo"]}>
                            <h3>Dr. Sara Li</h3>
                            <h4>Type: Anesthesiologists</h4>
                        </div>
                        <p>These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia.</p>
                        <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                    </article>

                    <article>
                        <i class="fa-solid fa-heart-pulse"></i>
                        <div className={style["doctorInfo"]}>
                            <h3>Dr. Joerg Dalshman</h3>
                            <h4>Type: Cardiologists</h4>
                        </div>
                        <p>They are experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.</p>
                        <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                    </article>

                    <article>
                        <i class="fa-solid fa-hand-holding-medical"></i>
                        <div className={style["doctorInfo"]}>
                            <h3>Dr. Ivan Kuzmanov</h3>
                            <h4>Type: Dermatologists</h4>
                        </div>
                        <p>Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.</p>
                        <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                    </article>

                    <article>
                        <i class="fa-solid fa-user-nurse icons"></i>
                        <div className={style["doctorInfo"]}>
                            <h3>Dr. Eleonor Bard</h3>
                            <h4>Type: Physiatrists</h4>
                        </div>
                        <p>These specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.</p>
                        <Button className={style["cardBtn"]} variant="success">Details</Button>{' '}
                    </article>
                </section>
            </div>

            <div className={style["div-steps"]}>
                <section className={style["section-title"]}>
                    <h2>How It Works</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </section>

                <section className={style["section-steps"]}>
                    <article>
                        <h4>Step 1</h4>
                        <h3>Make an appointment</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </article>
                    <article>
                        <h4>Step 2</h4>
                        <h3>Go to the Doctor</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </article>
                    <article>
                        <h4>Step 3</h4>
                        <h3>Go to the Pharmacist</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </article>
                </section>
            </div>

            <div className={style["div-benefits"]}>
                <h2>Why Choose Our Site</h2>

                <section className={style["section-benefits"]}>
                    <article>
                        <div className={style["title-info"]}>
                            <i class="fa-solid fa-user-doctor"></i>
                            <h3>Expertise</h3>
                        </div>
                        <p>All of our doctors are registered with the Bulgarian Medical Council and provide convenient and confidential healthcare to our patients.</p>
                    </article>

                    <article>
                        <div className={style["title-info"]}>
                            <i class="fa-solid fa-user-shield"></i>
                            <h3>Confidential</h3>
                        </div>
                        <p>The same doctor-patient confidentiality exists as in a regular face-to-face consultation, so you will be in good hands.</p>
                    </article>

                    <article>
                        <div className={style["title-info"]}>
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <h3>Caring</h3>
                        </div>
                            <p>Our site was created by and is led by medical professionals, so patient safety is always our priority.</p>
                    </article>
                </section>
            </div>
        </div >
    );
}   