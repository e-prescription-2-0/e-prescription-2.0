const RegisterFormComponent = () => {
  return (
    <>
      {/* <!-- Icon --> */}

      <form>
        <input
          type="text"
          id="firstName"
          className="fadeIn second"
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          className="fadeIn third"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="email"
          className="fadeIn third"
          name="email"
          placeholder="Email"
        />
        <select class="form-select fadeIn third" aria-label="Default select example  ">
          <option selected>Patient</option>
          <option value="1">Pharmacist</option>
          <option value="2">Doctor</option>
        </select>
    

        <input type="submit" className="fadeIn fourth" value="Register" />
      </form>
    </>
  );
};

export default RegisterFormComponent;
