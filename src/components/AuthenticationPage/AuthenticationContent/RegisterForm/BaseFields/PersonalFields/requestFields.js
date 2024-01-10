
export const arrayFieldFactory = (role, data) => {

    if (role === 'doctor') {
        return {doctorId:data.doctorId, hospitalName:data.hospitalName,specialty: data.specialty}
    }
    if (role === 'patient') {
        return {patientId:data.patientId, dateOfBird:data.dateOfBird,gender: data.gender}
    }
    else {
        return {licenseNumber:data.pharmacistId, pharmacyName:data.pharmacyName}
    }

}