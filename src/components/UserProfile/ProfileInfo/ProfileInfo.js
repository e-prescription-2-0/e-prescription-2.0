import style from "./ProfileInfo.module.css"

const ProfileInfo = ({
    userInfo
}) => {
    let info = Object.entries(userInfo)
    console.log(info);
    return (
        <>
            {
                info.map((user) => {
                    return (
                        user[1] !== "" &&
                        <div className={style["content-item"]}>
                            <span>{user[0]}</span>
                            <p>{user[1]}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProfileInfo;