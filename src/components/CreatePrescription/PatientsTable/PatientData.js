import styles from './PatientsTable.module.css';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlus,faUserCheck} from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faUserCheck} size="lg" />

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

const navigate = useNavigate();
const {patients} = useSelector(state => state.auth.authUser);



return (
  <tr className={styles['table-row']} onClick={() => navigate(`/${searchType}/${_id}`)}>
    
  {searchType !== 'prescriptions' ? (
    <>
      <td>{firstName}</td>
      <td>{lastName}</td>
      {searchType === 'patients' && (
        <>
          <td>{patientId}</td>
          <td>
            <FontAwesomeIcon icon={faCirclePlus} style={{color: "#3c6e71",}} size='lg'/>
            || <FontAwesomeIcon icon={faUserCheck} style={{color: "#3c6e71",}} size="lg" />
            </td>
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
