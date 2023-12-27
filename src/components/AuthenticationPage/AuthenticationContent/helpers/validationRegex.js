export const validationRegex = {
  email: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    errorMessage: "Email is not a valid",
  },
  password: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    errorMessage: "Password should be at least 8 characters and digits",
  },

  repeatPassword: {
    validation: /^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я\d]{8,}$/,
    errorMessage: "Passwords do not match",
  },
  firstName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "First name is not a valid",
  },
  lastName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Last name is not a valid",
  },

  dateOfBirth: { validation: /.+/, errorMessage: "Date of birth is required" },
  patientId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is not valid",
  },

  pharmacistId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is not valid",
  },
  pharmacyName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Pharmacy name is not a valid",
  },

  hospitalName: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Hospital name is not a valid",
  },
  doctorId: {
    validation: /^\d{10}$/,
    errorMessage: "Identification number is not valid",
  },
  specialty: {
    validation: /^[a-zA-Z]{3,}$/,
    errorMessage: "Specialty is not a valid",
  },
};
