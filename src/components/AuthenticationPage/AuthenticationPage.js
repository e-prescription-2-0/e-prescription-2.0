import { useEffect, useState } from "react"
import AuthenticationContent from "./AuthenticationContent/AuthenticationContent"
import style from "./AuthenticationPage.module.css"

const AuthenticationPage = ({link}) => {


 
  return (
    <>
     {/* if link is null it does not show the content */}
      {link && (<div className={style["page-pop-up"]}>
        
          <AuthenticationContent formName={link} />
        
      </div>)}
    </>
  )
}

export default AuthenticationPage
