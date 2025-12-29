import{useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow';
import './logement.css';

export default function Logement() {
    const {id} = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/properties/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLogement(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLogement();
    }, [id]);
    if (loading) {
        return <p className="loading">Chargement du logement...</p>;
    }
    if (error || !logement) {
    return <p className="error">Logement non trouvé</p>;
  }
    return (
        <section className="page logement">

            <Slideshow images={logement.pictures} />
            <h1 className="logement-title">{logement.title}</h1>
            <p className="logement-location">{logement.location}</p>
        </section>
    );
}