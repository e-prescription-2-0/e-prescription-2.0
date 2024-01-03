import style from "./UserProfile.module.css";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileEdit from "./ProfileEdit/ProfileEdit";

const UserProfile = () => {
    let role = "доктор";
    const [editMode, setEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState({
        име: "Али",
        презиме: "Ибрахим",
        фамилия: "Мусли",
        години: "23",
        имейл: "али@абж.бг",
        контакт: "089222222222",
        роля: "Доктор",
        уин: "008ххххххх",
    })

    const changeMode = () => {
        setEditMode(state => !state)
    }

    const onEditSubmit = (data) => {
        setUserInfo(data)
        changeMode()
    }

    return (
        <div className={style["user-profile"]}>
            {/* <i id={style["close"]} className="fa-solid fa-xmark"></i> */}
            <i className="fa-regular fa-user"></i>
            <div className={style['content']}>
                {
                    editMode ? <ProfileEdit userInfo={userInfo} changeMode={changeMode} onEditSubmit={onEditSubmit} /> :
                        <ProfileInfo userInfo={userInfo} />
                }

            </div>
            {
                editMode ?
                    null :
                    <button onClick={changeMode} className={style["user-profile-cls-btn"]}>Коригирай</button>
            }

        </div>
    );
}

export default UserProfile