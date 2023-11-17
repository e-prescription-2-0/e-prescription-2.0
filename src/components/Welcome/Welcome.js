import style from './Welcome.module.css';
import { Steps } from './Steps/Steps';
import { Benefits } from './Benefits/Benefits';
import OurSpecialists from './OurSpecialists/OurSpecialists';

export const Welcome = () => {
    return (
        <div className={style["main"]}>
            <OurSpecialists />

            <Steps />

            <Benefits />
        </div >
    );
}   