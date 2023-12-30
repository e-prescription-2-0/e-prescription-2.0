import { ListGroup } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
import { useReduxState } from "../../hooks/useReduxState";

const ListDoctors = () => {
  const doctors = useReduxState((state) => state.doctors.doctors);

  return (
    <ListGroup as="ul" className="collection with-header">
      {doctors.map((data) => (
        <DoctorCard {...data} />
      ))}
    </ListGroup>
  );
};

export default ListDoctors