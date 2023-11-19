import medicationImage from "./Pills.svg";
const Medications = () => {
  return (
    <>
      <img
        src={medicationImage}
        className="img-fluid col-xs-6 col-md-6"
        alt="medication"
      />
    </>
  );
};

export default Medications;
