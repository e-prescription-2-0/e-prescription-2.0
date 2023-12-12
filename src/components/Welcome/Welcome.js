import { useState } from "react"
import { useReduxAction } from "../../hooks/useReduxAction"
import { useReduxState } from "../../hooks/useReduxState"
import { usersSlice } from "../../reducers/users"
import Benefits from "./Benefits/Benefits"
import DemoSteps from "./DemoSteps/DemoSteps"
import Hero from "./Hero/Hero"
import Passion from "./Passion/Passion"
import style from "./Welcome.module.css"
import { prescriptionsSlice } from "../../reducers/prescriptions"

export const Welcome = () => {
  const [inputValue, setInputValue] = useState("1")
  // const [currentInput, setCurrentInput] = useState("1")
  // const getAllMedicines = useReduxAction(medicinesSlice.actions.fetchMedicines)
  const getAllDoctors = useReduxAction(usersSlice.actions.fetchDoctors)
  const getDoctorById = useReduxAction(usersSlice.actions.fetchDoctorById)
  // const medicines = useReduxState((state) => state.medicines.allMedicines)
  const doctors = useReduxState((state) => state.users.doctors)

  const myPrescriptions = useReduxState((state)=> state.prescriptions.allMyPrescriptions)
  const getAllMyPrescriptions = useReduxAction(prescriptionsSlice.actions.fetchMyPrescriptions)


  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with the input value, for now, let's just log it
    console.log("Input Value:", inputValue)
  }

  return (
    <div className={style["main"]}>
      <Hero />
      <Passion />

      {/* <form onSubmit={handleSubmit}>
        <label>
          Type something:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <button
        style={{ width: 50, height: 20, fontSize: 32 }}
        onClick={() => getDoctorById(inputValue)}
      >
        Click
      </button>

      <div style={{ marginTop: 10 }}>
        {doctors.map((d) => {
          return (
            <>
              <p>{d.name}</p>
              <p>{d.hospitalName}</p>
            </>
          )
        })}
      </div> */}
      {/* <button
        style={{ width: 50, height: 100, fontSize: 32 }}
        onClick={() => getAllMyPrescriptions()}
      >
        Click
      </button>
      <div style={{ marginTop: 10 }}>
        {myPrescriptions.map((d) => {
          return (
            <>
              <p>Doctor {d.prescribedBy} - Patient {d.prescribedTo}</p>
            </>
          )
        })}
      </div> */}

      

      <DemoSteps />

      <Benefits />
    </div>
  )
}
