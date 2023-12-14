import { useState } from "react"
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent"
import "./LoginRegister.css"

const AuthenticationPage = () => {
  const [formName, setForm] = useState("login") // the formName should be one of the three login register or null
  return (
    <>
      <div className="page-pop-up">
        {formName && (
          <AuthenticationContent formName={formName} setForm={setForm} />
        )}
      </div>
    </>
  )
}

export default AuthenticationPage
