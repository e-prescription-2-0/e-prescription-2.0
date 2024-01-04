
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import styles from './PatientsTable.module.css';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import PatientData from './PatientData';
import { useSearch } from '../../../hooks/useSearch';


const PatientTable = ({hidePatientList,patientsList}) => {
    const {found, updateSearchValue, searchValue} = useSearch(patientsList);
    
    

  
   
  

 

    return (

        <div className={styles['patient-table-container']}>
           
            <h2>Моля, изберете пациент</h2>
            <div className={styles['search-container']}>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> <FontAwesomeIcon icon={faMagnifyingGlass}/></InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
          name='search'
          value={searchValue}
          onChange={(e) => updateSearchValue(e.target.value)}
        />
      </InputGroup>
            </div>
            <Table striped responsive="sm" className={styles['stripped-table']}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Собствено Име</th>
                        <th>Фамилия</th>
                        <th>ЕГН</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody className={styles['tbody-list']}>
                    {found.map(p => <PatientData key={p.id} {...p} hidePatientList={hidePatientList}/>)}
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable