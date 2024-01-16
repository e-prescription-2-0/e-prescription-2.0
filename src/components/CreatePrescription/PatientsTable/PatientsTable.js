
import Table from 'react-bootstrap/Table';
import styles from './PatientsTable.module.css';


import PatientData from './PatientData';


const PatientTable = ({hidePatientList,patientsList}) => {
    
    


    return (

        <div className={styles['patient-table-container']}>
           
           
            
            <Table striped hover responsive="sm" size='sm' className={styles['stripped-table']}>
                <thead>
                    <tr>
                        
                        <th>Собствено Име</th>
                        <th>Фамилия</th>
                        <th>ЕГН</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody className={styles['tbody-list']}>
                    {patientsList.map(p => <PatientData key={p.id} {...p} hidePatientList={hidePatientList}/>)}
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable