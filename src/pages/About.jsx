import Banner from "../components/Banner"
import Collapse from "../components/Collapse";

import aboutBanner from "../assets/montains.png"
import data from "../data/about.json"

const About = () => {
    return (
        <>
            <Banner img={aboutBanner} />
            <div className="about">
                {
                    data &&
                    data.map((data, index) => (
                        <Collapse key={index} title={data.title} desc={data.description} />
                    ))
                }
            </div>
        </>
    );
}
export default About;