import { NavLink } from "react-router-dom";
import "./Erreur404.css"

export default function Erreur404(){
return(
    <section className="page erreur404">
        <h1 className="erreur404-title"> 404</h1>
        <p className="erreur404-message">Oups!La page que vous demandez n'existe pas.</p>
    <NavLink to="/" className="erreur404-link">
        Retourner sur la page d'accueil
    </NavLink>
    </section>
);
}