import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './PatientsTable.module.css'

import mockedPatients from '../../../constants/mockedPatients'
import PatientData from './PatientData';


const PatientTable = ({hidePatientList}) => {

    
    

    const [patientsLlist, setPatientsList] = useState([]);
   
    
    useEffect(() => {
     
        setPatientsList(mockedPatients)

    },[])

 

    return (

        <div className={styles['patient-table-container']}>
            <Table striped responsive="sm" className={styles['stripped-table']}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Собствено Име</th>
                        <th>Фамилия</th>
                        <th>ЕГН</th>
                        <th>#</th>

                    </tr>
                </thead>
                <tbody className={styles['tbody-list']}>
                    {patientsLlist.map(p => <PatientData key={p.id} {...p} hidePatientList={hidePatientList}/>)}
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable