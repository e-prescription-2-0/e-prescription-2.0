export const validationRegex = {
  email: {
    validation: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errorMessage: "Email is not a valid",
  },
  password: {
    validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    errorMessage: "Password should be at least 8 characters and digits",
  },

  repeatPassword: {
    validation: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    errorMessage: "Passwords do not match",
  },
  firstName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "First name is not a valid",
  },
  lastName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Last name is not a valid",
  },

  dateOfBirth: { validation: /.+/, errorMessage: "dateOfBirth is required" },
  patientId: { validation: /^\d{10}$/, errorMessage: "Id is not valid" },

  pharmacistId: { validation: /^\d{10}$/, errorMessage: "Id is not valid" },
  pharmacyName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Pharmacy name is not a valid",
  },

  hospitalName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Hospital name is not a valid",
  },
  doctorId: { validation: /^\d{10}$/, errorMessage: "Id is not valid" },
  specialty: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Specialty is not a valid",
  },
}
