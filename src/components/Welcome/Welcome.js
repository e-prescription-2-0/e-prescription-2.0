import style from './Welcome.module.css';
import { Steps } from './Steps/Steps';
import { Benefits } from './Benefits/Benefits';
import OurSpecialists from './Passion/OurSpecialists';
import Hero from './Hero/Hero';

export const Welcome = () => {
    return (
        <div className={style["main"]}>
            <Hero />
            <OurSpecialists />

            <Steps />

            <Benefits />
        </div >
    );
}   