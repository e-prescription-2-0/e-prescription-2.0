import styles from './PatientsTable.module.css';
import Button from 'react-bootstrap/Button';


const PatientData = ({id, firstName,lastName,patientId, hidePatientList}) => {

return (
    <tr className={styles['table-row']}>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{patientId}</td>
    <td><Button variant="info" onClick={() =>hidePatientList() }>Избери</Button></td>
  </tr>
)

}

export default PatientData
