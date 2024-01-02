import { faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./SearchPage.module.css"

const NothingFound = ()=>{
    return(
        <div className={style['search-no-doctors-found']}>
            <FontAwesomeIcon icon={faCircleXmark} />
            <h3>Nothing Found!</h3>
        </div>
    )
}

export default NothingFound