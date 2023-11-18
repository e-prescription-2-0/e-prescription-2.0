const PatientFieldsComponent = () => {
  return (
    <>
      <input
        type="text"
        id="patientId"
        className="fadeIn third"
        name="patientId"
        placeholder="PatientId"
      />
      
      <select class="form-select fadeIn third" aria-label="Default select example  ">
          <option value="male">Male</option>
          <option value="famale">Famale</option>
      </select>

      <input
        type="date"
        id="dateOfBirth"
        className="fadeIn third"
        name="dateOfBirth"
        placeholder="Date Of Birth"
      />

      
    </>
  );
};

export default PatientFieldsComponent;
