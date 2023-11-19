const DoctorFieldsComponent = () => {
  return (
    <>
      <input
        type="text"
        id="doctorId"
        className="fadeIn third"
        name="doctorId"
        placeholder="doctorId"
      />
      <input
        type="text"
        id="hospitalName"
        className="fadeIn third"
        name="hospitalName"
        placeholder="hospitalName"
      />
      <input
        type="text"
        id="specialty"
        className="fadeIn third"
        name="specialty"
        placeholder="specialty"
      />
    </>
  );
};

export default DoctorFieldsComponent;
