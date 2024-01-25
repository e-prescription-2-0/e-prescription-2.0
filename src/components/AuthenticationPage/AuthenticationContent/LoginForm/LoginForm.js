import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useReduxAction } from "../../../../hooks/useReduxAction"
import { fetchLoginUser } from "../../../../reducers/auth"
import style from "../../AuthenticationPage.module.css"
import FieldBuilder from "../helpers/FieldBuilder"
import { LoginFields } from "./LoginFields"

const LoginForm = ({ setForm }) => {
  const [invalidLoginForm, setInvalidLoginForm] = useState(false)
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  const dispatchSetAuthUser = useReduxAction(fetchLoginUser)
  const navigate = useNavigate()
  const messageState = useSelector((state) => state.messages)
  const { isMessage, messages } = messageState
  useEffect(() => {
    if (isMessage && messages.type === "") {
      navigate("/")
    }
  }, [isMessage, messages.type, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()

    const { loginEmail, loginPassword } = loginFormData

    if (!loginEmail || !loginPassword) {
      setInvalidLoginForm(true)
      return
    }

    dispatchSetAuthUser({ loginEmail, loginPassword })

    setInvalidLoginForm(false)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    })
  }

  return (
    <>
      <h3 className={[style["fadeIn"], style["first"]].join(" ")}>Login</h3>

      <Form noValidate onSubmit={handleSubmit}>
        {invalidLoginForm && (
          <div className={style["error"]}>Invalid Email or password</div>
        )}
        {LoginFields.map((fieldData) => (
          <FieldBuilder
            handleChange={handleChange}
            formData={loginFormData}
            fieldData={fieldData}
          />
        ))}

        <button
          type="submit"
          className={[
            style["fadeIn"],
            style["fourth"],
            style["popup-form-button"],
          ].join(" ")}
        >
          Log In
        </button>
      </Form>
      {/* <!-- Remind Password --> */}
      <div id={style["formFooter"]}>
        <p
          className={style["underlineHover"]}
          onClick={() => setForm("forgotPassword")}
        >
          Forgot Password?
        </p>
      </div>
    </>
  )
}

export default LoginForm
