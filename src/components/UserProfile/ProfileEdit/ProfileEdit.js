import { useForm } from "../../../hooks/useForm";
import style from "./ProfileEdit.module.css"

const ProfileEdit = ({
    userInfo,
    changeMode,
    onEditSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm(userInfo, onEditSubmit);
    let editInfo = Object.entries(userInfo);

    return (
        <form className={style["form"]} onSubmit={onSubmit}>
            {
                editInfo.map((info => {
                    return (
                        <label className={style["form-item"]}>
                            {info[0]}:
                            <input
                                type="text"
                                name={info[0]}
                                value={values[info[0]]}
                                onChange={changeHandler}
                            />
                        </label>
                    )
                }))
            }
           
            <div className={style['form-btns']}>
                <button className={style["submit-btn"]}>Запази</button>
                <button type="button" onClick={changeMode} className={style["close-btn"]}>Затвори</button>
            </div>

        </form>
    )
}

export default ProfileEdit;