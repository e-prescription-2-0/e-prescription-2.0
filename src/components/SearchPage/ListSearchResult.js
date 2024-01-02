import { ListGroup } from "react-bootstrap";
import { useReduxState } from "../../hooks/useReduxState";
import ResultCard from "./ResultCard";

const ListSearchResult = () => {
  const listCardData = useReduxState((state) => state.search.list);


  	console.log(listCardData)
  return (
    <ListGroup as="ul" className="collection with-header">
      {listCardData.map(
        (data) =>  <ResultCard key={data._id} data = {data} />
      )}
    </ListGroup>
  );
};

export default ListSearchResult;
