import { useState } from "react"
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent"
import style from "./AuthenticationPage.module.css"

const AuthenticationPage = () => {
   // the formName should be one of the four login register forgotPassword or null
  const [formName, setForm] = useState("register")

 
  return (
    <>
     {/* if formName is null it does not show the content */}
      {formName && (<div className={style["page-pop-up"]}>
        
          <AuthenticationContent formName={formName} setForm={setForm} />
        
      </div>)}
    </>
  )
}

export default AuthenticationPage
