import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <NavLink to="/">Retour sur la page d'accueil</NavLink>
        </>
    );
}

export default NotFound;