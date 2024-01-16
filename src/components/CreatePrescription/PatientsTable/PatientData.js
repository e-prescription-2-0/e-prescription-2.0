import styles from './PatientsTable.module.css';
import Button from 'react-bootstrap/Button';


const PatientData = ({_id, firstName,lastName,patientId, hidePatientList}) => {
//console.log(birthDate);
return (
    <tr className={styles['table-row']}>
   
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{patientId}</td>
    <td><Button onClick={(e) =>hidePatientList({_id,firstName,lastName,patientId}) }>Избери</Button></td>
  </tr>
)

}

export default PatientData
