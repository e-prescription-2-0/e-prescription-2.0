import { ListGroup } from "react-bootstrap";
import { useReduxState } from "../../hooks/useReduxState";
import ResultCard from "./ResultCard";
import { useSearchParams } from "react-router-dom";

const ListSearchResult = ({collection}) => {

  return (
    <ListGroup as="ul" className="collection with-header">
      {collection.map((data) => (
        <ResultCard key={data._id} data={data} />
      ))}
    </ListGroup>
  );
};

export default ListSearchResult;
