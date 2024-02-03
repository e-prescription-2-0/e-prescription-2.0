export const credentialsFields = [
  {
    name: "email",
    placeholder: "Имейл адрес",
    classes: ["fadeIn", "first", "col"],

    autoComplete: "email",

    fieldType: "text",
    option: undefined,
  },
  {
    name: "password",
    placeholder: "Парола",
    classes: ["fadeIn", "second", "col"],

    autoComplete: "new-password",

    fieldType: "password",
    option: undefined,
  },
  {
    name: "repeatPassword",
    placeholder: "Потвърди парола",
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
      { text: "Пациент", value: "patient" },
      { text: "Фармацевт", value: "pharmacist" },
      { text: "Доктор", value: "doctor" },
    ],
  },
]
