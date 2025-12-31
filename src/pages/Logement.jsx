import { useState, useEffect } from 'react';
import {useParams,  useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';  
import Tag from '../components/Tag/Tag.jsx';
import Host from '../components/Host/Host.jsx';
import Rating from '../components/Rating/Rating.jsx';
import Collapse from '../components/Collapse';
import './Logement.css';  


export default function Logement() { 

  const { id } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchLogement() {
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);
      
      if (!response.ok) {
        navigate('/not-found', { replace: true });
        return;
      }
      
      const data = await response.json();
      setLogement(data);
      setLoading(false);
    } catch {
      
      navigate('/not-found', { replace: true });
    }
  }

  fetchLogement();
}, [id, navigate]);
  if (loading) return <div className="page logement">Chargement...</div>;
  if (!logement) return null; 

  return (
    <section className="page logement">
      <Slideshow pictures={logement.pictures} />

     <div className="logement-info">
  <div className="logement-details">
    <h1 className="logement-title">{logement.title}</h1>
    <p className="logement-location">{logement.location}</p>

    <div className="logement-tags">
      {logement.tags.map((tag) => (
        <Tag key={tag} name={tag} />
      ))}
    </div>
  </div>

  <div className="logement-aside">
    <Host name={logement.host.name} picture={logement.host.picture} />
    <Rating score={parseInt(logement.rating)} />
  </div>
</div>

<div className="logement-collapses">
  <Collapse title="Description">
    {logement.description}
  </Collapse>

  <Collapse title="Équipements">
    <ul className="equipments-list">
      {logement.equipments.map((equip, index) => (
        <li key={index}>{equip}</li>
      ))}
    </ul>
  </Collapse>
</div>
    </section>
  );
}