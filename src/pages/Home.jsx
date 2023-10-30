import Banner from "../components/Banner"
import Cards from "../components/Cards";

import datas from "../datas/datas.json"
import homeBanner from "../assets/beach.png"

const Home = () => {
  return (
    <>
      <Banner img={homeBanner} txt={"Chez vous, partout et ailleurs"} />
      <Cards housings={datas} />
    </>
  );
}

export default Home;
