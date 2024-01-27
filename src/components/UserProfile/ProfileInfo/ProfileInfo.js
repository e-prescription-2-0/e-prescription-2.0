import style from "./ProfileInfo.module.css";

const ProfileInfo = ({ userInfo={} }) => {
  let info = Object.entries(userInfo);

  return (
    <>
      {info.map((user, index) => {
        return (
          // user[1] !== "" &&
          <div className={style["content-item"]}>
            <span>{user[0]}</span>
            <p>{user[1]}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProfileInfo;
