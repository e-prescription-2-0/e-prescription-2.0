import moment from "moment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useReduxAction } from "../../hooks/useReduxAction"
import { useReduxState } from "../../hooks/useReduxState"
import { usersSlice } from "../../reducers/users"
import LoadingPill from "../Loadings/LoadingPill/LoadingPill"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import style from "./UserProfile.module.css"

const UserProfile = () => {
  const loading = useReduxState((state) => state.users.loading)
  const otherProfile = useReduxState((state) => state.users.profile)
  const myProfile = useReduxState((state) => state.auth.authUser)

  const fetchProfile = useReduxAction(usersSlice.actions.fetchProfile)

  const { profileId } = useParams()

  const { firstName, lastName, gender, email, createdOn, dateOfBirth, role } =
    profileId ? otherProfile : myProfile

  const profile = {
    Име: firstName,
    Фамилия: lastName,
    Пол: gender,
    "Дата на раждане": moment(dateOfBirth).format("DD.MM.YYYY"),
    Роля: role,
    Имейл: email,
    "Създаден на": moment(createdOn).format("DD.MM.YYYY"),
  }

  useEffect(() => {
    console.log(profileId && otherProfile?._id !== profileId)
    if (profileId && otherProfile?._id !== profileId) {
      fetchProfile(profileId)
    }
  }, [profileId, otherProfile, fetchProfile])

  //   const changeMode = () => {
  //     setEditMode((state) => !state);
  //   };

  //   const onEditSubmit = (data) => {
  //     setUserInfo(data);
  //     changeMode();
  //   };

  // const loader = (

  // )

  return (
    <div className={style["profile-content-wrapper"]}>
      {loading ? <LoadingPill /> : <ProfileInfo userInfo={profile} />}
    </div>
  )
}

export default UserProfile
