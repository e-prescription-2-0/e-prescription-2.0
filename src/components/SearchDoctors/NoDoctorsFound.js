import { faStethoscope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./SearchDoctors.module.css"

const NoDoctorsFound = ()=>{
    return(
        <div className={style['search-no-doctors-found']}>
            <FontAwesomeIcon icon={faStethoscope} />
            <h3>No Doctors Found!</h3>
        </div>
    )
}

export default NoDoctorsFound