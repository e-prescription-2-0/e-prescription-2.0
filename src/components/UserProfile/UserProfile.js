import style from "./UserProfile.module.css";
import { useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { usersSlice } from "../../reducers/users";
import { useParams } from "react-router-dom";
import LoadingCircle from "../Loadings/LoadingCircle/LoadingCircle";
import moment from "moment";

const UserProfile = () => {
  //   const [editMode, setEditMode] = useState(false);

  const loading = useReduxState((state) => state.users.loading);
  const otherProfile = useReduxState((state) => state.users.profile);
  const myProfile = useReduxState((state) => state.auth.authUser);

  const fetchProfile = useReduxAction(usersSlice.actions.fetchProfile);

  const { profileId } = useParams();

  const {
    firstName,
    lastName,
    gender,
    email,
    createdOn,
    dateOfBirth,
    role,
  } = profileId ? otherProfile : myProfile;
  console.log(otherProfile);
  const profile = {
    Име: firstName,
    Фамилия: lastName,
    Пол: gender,
    "Дата на раждане": moment(dateOfBirth).format("MMM Do YY"),
    Роля: role,
    Емейл: email,
    Създаден: moment(createdOn).format("MMM Do YY"),
  };

  useEffect(() => {
    console.log(profileId && otherProfile?._id !== profileId);
    if (profileId && otherProfile?._id !== profileId) {
      fetchProfile(profileId);
    }
  }, [profileId, otherProfile, fetchProfile]);

  //   const changeMode = () => {
  //     setEditMode((state) => !state);
  //   };

  //   const onEditSubmit = (data) => {
  //     setUserInfo(data);
  //     changeMode();
  //   };

  const loader = <LoadingCircle />;

  return loading ? (
    loader
  ) : (
    <div className={style["user-profile"]}>
      {/* <i id={style["close"]} className="fa-solid fa-xmark"></i> */}
      {/* <i className="fa-regular fa-user"></i> */}
      {/* <div className={style["content"]}>
        {editMode ? (
          <ProfileEdit
            userInfo={userInfo}
            changeMode={changeMode}
            onEditSubmit={onEditSubmit}
          />
        ) : (
          <ProfileInfo userInfo={userInfo} />
        )}
      </div> */}
      <ProfileInfo userInfo={profile} />

      {/* {editMode ? null : (
        <button onClick={changeMode} className={style["user-profile-cls-btn"]}>
          Коригирай
        </button>
      )} */}
    </div>
  );
};

export default UserProfile;
