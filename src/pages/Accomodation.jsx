import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = data.find((housing) => housing.id === id);
  return (
    <div className="accomodation">
      <Carousel data={accomodation.pictures} />
      <div className="accomodation_box">
        <div className="accomodation_block1">
          <h2> {accomodation.title} </h2>
          <p> {accomodation.location} </p>
          {
            accomodation.tags && (
              <div className="tags">
                {
                  accomodation.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))
                }
              </div>
            )
          }
        </div>
        <div className="accomodation_block2">
          <div className="accomodation_host">
            <p> {accomodation.host.name} </p>
            <img src={accomodation.host.picture} alt="" />
          </div>
          <Rating rating={accomodation.rating} />
        </div>
      </div>
    </div>
  );
}
export default Accomodation;