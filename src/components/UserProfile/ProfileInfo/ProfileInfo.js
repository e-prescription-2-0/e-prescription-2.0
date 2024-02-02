import style from "./ProfileInfo.module.css"

const ProfileInfo = ({ userInfo = {} }) => {
  let info = Object.entries(userInfo)

  return (
    <div className={style["user-profile"]}>
      <div className={style["avatar"]}>
        <img
          className={style["avatar-img"]}
          src="https://robohash.org/hicveldicta.png"
        />
      </div>
      {info.map((user) => {
        return (
          <div className={style["content-item"]}>
            <span>{user[0]}</span>
            <p>{user[1]}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProfileInfo
