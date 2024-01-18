import styles from './PatientsTable.module.css';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';


const PatientData = (
  {
    _id,
     firstName,
     lastName,
     patientId,
     email,
     specialty,
     hospitalName,
     prescriptionId,
     issuedOn,
     isCompleted, 
     hidePatientList,
     searchType,
     isPrescriptionCreateMode}) => {

const navigate = useNavigate()
return (
  <tr className={styles['table-row']} onClick={() => navigate(`/${searchType}/${_id}`)}>
    
  {searchType !== 'prescriptions' ? (
    <>
      <td>{firstName}</td>
      <td>{lastName}</td>
      {searchType === 'patients' && (
        <>
          <td>{patientId}</td>
          {isPrescriptionCreateMode && 
          <td>
            <Button onClick={(e) => {e.stopPropagation(); hidePatientList({_id, firstName, lastName, patientId})}}>
              Изпиши
            </Button>
          </td>
          }
        </>
      )}
      {searchType === 'doctors' && (
        <>
          <td>{email}</td>
          <td>{specialty}</td>
          <td>{hospitalName}</td>
        </>
      )}
    </>
  ) : ( <>
    <td>{prescriptionId}</td>
    <td><Moment format='DD/MM/YYYY'>{issuedOn}</Moment></td>
    <td>{isCompleted? 'Да' : 'Не'}</td>
    </>
  )}
</tr>
)

}

export default PatientData
