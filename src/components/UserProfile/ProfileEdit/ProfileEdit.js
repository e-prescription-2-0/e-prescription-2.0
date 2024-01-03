import { useForm } from "../../../hooks/useForm";
import style from "./ProfileEdit.module.css"

const ProfileEdit = ({
    userInfo,
    changeMode,
    onEditSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm(userInfo, onEditSubmit);
    return (
        <form className={style["form"]} onSubmit={onSubmit}>
            <i onClick={changeMode} id={style["close"]} className="fa-solid fa-xmark"></i>
            <label className={style["form-item"]}>
                Име:
                <input
                    type="text"
                    name="име"
                    value={values.име}
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Презиме:
                <input
                    type="text"
                    name="презиме"
                    value={values.презиме}
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Фамилия:
                <input
                    type="text"
                    name="фамилия"
                    value={values.фамилия}
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Години:
                <input
                    type="text"
                    name="години"
                    value={values.години}
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Имейл:
                <input
                    value={values.имейл}
                    type="text"
                    name="имейл"
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Контакт:
                <input
                    type="text"
                    name="контакт"
                    value={values.контакт}
                    onChange={changeHandler}
                />
            </label>
            <label className={style["form-item"]}>
                Роля:
                <input
                    type="text"
                    name="роля"
                    value={values.роля}
                    onChange={changeHandler}
                />
            </label>
            {
                values.уин !== undefined &&
                <label className={style["form-item"]}>
                    Уин:
                    <input
                        type="text"
                        name="уин"
                        value={values.уин}
                        onChange={changeHandler}
                    />
                </label>
            }
            <button className={style["submit-btn"]}>Запази</button>
        </form>
    )
}

export default ProfileEdit;