export const patientFields = [
  {
    name: "patientId",
    placeholder: "ЕГН",
    classes: ["fadeIn", "second"],
    fieldType: "text",

    autoComplete: "off",

    option: undefined,
  },
  {
    name: "gender",
    placeholder: "Пол",
    classes: ["form-select", "fadeIn", "second"],
    fieldType: "select",
    autoComplete: "off",

    options: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
  {
    name: "dateOfBirth",
    placeholder: "Дата на раждане",
    classes: ["fadeIn", "second"],

    autoComplete: "off",

    fieldType: "date",
    option: undefined,
  },
]
