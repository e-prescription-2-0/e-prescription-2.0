import style from "./ProfileInfo.module.css"

const ProfileInfo = ({
    userInfo
}) => {
    let info = Object.entries(userInfo);

    return (
        <>
            {
                info.map((user, index) => {
                    console.log(index);
                    return (
                        user[1] !== "" &&
                        <div className={ index % 2 === 0? style["content-item"] : style['content-item-bold']}>
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