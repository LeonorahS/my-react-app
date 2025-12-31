import './Host.css';

export default function Host({ name, picture }) {
    return (
        <div className="host">
            <span className="host-name">{name}</span>
            <img src={picture} className="host-picture" alt={name} />
        </div>
    );
}