import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, cover }) {
    return (
        <NavLink to={`/logement/${id}`} className="card-link">
            <article className="card">
                <img src={cover} alt={title} className="card-img" />
                <div className="card-overlay">
                    <h2 className="card-title">{title}</h2>
                </div>
                
            </article>
        </NavLink>
    );
}