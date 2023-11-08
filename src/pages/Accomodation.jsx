import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Carousel from "../components/Carousel";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = data.find((housing) => housing.id === id);
  return (
    <div>
      <Carousel data={accomodation.pictures} />

    </div>
  );
}
export default Accomodation;