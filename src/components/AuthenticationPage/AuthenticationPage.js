import { useState } from "react"
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent"
import style from "./AuthenticationPage.module.css"

const AuthenticationPage = () => {
  const [formName, setForm] = useState("register") // the formName should be one of the three login register or null
  return (
    <>
      <div className={style["page-pop-up"]}>
        {formName && (
          <AuthenticationContent formName={formName} setForm={setForm} />
        )}
      </div>
    </>
  )
}

export default AuthenticationPage
