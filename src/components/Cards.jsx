import { NavLink } from "react-router-dom";

const Cards = ({ housings }) => {
    return (
        <>
            {
                housings && (

                    <div className="cards">
                        {housings.map((data) => {
                            return (
                                <article key={data.id}>
                                    <NavLink to={`/logement/${data.id}`}>
                                        <img src={data.cover} alt={data.title} />
                                        <div className="card_text">
                                            <p>{data.title}</p>
                                        </div>
                                    </NavLink>
                                </article>
                            )
                        })}
                    </div>
                ) 
            }
        </>
    )
}
export default Cards;