export const validationRegex = {
  email: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    errorMessage: "Невалиден имейл",
  },
  password: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    // errorMessage: "Password should be at least 8 characters and digits",
    errorMessage:
      "Паролата трябва да е с дължина поне 8 символа и да включва цифри",
  },

  repeatPassword: {
    validation: /^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я\d]{8,}$/,
    errorMessage: "Несъвпадащи пароли",
  },
  firstName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Невалидно име",
  },
  lastName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Невалидна фамилия",
  },

  dateOfBirth: { validation: /.+/, errorMessage: "Изисква се дата на раждане" },
  patientId: {
    validation: /^\d{10}$/,
    errorMessage: "Индентификационният номер е невалиден",
  },

  pharmacistId: {
    validation: /^\d{10}$/,
    errorMessage: "Индентификационният номер е невалиден",
  },
  pharmacyName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Невалидно име на аптека",
  },

  hospitalName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Невалидно име на здравно заведение",
  },
  doctorId: {
    validation: /^\d{10}$/,
    errorMessage: "Индентификационният номер е невалиден",
  },
  specialty: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Невалидна специалност",
  },
}
