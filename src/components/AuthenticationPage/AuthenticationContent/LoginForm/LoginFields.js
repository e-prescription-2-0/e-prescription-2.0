import style from '../../AuthenticationPage.module.css'

export const LoginFields = [
    {
      name: "loginEmail",
      placeholder: "Email Address",
      classes: [style["fadeIn"], style["first"], style["col"]].join(" "),
     
      autoComplete: "email",
     
      fieldType: "text",
      option: undefined,
    },
    {
      name: "loginPassword",
      placeholder: "Password",
      classes: [style["fadeIn"], style["second"], style["col"]].join(" "),
  
      autoComplete: "password",
  
      fieldType: "password",
      option: undefined,
    }
]