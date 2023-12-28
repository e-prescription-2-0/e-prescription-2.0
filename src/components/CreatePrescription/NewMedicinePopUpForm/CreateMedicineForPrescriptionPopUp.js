import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import style from "./CreateMedicineForPrescriptionPopUp.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { formFieldCheckFn } from "../../../utils/formFieldsCheck";

const CreateMedicineForPrescriptionPopUp = ({
  addMedicineHandler,
  onChangeHandler,
  formValues,
  hidePopUpModal,
}) => {
  const [error, setError] = useState({
    medicineName: false,
    dosage: false,
    dosageType: false,
    admission: false,
    admissionType: false,
    instructions: false,
  });

  const errCheck = (e, value) => {
    const isError = !!value;

    setError((v) => ({ ...v, [e.target.name]: !isError }));
  };

  return (
    <div className={style["form-container"]}>
      <Form onSubmit={addMedicineHandler}>
        <FloatingLabel
          controlId="floatingInput"
          label={
            error.medicineName
              ? "Името на лекарството е задължително"
              : "Име на лекарството"
          }
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="име на лекарството"
            className={error.medicineName ? style["error-input"] : ""}
            name="medicineName"
            value={formValues.medicineName}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.medicineName)}
          />
        </FloatingLabel>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={!error.dosage ? "Дозировка" : "Полето е задължително"}
            name="dosage"
            className={!error.dosage ? "" : style["error-input"]}
            value={formValues.dosage}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.dosage)}
          />

          <Form.Select
            aria-label="Default select example"
            name="dosageType"
            value={formValues.dosageType}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.dosageType)}
            className={error.dosageType ? style["error-input"] : ""}
          >
            <option value="">
              {!error.dosageType ? "Изберете единица" : "Полето е задължително"}
            </option>
            <option value="ml">ml</option>
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="µg">µg</option>
            <option value="mmol">mmol</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={
              !error.admission ? "Еднократен прием" : "Полето е задължително"
            }
            className={error.admission ? style["error-input"] : ""}
            name="admission"
            value={formValues.admission}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.admission)}
          />

          <Form.Select
            aria-label="Default select example"
            name="admissionType"
            className={error.admissionType ? style["error-input"] : ""}
            value={formValues.admissionType}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.admissionType)}
          >
            <option value="">
              {!error.admissionType
                ? "Изберете форма"
                : "Полето е задължително"}
            </option>
            <option value="tablet">таблетка</option>
            <option value="capsule">капсула</option>
            <option value="sashe">саше</option>
            <option value="drop">капка</option>
            <option value="injection">инжекция</option>
          </Form.Select>
        </InputGroup>
        <FloatingLabel
          controlId="floatingPassword"
          label={
            !error.instructions
              ? "Начин на употреба"
              : "Въведете инструкции за употреба"
          }
        >
          <Form.Control
            as="textarea"
            placeholder={
              !error.instructions
                ? "Начин на употреба"
                : "Въведете инструкции за употреба"
            }
            rows={3}
            className={error.instructions ? style["error-input"] : ""}
            name="instructions"
            value={formValues.instructions}
            onChange={(e) => onChangeHandler(e)}
            onBlur={(e) => errCheck(e, formValues.instructions)}
          />
        </FloatingLabel>
        <div className={style["button-container"]}>
          <Button type="submit" className={style["confirm"]} disabled={formFieldCheckFn(formValues)}>
            Добави
          </Button>
          <Button
            onClick={() => hidePopUpModal()}
            type="button"
            className={style["reject"]}
            variant="danger"
          >
            Откажи
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateMedicineForPrescriptionPopUp;
