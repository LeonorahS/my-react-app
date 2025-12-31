import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';  
import './Logement.css';

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        setLogement(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Chargement du logement...</p>;
  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <section className="page logement">
     
      <Slideshow pictures={logement.pictures} />

      <h1 className="logement-title">{logement.title}</h1>
      <p className="logement-location">{logement.location}</p>

    
    </section>
  );
}