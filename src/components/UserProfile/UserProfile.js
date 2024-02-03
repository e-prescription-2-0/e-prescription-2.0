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
  const userInformation = profileId ? otherProfile : myProfile
  let profile

  switch (userInformation.role) {
    case "patient":
      profile = {
        Име: userInformation.firstName,
        Фамилия: userInformation.lastName,
        Пол: userInformation.gender,
        "Дата на раждане": moment(userInformation.dateOfBirth).format(
          "MMM Do YY"
        ),
        Емейл: userInformation.email,
        Роля: userInformation.role,

        Създаден: moment(userInformation.createdOn).format("MMM Do YY"),
      }
      break
    case "pharmacist":
      profile = {
        Име: userInformation.firstName,
        Фамилия: userInformation.lastName,
        Емейл: userInformation.email,
        Аптека: userInformation.pharmacyName,
        УИН: userInformation.pharmacistId,
        Роля: userInformation.role,
        Създаден: moment(userInformation.createdOn).format("MMM Do YY"),
      }
      break
    case "doctor":
      profile = {
        Име: userInformation.firstName,
        Фамилия: userInformation.lastName,
        Емейл: userInformation.email,
        Болница: userInformation.hospitalName,
        УИН: userInformation.doctorId,
        Роля: userInformation.role,
        Създаден: moment(userInformation.createdOn).format("MMM Do YY"),
      }
  }

  useEffect(() => {
    if (profileId && otherProfile?._id !== profileId) {
      fetchProfile(profileId)
    }
  }, [profileId, otherProfile, fetchProfile])

  return (
    <div className={style["profile-content-wrapper"]}>
      {loading ? <LoadingPill /> : <ProfileInfo userInfo={profile} />}
    </div>
  )
}

export default UserProfile
