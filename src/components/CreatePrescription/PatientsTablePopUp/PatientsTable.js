
import Table from 'react-bootstrap/Table';
import styles from './PatientsTable.module.css'


import PatientData from './PatientData';


const PatientTable = ({hidePatientList,patientsList}) => {

    
    

  
   
  

 

    return (

        <div className={styles['patient-table-container']}>
            <h2>Моля, изберете пациент</h2>
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
                    {patientsList.map(p => <PatientData key={p.id} {...p} hidePatientList={hidePatientList}/>)}
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable