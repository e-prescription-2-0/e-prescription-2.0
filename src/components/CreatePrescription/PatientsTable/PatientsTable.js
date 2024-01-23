
import Table from 'react-bootstrap/Table';
import styles from './PatientsTable.module.css';


import PatientData from './PatientData';


const PatientTable = ({ hidePatientList, patientsList, searchType, isPrescriptionCreateMode }) => {




    return (

        <div className={styles['patient-table-container']}>



            <Table striped hover responsive="sm" size='sm' className={styles['stripped-table']}>
                <thead>
                    <tr>
                        {searchType !== 'prescriptions' ? <>
                            <th>Собствено Име</th>
                            <th>Фамилия</th>
                            {searchType === 'patients' &&
                                <>
                                <th>ЕГН</th>
                                <th></th>
                                </>
                            }
                            {searchType === 'doctors' && <>
                                <th>email</th>
                                <th>специалност</th>
                                <th>Здравно заведение</th>
                            </>
                            }
                            {isPrescriptionCreateMode &&
                                <th></th>
                            }
                        </> : <>
                            <th>Номер на рецепта</th>
                            <th>Издадена на</th>
                            <th>Завършена</th>
                        </>}
                    </tr>
                </thead>
                <tbody className={styles['tbody-list']}>


                    {patientsList.map(p => <PatientData key={p.id} {...p} hidePatientList={hidePatientList} searchType={searchType} isPrescriptionCreateMode={isPrescriptionCreateMode} />)
                    }
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable