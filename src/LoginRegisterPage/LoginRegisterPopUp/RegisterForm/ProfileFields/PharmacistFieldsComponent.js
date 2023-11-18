const PharmacistFieldsComponent = () => {
  return (
    <>
      <input
        type="text"
        id="pharmacistId"
        className="fadeIn second"
        name="pharmacistId"
        placeholder="pharmacistId"
      />
      <input
        type="text"
        id="pharmacyName"
        className="fadeIn third"
        name="pharmacyName"
        placeholder="pharmacyName"
      />
    </>
  );
};

export default PharmacistFieldsComponent;
