import style from "../../../../AuthenticationPage.module.css";


export const PatientFields = [
  {name: 'patientId', placeholder:'patientId', classes: [style["fadeIn"], style["fourth"]].join(' '), fieldType: 'text', option: undefined},
  {name: 'gender', placeholder:'Gender', classes: [style["form-select"], style["fadeIn"], style["fourth"]].join(" "), fieldType: 'select', options: [{text: "Male", value: "male"}, {text: "Female", value: "female"}]},
  {name: 'dateOfBirth', placeholder:'Date Of Birth', classes: [style["fadeIn"], style["fourth"]].join(" "), fieldType: 'date', option: undefined},
]

