
export const credentialsFields = [
  {
    name: "email",
    placeholder: "Email Address",
    classes: ["fadeIn", "first", "col"],
   
    autoComplete: "email",
   
    fieldType: "text",
    option: undefined,
  },
  {
    name: "password",
    placeholder: "Password",
    classes: ["fadeIn", "second", "col"],

    autoComplete: "new-password",

    fieldType: "password",
    option: undefined,
  },
  {
    name: "repeatPassword",
    placeholder: "Confirm Password",
    classes: ["fadeIn", "third", "col"],
    
    autoComplete: "new-password",
    
    fieldType: "password",
    option: undefined,
  },
  {
    name: "role",
    placeholder: "profileType",
    classes: ["fadeIn", "fourth", "form-select"],
   
    autoComplete: "off",
   
    fieldType: "select",
    options: [
      { text: "Patient", value: "patient" },
      { text: "Pharmacist", value: "pharmacist" },
      { text: "Doctor", value: "doctor" },
    ],
  },
];
