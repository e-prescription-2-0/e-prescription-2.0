export const arrayFieldFactory = (role, data) => {
  if (role === "doctor") {
    return {
      doctorId: data.doctorId,
      hospitalName: data.hospitalName,
      specialty: data.specialty,
    };
  }
  if (role === "patient") {
    return {
      patientId: data.patientId,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
    };
  } else {
    return { pharmacistId: data.pharmacistId, pharmacyName: data.pharmacyName };
  }
};
