import Banner from "../components/Banner"
import Cards from "../components/Cards";

import data from "../data/data.json"
import homeBanner from "../assets/beach.png"

const Home = () => {
  return (
    <>
      <Banner img={homeBanner} txt={"Chez vous, partout et ailleurs"} />
      <Cards accomodations={data} />
    </>
  );
}

export default Home;
