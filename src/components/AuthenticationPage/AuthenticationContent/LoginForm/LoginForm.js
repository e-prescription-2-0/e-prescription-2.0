import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useReduxAction } from "../../../../hooks/useReduxAction"
import { fetchLoginUser } from "../../../../reducers/auth"
import style from "../../AuthenticationPage.module.css"
import FieldBuilder from "../helpers/FieldBuilder"
import { LoginFields } from "./LoginFields"

const LoginForm = () => {
  const [invalidLoginForm, setInvalidLoginForm] = useState(false)
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  const dispatchSetAuthUser = useReduxAction(fetchLoginUser)
  const navigate = useNavigate()
  const { isMessage, messages } = useSelector((state) => state.messages)
  const loading = useSelector((state) => state.auth.loading)

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

  useEffect(() => {
    if (isMessage && messages.type === "") {
      navigate("/")
    }
  }, [isMessage, messages.type, navigate])

  return (
    <>
      <h3 className={[style["fadeIn"], style["first"]].join(" ")}>Login</h3>

      <Form noValidate onSubmit={handleSubmit}>
        {invalidLoginForm && (
          <div className={style["error"]}>Невалидни имейл или парола</div>
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
          {loading ? (
            <Spinner animation="border" size="sm" variant="light" />
          ) : (
            "Log In"
          )}
        </button>
      </Form>
      {/* <!-- Remind Password --> */}
      <div id={style["formFooter"]}>
        <p
          className={style["underlineHover"]}
          onClick={() => navigate("/forgotPassword")}
        >
          Забравена парола?
        </p>
      </div>
    </>
  )
}

export default LoginForm
