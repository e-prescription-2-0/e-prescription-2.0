
import Table from 'react-bootstrap/Table';
import styles from './PatientsTable.module.css';
import PatientData from './PatientData';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const PatientTable = ({ hidePatientList, patientsList, searchType, isPrescriptionCreateMode,isMyPatientsChecked }) => {

const [myList, setMyList] = useState([]);
const {patients:myPatients} = useSelector(state => state.auth.authUser)




useEffect(() => {
    if(isMyPatientsChecked) {
        const filteredList = patientsList.filter(f => myPatients.includes(f._id));
        setMyList(filteredList);
    }else {
        
        setMyList(patientsList); 
      }

},[isMyPatientsChecked,patientsList,myPatients])



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
                                {!isPrescriptionCreateMode && <th></th>}
                                
                                
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


                    {myList.map(p => <PatientData key={p._id} {...p} hidePatientList={hidePatientList} searchType={searchType} isPrescriptionCreateMode={isPrescriptionCreateMode} />)
                    }
                </tbody>
            </Table>
        </div>
    )

}
export default PatientTable